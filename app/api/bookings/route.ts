import { promises as fs } from "fs"
import { join } from "path"

// Stores bookings in a JSON file (can be upgraded to database later)

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

const bookingsFile = join(process.cwd(), "data", "bookings.json")

async function ensureBookingsFile() {
  try {
    await fs.access(bookingsFile)
  } catch {
    // File doesn't exist, create it
    await fs.mkdir(join(process.cwd(), "data"), { recursive: true })
    await fs.writeFile(bookingsFile, JSON.stringify([]))
  }
}

export async function POST(request: Request) {
  try {
    await ensureBookingsFile()

    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.date || !body.time || !body.service) {
      return Response.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Create booking object
    const booking: Booking = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      phone: body.phone,
      date: body.date,
      time: body.time,
      service: body.service,
      message: body.message || "",
      createdAt: new Date().toISOString(),
    }

    // Read existing bookings
    const fileContent = await fs.readFile(bookingsFile, "utf-8")
    const bookings: Booking[] = JSON.parse(fileContent)

    // Add new booking
    bookings.push(booking)

    // Write back to file
    await fs.writeFile(bookingsFile, JSON.stringify(bookings, null, 2))

    return Response.json({ message: "Booking created successfully", booking }, { status: 201 })
  } catch (error) {
    console.error("Booking error:", error)
    return Response.json({ message: "Failed to create booking" }, { status: 500 })
  }
}

export async function GET() {
  try {
    await ensureBookingsFile()
    const fileContent = await fs.readFile(bookingsFile, "utf-8")
    const bookings = JSON.parse(fileContent)

    return Response.json(bookings)
  } catch (error) {
    console.error("Error reading bookings:", error)
    return Response.json([], { status: 500 })
  }
}
