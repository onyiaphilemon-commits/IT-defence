
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Sellyourcar() {
  const [carDetails, setCarDetails] = useState({
    name: "",
    email: "",
    phone: "",
    make: "",
    model: "",
    year: "",
    mileage: "",
    price: "",
    description: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCarDetails({
      ...carDetails,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Vehicle submission:", carDetails);

    alert("Your vehicle details have been submitted!");

    setCarDetails({
      name: "",
      email: "",
      phone: "",
      make: "",
      model: "",
      year: "",
      mileage: "",
      price: "",
      description: ""
    });
  }

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        <section className="bg-blue-900 text-white text-center py-16 px-6">
          <h1 className="text-4xl font-bold mb-4">
            Sell Your Car
          </h1>

          <p className="text-blue-100 max-w-2xl mx-auto">
            Ready to sell your vehicle? Share your car details
            with us and let DriveNest help you find a buyer.
          </p>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Vehicle Information
            </h2>

            <p className="text-gray-500 mb-8">
              Complete the form below with accurate information.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <h3 className="font-semibold text-lg text-blue-900">
                Your Contact Details
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="name"
                  value={carDetails.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full border rounded-lg p-3"
                />

                <input
                  name="email"
                  type="email"
                  value={carDetails.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full border rounded-lg p-3"
                />

                <input
                  name="phone"
                  type="tel"
                  value={carDetails.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <hr />

              <h3 className="font-semibold text-lg text-blue-900">
                Vehicle Details
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="make"
                  value={carDetails.make}
                  onChange={handleChange}
                  placeholder="Car Make (e.g. Toyota)"
                  required
                  className="w-full border rounded-lg p-3"
                />

                <input
                  name="model"
                  value={carDetails.model}
                  onChange={handleChange}
                  placeholder="Car Model (e.g. Camry)"
                  required
                  className="w-full border rounded-lg p-3"
                />

                <input
                  name="year"
                  type="number"
                  value={carDetails.year}
                  onChange={handleChange}
                  placeholder="Year"
                  required
                  className="w-full border rounded-lg p-3"
                />

                <input
                  name="mileage"
                  type="number"
                  value={carDetails.mileage}
                  onChange={handleChange}
                  placeholder="Mileage"
                  required
                  className="w-full border rounded-lg p-3"
                />

                <input
                  name="price"
                  type="number"
                  value={carDetails.price}
                  onChange={handleChange}
                  placeholder="Expected Price"
                  required
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <textarea
                name="description"
                value={carDetails.description}
                onChange={handleChange}
                placeholder="Describe your vehicle..."
                rows="5"
                className="w-full border rounded-lg p-3"
              />

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Submit Vehicle Details
              </button>

            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Sellyourcar;
