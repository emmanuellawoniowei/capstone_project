import hero from "../assets/images/hero.png"
import enter from "../assets/icons/enter.svg"

export default function Hero() {
    return (
        <section className="w-full bg-[#FFF6FD] flex flex-col md:flex-row items-center justify-between mt-[100px] md:mt-[120px] lg:mt-[150px] rounded-[20px] overflow-hidden">

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4 xl:gap-6 px-5 md:px-10 lg:px-[100px] py-10">

                <h1 className="text-[25px] sm:text-[38px] md:text-[46px] lg:text-[48px] xl:text-[60px] text-black font-bold leading-tight max-w-[500px]">
                    Glow Beyond Expectations
                </h1>

                <p className="text-black text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] font-light max-w-[440px]">
                    Clean, effective, and cruelty-free skincare made to deliver visible results.
                </p>

                <button
                    type="button"
                    className="flex items-center gap-3 
                    px-5 md:px-6 py-3 
                    bg-[#121212] text-white rounded-full 
                    hover:bg-pink-600 transition 
                    text-[14px] sm:text-[16px] md:text-[20px] lg:text-[25px]"
                >
                    Shop Now
                    <img src={enter} alt="Enter" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </button>

            </div>

            {/* IMAGE (hidden on mobile) */}
            <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-end">
                <img 
                    src={hero} 
                    alt="Hero Image" 
                    className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-full max-w-[600px] object-contain rounded-[20px]"
                />
            </div>

        </section>
    )
}