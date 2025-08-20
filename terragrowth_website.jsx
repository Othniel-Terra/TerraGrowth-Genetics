export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-green-700 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TerraGrowth Genetics</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Innovating Agriculture Through Science</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Empowering farmers, schools, and NGOs with advanced plant breeding and genetics solutions
          for sustainable agriculture in Ghana and beyond.
        </p>
        <a
          href="#contact"
          className="bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-800"
        >
          Get in Touch
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-semibold mb-6">About Us</h3>
        <p className="text-lg leading-relaxed">
          TerraGrowth Genetics, founded by Dr. Mark Owusu Adjei, is a Ghana-based agricultural innovation
          company specializing in plant breeding and genetics. Our mission is to provide cutting-edge
          agricultural solutions that improve crop productivity, resilience, and sustainability. We work
          closely with farmers, schools, and NGOs to share knowledge and practical techniques that
          transform agricultural practices.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-2xl">
              <h4 className="text-xl font-bold mb-3">Plant Breeding</h4>
              <p>Developing improved crop varieties for better yield, resistance, and nutrition.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-2xl">
              <h4 className="text-xl font-bold mb-3">Genetics Training</h4>
              <p>Workshops and training programs for schools, farmers, and NGOs on modern farming genetics.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-2xl">
              <h4 className="text-xl font-bold mb-3">Farming Solutions</h4>
              <p>Practical agricultural techniques and consulting to increase sustainability and productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-semibold mb-6 text-center">Our Projects</h3>
        <p className="text-lg text-center mb-8">
          TerraGrowth Genetics has partnered with local and international organizations to develop
          resilient crops, train communities, and advance sustainable farming practices in Ghana.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-green-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
          <p className="mb-4">Phone: +233 535 399 86</p>
          <p className="mb-4">Email: mowusuadjei@gmail.com</p>
          <p className="mb-4">Location: Kumasi, Ghana</p>
          <a
            href="mailto:mowusuadjei@gmail.com"
            className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>&copy; {new Date().getFullYear()} TerraGrowth Genetics. All rights reserved.</p>
      </footer>
    </div>
  );
}
