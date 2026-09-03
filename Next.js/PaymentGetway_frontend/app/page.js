"use client";

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get the backend API URL from the environment variables
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      // Send invoice creation request to the backend
      const response = await fetch(`${apiUrl}/create-invoice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          amount: parseInt(formData.amount),
        }),
      });

      const data = await response.json();

      // Redirect the user to the Razorpay hosted invoice page
      if (data.invoice_url) {
        window.location.href = data.invoice_url;
      } else {
        alert("Failed to create the invoice.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 text-white">
      <div className="bg-slate-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-slate-700">
        <h2 className="text-2xl font-bold mb-2 text-center text-blue-400">Secure Razorpay Invoice</h2>
        <p className="text-xs text-slate-400 text-center mb-6">Protected via Environment Variables</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2.5 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:border-blue-500"
              placeholder="Rahul Sharma"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2.5 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:border-blue-500"
              placeholder="rahul@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2.5 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:border-blue-500"
              placeholder="9876543210"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Amount (INR)</label>
            <input
              type="number"
              name="amount"
              required
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2.5 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:border-blue-500"
              placeholder="1000"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">Payment Purpose</label>
            <input
              type="text"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2.5 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:border-blue-500"
              placeholder="Web Development Service"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-blue-600 text-white p-3 rounded-md font-bold hover:bg-blue-500 transition duration-200 disabled:bg-slate-600"
          >
            {loading ? 'Processing Invoice...' : 'Generate & Pay Now'}
          </button>
        </form>
      </div>
    </div>
  );
}