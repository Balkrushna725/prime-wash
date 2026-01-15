// Import necessary libraries
import AOS from "aos"
import Swal from "sweetalert2"

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
})

// Booking Form Submission
const bookingForm = document.getElementById("bookingForm")

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value.trim()
  const phone = document.getElementById("phone").value.trim()
  const address = document.getElementById("address").value.trim()
  const vehicle = document.getElementById("vehicle").value
  const service = document.getElementById("service").value
  const date = document.getElementById("date").value
  const time = document.getElementById("time").value

  // Validation
  if (!name || !phone || !address || !vehicle || !service || !date || !time) {
    Swal.fire({
      icon: "error",
      title: "Missing Information",
      text: "Please fill in all fields!",
      background: "rgba(10, 14, 39, 0.9)",
      color: "#ffffff",
      confirmButtonColor: "#00d4ff",
    })
    return
  }

  // Phone number validation (10 digits)
  if (!/^\d{10}$/.test(phone.replace(/\D/g, ""))) {
    Swal.fire({
      icon: "error",
      title: "Invalid Phone",
      text: "Please enter a valid 10-digit phone number!",
      background: "rgba(10, 14, 39, 0.9)",
      color: "#ffffff",
      confirmButtonColor: "#00d4ff",
    })
    return
  }

  // Success message
  Swal.fire({
    icon: "success",
    title: "Booking Confirmed!",
    html: `<strong>${name}</strong>,<br>Your PrimeWash booking has been confirmed!<br><br>
               <strong>Service:</strong> ${service}<br>
               <strong>Date:</strong> ${date}<br>
               <strong>Time:</strong> ${time}<br><br>
               We'll arrive at your doorstep soon. Thank you!`,
    background: "rgba(10, 14, 39, 0.9)",
    color: "#ffffff",
    confirmButtonColor: "#00d4ff",
    didClose: () => {
      bookingForm.reset()
    },
  })

  console.log("[v0] Booking submitted:", {
    name,
    phone,
    address,
    vehicle,
    service,
    date,
    time,
  })
})

// Set minimum date to today
const dateInput = document.getElementById("date")
const today = new Date().toISOString().split("T")[0]
dateInput.setAttribute("min", today)

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
