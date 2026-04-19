import React from "react";

function Hero() {
  return (
    <div className="relative overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen md:h-screen bg-gradient-to-br from-indigo-950 via-violet-900 to-purple-900 text-white p-4 sm:p-8 mt-8 sm:mt-3 md:mt-1 rounded-2xl gap-10">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_15%_30%,rgba(56,189,248,0.28),transparent_40%),radial-gradient(circle_at_85%_50%,rgba(168,85,247,0.28),transparent_40%)]"></div>
      <div className="absolute -left-20 top-20 w-36 h-36 rounded-full bg-cyan-300/20 blur-3xl animate-pulse"></div>
      <div className="absolute right-12 bottom-14 w-28 h-28 rounded-full bg-pink-400/20 blur-2xl animate-pulse"></div>
      <div className="relative max-w-xl space-y-5 z-20">
        <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 backdrop-blur">
          <span className="text-xs uppercase tracking-wider text-cyan-100">
            Hot drop
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="text-yellow-300">HabiShopi</span> is your{" "}
          <span className="text-cyan-300">smartest</span> way to shop
        </h1>
        <p className="text-base sm:text-xl text-slate-100">
          Save time with curated deals, fast shipping, and the trendiest
          products from phones, fashion, and appliances.
        </p>
        <div className="inline-flex gap-3">
          <button className="bg-cyan-400 text-slate-900 font-bold py-3 px-6 rounded-lg shadow-lg shadow-cyan-600/35 hover:bg-cyan-300 transform transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            Explore Deals
          </button>
          <button className="border border-white/70 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
            Shop Bestsellers
          </button>
        </div>
        <div className="mt-3 flex items-center gap-3 text-sm text-gray-200">
          <span className="px-3 py-1 bg-white/10 rounded-full">
            Free shipping
          </span>
          <span className="px-3 py-1 bg-white/10 rounded-full">
            24/7 Support
          </span>
          <span className="px-3 py-1 bg-white/10 rounded-full">
            New arrivals
          </span>
        </div>
      </div>

      <div className="relative w-full md:w-3/5 lg:w-1/2 flex justify-center z-10">
        <img
          src="images/hero-image.png"
          alt="Shopping"
          className="w-72 sm:w-96 md:w-full lg:w-full max-w-2xl rounded-xl shadow-2xl border border-white/15 transform transition-all duration-500 hover:scale-110"
        />
      </div>
    </div>
  );
}

export default Hero;
