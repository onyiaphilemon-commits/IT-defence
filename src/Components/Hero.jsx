import {FaCarSide,
  FaUserCheck,
  FaHeart
} from 'react-icons/fa';
import fordimg from "../assets/ford.jpg"





const features = [
  {
    icon: FaCarSide,
    title: '10,000+',
    description: 'Cars Listed'
  },
  {
    icon: FaUserCheck,
    title: 'Trusted Sellers',
    description: 'Verified & Reviewed'
  },
  {
    icon: FaHeart,
    title: 'Best Prices',
    description: 'Market Competitive'
  }
];

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-white via-slate-50 to-blue-50"
    >

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 md:grid-cols-2 md:py-16 lg:px-8">

        {/* LEFT SIDE: TEXT CONTENT */}

        <div className="relative z-10">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Welcome to DriveNest
          </p>

          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">

            Find Your Perfect Car

            <br />

            Drive Your{' '}
            <span className="text-brand">
              Dreams
            </span>

          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
            Explore thousands of verified cars from trusted sellers.
            Best prices. Easy financing. Drive with confidence.
          </p>

          {/* ACTION BUTTONS */}

          <div className="mt-7 flex flex-wrap gap-4">

            <a
              href="#inventory"
              className="rounded-lg bg-brand px-7 py-3.5 font-semibold text-black shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Browse Cars
            </a>

            <a
              href="#sell"
              className="rounded-lg border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-800 transition duration-300 hover:border-brand hover:text-brand"
            >
              Sell Your Car
            </a>

          </div>

          {/* TRUST INDICATORS */}

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-5">

            {features.map((feature) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-3"
                >

                  <Icon className="text-2xl text-brand" />

                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {feature.description}
                    </p>
                  </div>

                </div>
              );

            })}

          </div>

        </div>

        {/* RIGHT SIDE: CAR IMAGE */}

        <div className="relative flex items-center justify-center">

          <div className="absolute h-64 w-64 rounded-full bg-blue-200/40 blur-3xl sm:h-80 sm:w-80">
          </div>

          <img
            src={fordimg}
            alt="Luxury vehicles available at DriveNest"
            className="relative z-10 w-full max-w-2xl object-contain drop-shadow-xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
