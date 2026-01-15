"use client"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyUs from "@/components/why-us"
import Pricing from "@/components/pricing"
import About from "@/components/about"
import BookingForm from "@/components/booking-form"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Pricing />
      <About />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  )
}
