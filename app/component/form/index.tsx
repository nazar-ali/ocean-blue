"use client";
import { useState } from "react";

const EnquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telephone: "",
    enquiry: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // You can replace this with form submission logic (e.g., API call)
  };

  return (
    <section
      className="max-w-md mx-auto bg-gradient-to-br from-gray-300 to-gray-500 p-8 rounded-md shadow-lg"
      id="enquire"
    >
      <h2 className="text-white text-center text-2xl font-semibold mb-6 uppercase">
        Enquire
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-gray-800 placeholder-gray-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-gray-800 placeholder-gray-500"
          required
        />
        <input
          type="tel"
          name="telephone"
          placeholder="Telephone"
          value={form.telephone}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-gray-800 placeholder-gray-500"
        />
        <textarea
          name="enquiry"
          placeholder="Enquiry"
          rows={4}
          value={form.enquiry}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-gray-800 placeholder-gray-500"
          required
        />
        <div className="flex items-start gap-2 text-sm text-white">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            className="mt-1"
          />
          <label htmlFor="consent">
            I consent to allow <strong>Liver Laundry Equipment Ltd</strong> to
            contact me with offers and services
          </label>
        </div>
        <a href="/privacy-policy" className="text-blue-200 text-sm underline">
          Privacy Policy
        </a>
        <button
          type="submit"
          className="w-full bg-[#2c3554] text-white font-semibold py-3 rounded hover:bg-[#1e2740] transition"
        >
          CLICK TO SEND ENQUIRY
        </button>
      </form>
    </section>
  );
};

export default EnquiryForm;
