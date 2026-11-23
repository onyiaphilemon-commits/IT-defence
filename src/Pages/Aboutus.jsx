import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaCar, FaShieldAlt, FaUsers, FaHandshake } from "react-icons/fa";

function Aboutus() {
  const values = [
    {
      icon: <FaShieldAlt />,
      title: "Trust & Transparency",
      description:
        "We believe in honest vehicle listings, clear information, and transparent dealings."
    },
    {
      icon: <FaUsers />,
      title: "Customer First",
      description:
        "Our customers come first. We aim to make every car-buying experience simple and stress-free."
    },
    {
      icon: <FaHandshake />,
      title: "Quality Service",
      description:
        "We are committed to providing reliable support throughout your vehicle journey."
    }
  ];

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">

        {/* Hero section */}
        <section className="bg-blue-900 text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            About DriveNest
          </h1>

          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Your trusted destination for discovering, buying,
            and selling quality vehicles.
          </p>
        </section>

        {/* Company introduction */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
              Who We Are
            </span>

            <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
              Making Your Next Car Purchase Easier
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              DriveNest is a car dealership platform created to make
              finding your next vehicle easier and more convenient.
              We bring vehicle listings and useful information together
              in one place.
            </p>

            <p className="text-gray-600 leading-7">
              Whether you are looking to buy your first car, upgrade
              your current vehicle, or sell your car, DriveNest is here
              to make the process straightforward.
            </p>
          </div>

          <div className="bg-blue-100 rounded-2xl min-h-80 flex items-center justify-center">
            <FaCar className="text-blue-800 text-9xl" />
          </div>

        </section>

        {/* Mission */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
              Our Mission
            </span>

            <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-5">
              Helping People Find the Right Car
            </h2>

            <p className="text-gray-600 leading-7">
              Our mission is to simplify the vehicle marketplace by
              creating a convenient experience where buyers and sellers
              can connect with confidence.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-6xl mx-auto px-6 py-16">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              What We Stand For
            </h2>

            <p className="text-gray-500">
              The values that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="bg-blue-100 text-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">
                  {value.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {value.description}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* Call to action */}
        <section className="bg-blue-900 text-white text-center py-16 px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Next Car?
          </h2>

          <p className="text-blue-100 mb-8">
            Explore our collection and discover your next vehicle.
          </p>

          <a
            href="/buy-cars"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            Explore Cars
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Aboutus;
