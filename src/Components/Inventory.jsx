import CarCard from "./Carcard";
import cars from "../Data/Cars";





function Inventory({ cars }) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-12">

            {/* SECTION HEADING */}
            <div className="mb-8 flex items-center justify-between">

                <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Featured Listings
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Explore our latest collection of quality vehicles.
                    </p>
                </div>

                <span className="text-sm font-semibold text-blue-600">
                    {cars.length} Vehicles
                </span>

            </div>

            {/* CAR GRID */}
            {cars.length > 0 ? (

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {cars.map((car) => (
                        <CarCard
                            key={car.id}
                            car={car}
                        />
                    ))}

                </div>

            ) : (

                <p className="py-10 text-center text-slate-500">
                    No cars available at the moment.
                </p>

            )}

        </section>
    );
}

export default Inventory;
