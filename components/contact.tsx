export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-cyan-400 font-bold mb-2">Phone</p>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="text-cyan-400 font-bold mb-2">Email</p>
            <p className="text-gray-300">info@primewash.com</p>
          </div>
          <div>
            <p className="text-cyan-400 font-bold mb-2">Location</p>
            <p className="text-gray-300">City Center, Your City</p>
          </div>
        </div>
      </div>
    </section>
  )
}
