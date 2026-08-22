import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

const Calculator = () => {
  const [homePrice, setHomePrice] = useState(2500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.1); // % per year
  const [annualInsurance, setAnnualInsurance] = useState(4800); // $ / year
  const [monthlyHOA, setMonthlyHOA] = useState(450); // $ / mo

  // Calculations
  const calculations = useMemo(() => {
    const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
    const loanAmount = homePrice - downPaymentAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTermYears * 12;

    let monthlyPrincipalAndInterest = 0;
    if (monthlyRate > 0) {
      monthlyPrincipalAndInterest =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else {
      monthlyPrincipalAndInterest = loanAmount / numberOfPayments;
    }

    const monthlyPropertyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const monthlyInsurance = annualInsurance / 12;
    const totalMonthlyPayment =
      monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyInsurance + monthlyHOA;

    // 5-Year Estimated Investment Appreciation (assuming 5.2% avg luxury appreciation)
    const fiveYearValue = homePrice * Math.pow(1 + 0.052, 5);
    const estimatedAppreciation = fiveYearValue - homePrice;

    return {
      downPaymentAmount,
      loanAmount,
      monthlyPrincipalAndInterest: Math.round(monthlyPrincipalAndInterest),
      monthlyPropertyTax: Math.round(monthlyPropertyTax),
      monthlyInsurance: Math.round(monthlyInsurance),
      monthlyHOA,
      totalMonthlyPayment: Math.round(totalMonthlyPayment),
      estimatedAppreciation: Math.round(estimatedAppreciation),
      fiveYearValue: Math.round(fiveYearValue),
    };
  }, [homePrice, downPaymentPercent, interestRate, loanTermYears, propertyTaxRate, annualInsurance, monthlyHOA]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-24 px-6 md:px-14 lg:px-24 bg-slate-950 relative overflow-hidden" id="calculator">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs md:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3">
            Financial Planning Suite
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Mortgage & <span className="underline decoration-blue-500 underline-offset-8 font-light text-slate-300">Investment Calculator</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-lg mx-auto">
            Accurately model your monthly luxury property outlays, down payment options, and long-term asset appreciation.
          </p>
        </motion.div>

        {/* 2-Column Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-slate-900/90 border border-slate-800 p-8 sm:p-10 rounded-3xl backdrop-blur-xl shadow-xl space-y-8"
          >
            {/* Property Price Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-300">Property Price</label>
                <span className="text-lg font-bold text-blue-400">{formatCurrency(homePrice)}</span>
              </div>
              <input
                type="range"
                min="500000"
                max="10000000"
                step="50000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>$500K</span>
                <span>$5M</span>
                <span>$10M+</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-300">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="text-sm font-bold text-slate-200">
                  {formatCurrency(calculations.downPaymentAmount)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            {/* Interest Rate & Loan Term Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-300">Interest Rate</label>
                  <span className="text-sm font-bold text-slate-200">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="3.0"
                  max="10.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-300 block mb-2">Loan Term</label>
                <div className="grid grid-cols-2 gap-2">
                  {[15, 30].map((term) => (
                    <button
                      key={term}
                      onClick={() => setLoanTermYears(term)}
                      className={`py-2 px-4 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        loanTermYears === term
                          ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20'
                          : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      {term} Years
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Property Tax & HOA Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">
                  Est. Annual Property Tax ({propertyTaxRate}%)
                </label>
                <p className="text-sm font-bold text-slate-200">
                  {formatCurrency((homePrice * propertyTaxRate) / 100)} / yr
                </p>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">
                  Est. Monthly HOA Dues
                </label>
                <p className="text-sm font-bold text-slate-200">${monthlyHOA} / mo</p>
              </div>
            </div>
          </motion.div>

          {/* Results Summary Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Total Monthly Outlay Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Estimated Monthly Outlay
              </p>
              <h3 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-6">
                {formatCurrency(calculations.totalMonthlyPayment)}
                <span className="text-sm font-normal text-slate-400"> / month</span>
              </h3>

              {/* Breakdown List */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    Principal & Interest
                  </span>
                  <span className="font-bold text-white">
                    {formatCurrency(calculations.monthlyPrincipalAndInterest)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                    Property Taxes
                  </span>
                  <span className="font-bold text-white">
                    {formatCurrency(calculations.monthlyPropertyTax)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    Home Insurance
                  </span>
                  <span className="font-bold text-white">
                    {formatCurrency(calculations.monthlyInsurance)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-slate-300">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    HOA & Maintenance
                  </span>
                  <span className="font-bold text-white">${calculations.monthlyHOA}</span>
                </div>
              </div>

              {/* Progress Multi-Bar */}
              <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex gap-0.5 mt-6">
                <div
                  style={{
                    width: `${(calculations.monthlyPrincipalAndInterest / calculations.totalMonthlyPayment) * 100}%`
                  }}
                  className="bg-blue-500 h-full"
                />
                <div
                  style={{
                    width: `${(calculations.monthlyPropertyTax / calculations.totalMonthlyPayment) * 100}%`
                  }}
                  className="bg-sky-400 h-full"
                />
                <div
                  style={{
                    width: `${(calculations.monthlyInsurance / calculations.totalMonthlyPayment) * 100}%`
                  }}
                  className="bg-indigo-400 h-full"
                />
                <div
                  style={{
                    width: `${(calculations.monthlyHOA / calculations.totalMonthlyPayment) * 100}%`
                  }}
                  className="bg-emerald-400 h-full"
                />
              </div>
            </div>

            {/* 5-Year Capital Growth Forecast Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  📈 5-Year Appreciation Forecast
                </span>
                <span className="text-xs text-slate-400 font-medium">+5.2% Annually</span>
              </div>
              <p className="text-2xl font-bold text-white">
                +{formatCurrency(calculations.estimatedAppreciation)}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Estimated property valuation reaches{' '}
                <strong className="text-slate-200">{formatCurrency(calculations.fiveYearValue)}</strong> in 5 years.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
