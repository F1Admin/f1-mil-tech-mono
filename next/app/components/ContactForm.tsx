'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          to: process.env.NEXT_PUBLIC_MILITARY_EMAIL,
          bcc: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-zinc-400 p-6 md:p-10"
    >
      <FormField
        label="Name"
        name="name"
        register={register}
        required
        error={errors.name}
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        register={register}
        required
        error={errors.email}
      />
      <FormField
        label="Subject"
        name="subject"
        register={register}
        required
        error={errors.subject}
      />
      <FormField
        label="Message"
        name="message"
        register={register}
        required
        error={errors.message}
        textarea
      />

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full border border-zinc-400 bg-black px-5 py-3 text-sm text-white transition-colors hover:bg-zinc-800 focus:border-white focus:outline-none disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {submitStatus === 'success' && (
        <p className="mt-4 text-green-500">Form submitted successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-4 text-red-500">
          An error occurred. Please try again.
        </p>
      )}
    </form>
  );
}

interface FormFieldProps {
  label: string;
  name: keyof FormInputs;
  register: any;
  required?: boolean;
  error?: any;
  type?: string;
  textarea?: boolean;
}

function FormField({
  label,
  name,
  register,
  required = false,
  error,
  type = 'text',
  textarea = false,
}: FormFieldProps) {
  const inputClasses =
    'mt-1 w-full border border-zinc-400 bg-black px-4 py-2 text-sm text-white focus:border-white focus:outline-none';

  return (
    <div className="mb-4">
      <label className="block text-sm font-thin text-zinc-400">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {textarea ? (
        <textarea
          {...register(name, { required: required && `${label} is required` })}
          className={inputClasses}
          rows={5}
        />
      ) : (
        <input
          type={type}
          {...register(name, { required: required && `${label} is required` })}
          className={inputClasses}
        />
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
}
