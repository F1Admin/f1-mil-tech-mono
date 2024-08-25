'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="border border-zinc-400 p-10">
      <div className="mb-4">
        <label className="block font-thin text-sm text-zinc-400">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-3 bg-black border border-zinc-400 focus:border-white sm:text-sm w-full px-4 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-thin text-sm text-zinc-400">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-3 bg-black border border-zinc-400 focus:border-white sm:text-sm w-full px-4 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-thin text-sm text-zinc-400">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-3 bg-black border border-zinc-400 focus:border-white sm:text-sm w-full px-4 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-thin text-sm text-zinc-400">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-3 bg-black border border-zinc-400 focus:border-white sm:text-sm w-full px-4 py-2"
          rows={10}
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="mt-3 bg-black border rounded-full  border-zinc-400 focus:border-white sm:text-sm px-5 py-3"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
