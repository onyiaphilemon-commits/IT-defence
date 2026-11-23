import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contacts";
import Buycars from "../Pages/Buycars";
import Sellyourcar from "../Pages/Sellyourcar";
import Aboutus from "../Pages/Aboutus";
import Financing from "../Pages/Financing";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/buy-cars" element={<Buycars />} />

      <Route path="/sell-your-car" element={<Sellyourcar />} />

      <Route path="/financing" element={<Financing />} />

      <Route path="/about-us" element={<Aboutus />} />

      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-700">
              404 - Page Not Found
            </h1>
          </div>
        }
      />
    </Routes>
  );
}

export default AppRoute;
