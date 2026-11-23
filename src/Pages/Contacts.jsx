import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for contacting DriveNest!");
  }

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        {/* Page heading */}
        <section className="bg-blue-900 text-white py-16 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Have questions about a vehicle? Our team is ready to help you
            find your perfect car.
          </p>
        </section>

        {/* Contact content */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

          {/* Contact information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-8">
              Reach out to us through any of the channels below.
              We would love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-lg">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+234 8147078419</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">onyiaphilemon@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">Enugu state</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/2348147078419"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="What is this about?"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
