import hero from "../assets/images/hero.png";
import enter from "../assets/icons/enter.svg";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto mt-28 px-6 lg:px-10"
    >
      <div className="bg-[#FFF6FD] rounded-[28px] overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-sm">

        <div className="w-full md:w-1/2 px-8 lg:px-16 py-14">

          <span className="uppercase tracking-widest text-pink-500 font-medium">
            Premium Skincare
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Reveal Your Natural Glow
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-md leading-relaxed">
            Dermatologist-inspired skincare formulated with gentle, effective ingredients
            to hydrate, restore, and protect your skin barrier for a healthy glow every day.
          </p>

          <button className="mt-8 flex items-center gap-3 px-7 py-4 bg-[#E75480] hover:bg-pink-600 transition text-white rounded-full shadow-md">
            Shop Collection
            <img src={enter} alt="arrow icon" className="w-5 h-5" />
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">

          <img
            src={hero}
            alt="Skincare Products"
            className="w-full max-w-[520px] md:max-w-[600px] lg:max-w-[650px] object-contain"
          />

          <div className="absolute -z-10 w-[280px] h-[280px] bg-pink-200 blur-3xl opacity-30 rounded-full top-10 right-10"></div>
        </div>

      </div>
    </section>
  );
}