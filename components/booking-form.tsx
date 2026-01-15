"use client"

import type React from "react"

import { useState } from "react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "basic-wash",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Booking failed")
      }

      setSuccess(true)
      setFormData({ name: "", email: "", phone: "", date: "", time: "", service: "basic-wash", message: "" })
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Book Your Service</h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg border border-cyan-500/30"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 text-white border border-cyan-500/50 rounded-lg focus:outline-none focus:border-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 text-white border border-cyan-500/50 rounded-lg focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 text-white border border-cyan-500/50 rounded-lg focus:outline-none focus:border-cyan-500"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 text-white border border-cyan-500/50 rounded-lg focus:outline-none focus:border-cyan-500"
            >
              <option value="basic-wash">Basic Wash - $15</option>
              <option value="premium-wash">Premium Wash - $25</option>
              <option value="deluxe-wash">Deluxe Wash - $40</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 text-white border border-cyan-500/50 rounded-lg focus:outline-none focus:border-cyan-500"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 text-white border border-cyan-500/50 rounded-lg focus:outline-none focus:border-cyan-500"
            />
          </div>

          <textarea
            name="message"
            placeholder="Additional Details (Optional)"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-gray-800 text-white border border-cyan-500/50 rounded-lg focus:outline-none focus:border-cyan-500 mb-6"
          />

          {success && <p className="text-green-400 mb-4">Booking submitted successfully!</p>}
          {error && <p className="text-red-400 mb-4">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 text-black font-bold rounded-lg transition-all duration-300"
          >
            {loading ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </section>
  )
}
