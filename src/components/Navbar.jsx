import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/icons/Logo.svg"
import Bag from "../assets/icons/bag.svg"
import Heart from "../assets/icons/heart.svg"
import Profile from "../assets/icons/profile.svg"
import Category from "../assets/icons/category.svg"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const navRef = useRef(null);

    return (
        <nav 
            ref={navRef} 
            className="flex flex-row justify-between items-center lg:gap-[30px] lg:justify-between items-center fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md px-[20px] lg:px-[35px] py-[25px] border-b-2 border-pink-200 lg:border-b-0 lg:shadow-sm">

            <img src={Logo} alt="Logo" />


            <button type="button" className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <img src={Category} alt="Menu" />
            </button>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden px-[20px] py-6 border-t-2 border-pink-200">

                        <ul className="flex flex-col justify-center items-start gap-6 mb-6">
                            <li className="text-[24px] text-[#545454] font-light" onClick={() => setIsOpen(false)}>
                                Home
                            </li>

                            <li className="text-[24px] text-[#545454] font-light" onClick={() => setIsOpen(false)}>
                                Shop
                            </li>

                            <li className="text-[24px] text-[#545454] font-light" onClick={() => setIsOpen(false)}>
                                Spa
                            </li>

                            <li className="text-[24px] text-[#545454] font-light" onClick={() => setIsOpen(false)}>
                                About
                            </li>

                            <li className="text-[24px] text-[#545454] font-light" onClick={() => setIsOpen(false)}>
                                Contact
                            </li>
                        </ul>

                        <div className="lg:hidden flex flex-row justify-start items-center gap-[20px]">
                            <img
                                src={Bag} alt="Shopping Bag"
                                onClick={() => setIsOpen(false)}
                            />

                            <img
                                src={Heart}
                                onClick={() => setIsOpen(false)}
                            />
                            <img
                                src={Profile} alt="Profile"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                    </motion.div>

                )}
            </AnimatePresence>

            <ul className="hidden md:hidden lg:flex flex-row justify-center items-center gap-[32px]">
                <li className="text-[24px] text-[#545454] font-light cursor-pointer transition-all duration-300 hover:text-pink-500 hover:-translate-y-1 ">
                    Home
                </li>

                <li className="text-[24px] text-[#545454] font-light cursor-pointer transition-all duration-300 hover:text-pink-500 hover:-translate-y-1 ">
                    Shop
                </li>

                <li className="text-[24px] text-[#545454] font-light cursor-pointer transition-all duration-300 hover:text-pink-500 hover:-translate-y-1">
                    Spa
                </li>

                <li className="text-[24px] text-[#545454] font-light cursor-pointer transition-all duration-300 hover:text-pink-500 hover:-translate-y-1 ">
                    About
                </li>

                <li className="text-[24px] text-[#545454] font-light cursor-pointer transition-all duration-300 hover:text-pink-500 hover:-translate-y-1">
                    Contact
                </li>
            </ul>

            <div className="hidden md:hidden lg:flex flex-row justify-center items-center gap-[20px]">
                <img
                    src={Bag} alt="Shopping Bag"
                    className="cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                />

                <img
                    src={Heart}
                    className="cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                />
                <img
                    src={Profile} alt="Profile"
                    className="cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                />
            </div>

        </nav>
    )
}