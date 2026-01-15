export default function Services() {
  const services = [
    { icon: "🚗", title: "Basic Wash", price: "$15", desc: "Exterior wash & dry" },
    { icon: "✨", title: "Premium Wash", price: "$25", desc: "Exterior + interior vacuum" },
    { icon: "🌟", title: "Deluxe Wash", price: "$40", desc: "Complete detailing package" },
  ]

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-800 border border-cyan-500/30 p-8 rounded-lg hover:border-cyan-500 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-cyan-400 text-2xl font-bold mb-4">{service.price}</p>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
