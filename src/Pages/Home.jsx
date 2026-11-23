
import { useState } from "react";

import CarCard from "../Components/Carcard";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import SearchPanel from "../Components/SearchPanel";
import cars from "../Data/Cars";
import Inventory from "../Components/Inventory";
import Footer from "../Components/Footer";

function Home() {

    // Store the selected search filters
    const [filters, setFilters] = useState({
        make: "",
        model: "",
        type: "",
        maxPrice: ""
    });

    // Store filters when the customer clicks Search
    const [appliedFilters, setAppliedFilters] = useState({
        make: "",
        model: "",
        type: "",
        maxPrice: ""
    });

    // Handle search submission
    function handleSearch(event) {
        event.preventDefault();
        setAppliedFilters(filters);
    }

    // Filter the car inventory
    const filteredCars = cars.filter((car) => {

        if (appliedFilters.make && car.make !== appliedFilters.make) {
            return false;
        }

        if (appliedFilters.model && car.model !== appliedFilters.model) {
            return false;
        }

        if (appliedFilters.type && car.type !== appliedFilters.type) {
            return false;
        }

        if (
            appliedFilters.maxPrice &&
            car.price > Number(appliedFilters.maxPrice)
        ) {
            return false;
        }

        return true;
    });

    return (
        <>
            <Header />

            <Hero />

            <SearchPanel
                filters={filters}
                setFilters={setFilters}
                onSearch={handleSearch}
            />

            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3">

                {filteredCars.length > 0 ? (

                    filteredCars.map((car) => (
                        <CarCard
                            key={car.id}
                            car={car}
                        />
                    ))

                ) : (

                    <p className="col-span-full text-center text-slate-500">
                        No cars found.
                    </p>

                )}

            </section>

           <Inventory cars={filteredCars} />
           <Footer/>




        </>
    );
}

export default Home;
