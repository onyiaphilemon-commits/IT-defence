
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaCalculator, FaCheckCircle, FaCar } from "react-icons/fa";

function Financing() {
  const [price, setPrice] = useState(30000);
  const [deposit, setDeposit] = useState(5000);
  const [interest, setInterest] = useState(8);
  const [years, setYears] = useState(5);

  const loanAmount = Math.max(0, price - deposit);
  const monthlyRate = interest / 100 / 12;
  const months = years * 12;

  const monthlyPayment =
    loanAmount === 0
      ? 0
      : monthlyRate === 0
      ? loanAmount / months
      : (loanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const formatMoney = (amount) =>
    amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2
    });

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">

        {/* Hero */}
        <section className="bg-blue-900 text-white py-16 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Drive Your Dream Car
          </h1>

          <p className="text-blue-100 max-w-2xl mx-auto">
            Explore flexible financing options and plan your next
            vehicle purchase with confidence.
          </p>
        </section>

        {/* Benefits */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Finance With DriveNest?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Flexible payment periods",
              "Simple financing estimates",
              "Choose a payment that suits your budget"
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4"
              >
                <FaCheckCircle className="text-blue-600 text-2xl" />
                <p className="font-semibold text-gray-800">
                  {benefit}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-5xl mx-auto px-6 pb-16">

          <div className="bg-white rounded-2xl shadow-sm p-8">

            <div className="flex items-center gap-3 mb-8">
              <FaCalculator className="text-blue-700 text-3xl" />

              <div>
                <h2 className="text-2xl font-bold">
                  Car Loan Calculator
                </h2>

                <p className="text-gray-500 text-sm">
                  Estimate your monthly vehicle payments.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">

              {/* Inputs */}
              <div className="space-y-6">

                <div>
                  <label className="block font-medium mb-2">
                    Vehicle Price ($)
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Down Payment ($)
                  </label>

                  <input
                    type="number"
                    min="0"
                    max={price}
                    value={deposit}
                    onChange={(e) => setDeposit(Math.min(price, Math.max(0, Number(e.target.value))))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Annual Interest Rate (%)
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={interest}
                    onChange={(e) => setInterest(Math.min(100, Math.max(0, Number(e.target.value))))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Loan Duration
                  </label>

                  <select
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value={2}>2 Years</option>
                    <option value={3}>3 Years</option>
                    <option value={4}>4 Years</option>
                    <option value={5}>5 Years</option>
                    <option value={6}>6 Years</option>
                    <option value={7}>7 Years</option>
                  </select>
                </div>

              </div>

              {/* Results */}
              <div className="bg-blue-900 text-white rounded-xl p-8 flex flex-col justify-center">

                <FaCar className="text-4xl text-blue-200 mb-5" />

                <p className="text-blue-200 mb-2">
                  Estimated Monthly Payment
                </p>

                <h3 className="text-4xl font-bold mb-8">
                  {formatMoney(monthlyPayment)}
                </h3>

                <div className="space-y-4 border-t border-blue-700 pt-5">

                  <div className="flex justify-between gap-4">
                    <span className="text-blue-200">Vehicle Price</span>
                    <span>{formatMoney(price)}</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-blue-200">Down Payment</span>
                    <span>{formatMoney(deposit)}</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-blue-200">Loan Amount</span>
                    <span>{formatMoney(loanAmount)}</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-blue-200">Duration</span>
                    <span>{years} Years</span>
                  </div>

                </div>
              </div>

            </div>

            <p className="text-sm text-gray-500 mt-8">
              This calculator provides an estimate only. Actual interest
              rates, fees, and loan terms depend on the lender's approval.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Financing;
