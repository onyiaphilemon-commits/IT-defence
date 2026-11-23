import { FaSearch } from 'react-icons/fa';
import cars from '../Data/Cars.js';

function SearchPanel({ filters, setFilters, onSearch }) {

  // Update the filters when a customer selects an option
  function handleChange(event) {

    const name = event.target.name;
    const value = event.target.value;

    setFilters({
      ...filters,
      [name]: value
    });
  }

  return (
    <div className="mx-auto -mt-5 max-w-7xl rounded-xl bg-white p-6 shadow-lg">

      <h2 className="mb-5 text-xl font-bold text-slate-800">
        Find Your Perfect Car
      </h2>

      <form
        onSubmit={onSearch}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >

        {/* CAR MAKE */}
        <div>
          <label className="text-sm font-semibold">
            Car Make
          </label>

          <select
            name="make"
            value={filters.make}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="">All Makes</option>

            {cars.map((car) => (
              <option key={car.id} value={car.make}>
                {car.make}
              </option>
            ))}
          </select>
        </div>

        {/* CAR MODEL */}
        <div>
          <label className="text-sm font-semibold">
            Car Model
          </label>

          <select
            name="model"
            value={filters.model}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="">All Models</option>

            {cars.map((car) => (
              <option key={car.id} value={car.model}>
                {car.model}
              </option>
            ))}
          </select>
        </div>

        {/* BODY TYPE */}
        <div>
          <label className="text-sm font-semibold">
            Body Type
          </label>

          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="">All Types</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Coupe">Coupe</option>
            <option value="Truck">Truck</option>
          </select>
        </div>

        {/* MAXIMUM PRICE */}
        <div>
          <label className="text-sm font-semibold">
            Maximum Price
          </label>

          <select
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          >
            <option value="">Any Price</option>
            <option value="25000">$25,000</option>
            <option value="30000">$30,000</option>
            <option value="40000">$40,000</option>
            <option value="50000">$50,000</option>
          </select>
        </div>

        {/* SEARCH BUTTON */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-brand p-3 font-semibold text-white hover:bg-blue-700 sm:col-span-2 lg:col-span-4"
        >
          <FaSearch />
          Search Cars
        </button>

      </form>
    </div>
  );
}

export default SearchPanel;
