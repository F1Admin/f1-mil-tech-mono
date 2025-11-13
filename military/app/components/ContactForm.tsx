'use client';
import { useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // Honeypot field
};

export default function ContactForm({ email }: { email: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );
  const formStartTime = useRef<number>(Date.now());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // Honeypot check - if this field is filled, it's a bot
    // Check the actual DOM element value since react-hook-form might not track
    // values set programmatically via DevTools
    const websiteInput = document.getElementById('website') as HTMLInputElement;
    const websiteValue = websiteInput?.value?.trim() || data.website?.trim();

    if (websiteValue) {
      console.warn('Spam detected: honeypot field filled', { websiteValue });
      setSubmitStatus('error');
      return;
    }

    // Minimum form fill time check (at least 3 seconds)
    const formFillTime = Date.now() - formStartTime.current;
    if (formFillTime < 3000) {
      console.warn('Spam detected: form filled too quickly');
      setSubmitStatus('error');
      return;
    }

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
          to: email,
          website: websiteValue || '', // Use the same value we checked above
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 429) {
          throw new Error(
            'Too many requests. Please wait a few minutes before trying again.'
          );
        }
        throw new Error(errorData.message || 'Failed to send email');
      }

      setSubmitStatus('success');
      reset();
      formStartTime.current = Date.now(); // Reset timer after successful submission
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

      {/* Honeypot field - hidden from users but visible to bots */}
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        <label htmlFor="website">Website (leave blank)</label>
        <input
          type="text"
          id="website"
          {...register('website')}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

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
