import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Category from "../assets/icons/category.svg";

export default function Navbar() {
    const navRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const navItems = [
        { label: "Home", id: "home" },
        { label: "Shop", id: "shop" },
        { label: "FAQ", id: "faq" },
        { label: "Contact", id: "contact" },
    ];

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-pink-100"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between items-center">
               
                <h1
                    onClick={() => scrollToSection("home")}
                    className="text-2xl lg:text-3xl font-bold cursor-pointer tracking-wide"
                >
                    Aura<span className="text-pink-500">Beauty</span>
                </h1>

                <ul className="hidden lg:flex items-center gap-10">
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="cursor-pointer text-gray-700 hover:text-pink-500 font-medium transition"
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img src={Category} alt="Menu" />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="lg:hidden bg-white border-t border-pink-100 shadow-lg"
                    >
                        <ul className="flex flex-col gap-5 px-6 py-6 text-gray-700">
                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="cursor-pointer hover:text-pink-500 transition"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}