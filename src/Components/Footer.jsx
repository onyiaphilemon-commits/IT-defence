
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa";

function Footer() {

    const buyLinks = [
        "All Cars",
        "New Arrivals",
        "Under $20K",
        "Certified Pre-Owned",
        "Featured Cars"
    ];

    const sellLinks = [
        "How It Works",
        "Get an Instant Offer",
        "Sell My Car",
        "Car Appraisal"
    ];

    const financeLinks = [
        "Financing Options",
        "Credit Application",
        "Payment Calculator",
        "Financing FAQs"
    ];

    const companyLinks = [
        "About Us",
        "Our Team",
        "Careers",
        "News & Blog"
    ];

    const supportLinks = [
        "Help Center",
        "Contact Us",
        "Terms of Service",
        "Privacy Policy"
    ];

    return (
        <footer className="bg-[#0B1D3A] text-white">

            <div className="mx-auto max-w-7xl px-6 py-12">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">

                    {/* BRAND INFORMATION */}
                    <div className="lg:col-span-2">

                        <h2 className="text-2xl font-extrabold">
                            Drive<span className="text-blue-500">Nest</span>
                        </h2>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
                            Your trusted partner in finding the perfect car.
                            Quality vehicles, best prices, and exceptional service.
                        </p>

                        {/* SOCIAL MEDIA */}
                        <div className="mt-6 flex gap-3">

                            <a href="#" aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 transition hover:bg-blue-600">
                                <FaFacebookF />
                            </a>

                            <a href="#" aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 transition hover:bg-pink-600">
                                <FaInstagram />
                            </a>

                            <a href="#" aria-label="Twitter"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 transition hover:bg-sky-500">
                                <FaTwitter />
                            </a>

                            <a href="#" aria-label="LinkedIn"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 transition hover:bg-blue-700">
                                <FaLinkedinIn />
                            </a>

                            <a href="#" aria-label="YouTube"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 transition hover:bg-red-600">
                                <FaYoutube />
                            </a>

                        </div>

                    </div>

                    {/* BUY CARS */}
                    <div>
                        <h3 className="mb-5 font-bold">Buy Cars</h3>

                        <ul className="space-y-3 text-sm text-slate-300">
                            {buyLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="transition hover:text-blue-400">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SELL YOUR CAR */}
                    <div>
                        <h3 className="mb-5 font-bold">Sell Your Car</h3>

                        <ul className="space-y-3 text-sm text-slate-300">
                            {sellLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="transition hover:text-blue-400">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FINANCING */}
                    <div>
                        <h3 className="mb-5 font-bold">Financing</h3>

                        <ul className="space-y-3 text-sm text-slate-300">
                            {financeLinks.map((link) => (
                                <li key={link}>
                                    <a href="#" className="transition hover:text-blue-400">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COMPANY AND SUPPORT */}
                    <div className="grid grid-cols-2 gap-6 lg:col-span-1 lg:grid-cols-1">

                        <div>
                            <h3 className="mb-5 font-bold">Company</h3>

                            <ul className="space-y-3 text-sm text-slate-300">
                                {companyLinks.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="transition hover:text-blue-400">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-5 font-bold">Support</h3>

                            <ul className="space-y-3 text-sm text-slate-300">
                                {supportLinks.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="transition hover:text-blue-400">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
                    © 2026Enugu. All rights reserved.
                </div>

            </div>

        </footer>
    );
}

export default Footer;
