
import { useState } from 'react';
import {
  FaCarSide,
  FaBars,
  FaTimes,
  FaHeart
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Buy Cars', href: '/buy-cars' },
  { name: 'Sell Your Car', href: '/sell-your-car' },
  { name: 'Financing', href: '/financing' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact', href: '/contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-slate-900"
        >
          <FaCarSide className="text-3xl text-brand" />
          Drive<span className="text-brand">Nest</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-brand ${
                index === 0 ? 'text-brand' : 'text-slate-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ACTION BUTTONS */}
        <div className="hidden items-center gap-5 md:flex">

          <Link
            to="/buy-cars"
            aria-label="Favourite cars"
            className="text-xl text-slate-700 hover:text-brand"
          >
            <FaHeart />
          </Link>

          <Link
            to="/contact"
            className="text-sm font-semibold text-slate-700"
          >
            Sign In
          </Link>

          <Link
            to="/sell-your-car"
            className="rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            List Your Car
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-slate-800 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg md:hidden">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-brand"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/sell-your-car"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded-lg bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
          >
            List Your Car
          </Link>

        </nav>
      )}

    </header>
  );
}

export default Header;
