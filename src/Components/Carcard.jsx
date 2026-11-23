
import {
  FaGasPump,
  FaTachometerAlt,
  FaCalendarAlt,
  FaCog,
  FaWhatsapp
} from 'react-icons/fa';

function CarCard({ car }) {

  // WhatsApp business number goes here
  const phoneNumber = '2348147078419';

  // Create a WhatsApp message for this particular car
  const message = `Hello, I am interested in the ${car.year} ${car.make} ${car.model}, listed for $${car.price.toLocaleString()}. Is it available?`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      {/* CAR IMAGE */}
      <div className="relative h-56">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="h-full w-full object-cover"
        />

        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
          {car.type}
        </span>
      </div>

      {/* CAR DETAILS */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-slate-800">
          {car.year} {car.make} {car.model}
        </h3>

        <p className="mt-2 text-2xl font-bold text-blue-600">
          ${car.price.toLocaleString()}
        </p>

        {/* CAR SPECIFICATIONS */}
        <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-200 pt-4">

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <FaTachometerAlt className="text-blue-600" />
            {car.mileage.toLocaleString()} miles
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <FaCalendarAlt className="text-blue-600" />
            {car.year}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <FaCog className="text-blue-600" />
            {car.transmission}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <FaGasPump className="text-blue-600" />
            {car.fuel}
          </div>

        </div>

        {/* LOCATION */}
        <p className="mt-4 text-sm text-slate-500">
          Location: {car.location}
        </p>

        {/* WHATSAPP BUTTON */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 p-3 font-semibold text-white transition hover:bg-green-700"
        >
          <FaWhatsapp size={20} />
          Contact Seller
        </a>

      </div>

    </div>
  );
}

export default CarCard;
