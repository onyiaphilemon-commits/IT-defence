
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CarCard from "../Components/Carcard";
import cars from "../Data/Cars.js";

function Buycars() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">

        {/* Page heading */}
        <section className="bg-blue-900 text-white py-16 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Perfect Car
          </h1>

          <p className="text-blue-100 max-w-2xl mx-auto">
            Explore our collection of quality vehicles and find the
            perfect car for your lifestyle.
          </p>
        </section>

        {/* Car inventory */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Available Cars
              </h2>

              <p className="text-gray-500 mt-1">
                Browse our latest vehicle listings.
              </p>
            </div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              {cars.length} Vehicles Available
            </span>
          </div>

          {cars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-16">
              No vehicles available at the moment.
            </p>
          )}

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Buycars;
