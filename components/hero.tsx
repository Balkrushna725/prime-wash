"use client"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/eMBlkjCA298?autoplay=1&mute=1&loop=1&playlist=eMBlkjCA298&controls=0&modestbranding=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">Premium Car & Bike Washing</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">
          Professional Doorstep Service at Your Convenience
        </p>
        <a
          href="#booking"
          className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Book Now
        </a>
      </div>
    </section>
  )
}
