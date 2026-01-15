"use client"

import { useEffect, useState } from "react"

interface Booking {
  id: string
  name: string
  email: string
  phone: string
  date: string
  time: string
  service: string
  message: string
  createdAt: string
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const response = await fetch("/api/bookings")
      const data = await response.json()
      setBookings(data)
    } catch (error) {
      console.error("Error fetching bookings:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Bookings Dashboard</h1>

        {loading ? (
          <p className="text-gray-400">Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p className="text-gray-400">No bookings yet</p>
        ) : (
          <div className="overflow-x-auto bg-gray-800 rounded-lg border border-cyan-500/30">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700 border-b border-cyan-500/30">
                  <th className="px-6 py-4 text-left text-white">Name</th>
                  <th className="px-6 py-4 text-left text-white">Email</th>
                  <th className="px-6 py-4 text-left text-white">Phone</th>
                  <th className="px-6 py-4 text-left text-white">Service</th>
                  <th className="px-6 py-4 text-left text-white">Date</th>
                  <th className="px-6 py-4 text-left text-white">Time</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                    <td className="px-6 py-4 text-gray-300">{booking.name}</td>
                    <td className="px-6 py-4 text-gray-300">{booking.email}</td>
                    <td className="px-6 py-4 text-gray-300">{booking.phone}</td>
                    <td className="px-6 py-4 text-cyan-400">{booking.service}</td>
                    <td className="px-6 py-4 text-gray-300">{booking.date}</td>
                    <td className="px-6 py-4 text-gray-300">{booking.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
