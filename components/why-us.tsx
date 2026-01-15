export default function WhyUs() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose PrimeWash?</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-bold text-white mb-2">At Your Doorstep</h3>
            <p className="text-gray-400">We come to you, saving your time</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-2">Affordable Pricing</h3>
            <p className="text-gray-400">Best rates in the city</p>
          </div>
          <div>
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-white mb-2">Professional Team</h3>
            <p className="text-gray-400">Trained & experienced staff</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-2">Safe & Reliable</h3>
            <p className="text-gray-400">Your vehicle in good hands</p>
          </div>
        </div>
      </div>
    </section>
  )
}
