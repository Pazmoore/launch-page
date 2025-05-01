"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PiMoonThin, PiSunThin } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import Countdown from "@/components/Countdown";

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Apply dark mode styles to the entire page and custom divs
    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add("dark");
        document.body.style.backgroundColor = "#171F3C";
        document.body.style.color = "white";
    
        document.querySelectorAll(".custom-light-bg").forEach((div) => {
            (div as HTMLElement).style.backgroundColor = "#18212F"; // Custom dark mode background for divs
        });
        } else {
        document.documentElement.classList.remove("dark");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    
        document.querySelectorAll(".custom-light-bg").forEach((div) => {
            (div as HTMLElement).style.backgroundColor = "#F3F4F6"; // Custom light mode background for divs
        });
        }
    }, [darkMode]);

    // Prevent scrolling when the sidebar is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

  return (
    <section className= {darkMode ? "dark" : ""}>
        <div
        className="relative w-full object-cover bg-cover bg-no-repeat text-white rounded-4xl custom-light-bg mt-1 p-3"
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
        >
            {/* Navbar (Desktop) */}
            <nav className="hidden lg:flex justify-between items-center p-6 w-full mb-2">
                <Image src="/images/logo.png" alt="logo" width={100} height={100} className="rounded-full"/>
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Dark Mode Toggle */}
                    <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`relative w-16 h-8 flex items-center backdrop-blur-md rounded-full shadow-md p-1 transition ${
                        darkMode ? "bg-[#989898]" : "bg-[#FFFFFF66]"
                        }`}
                    >
                        <div
                            className={`w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-400 transition-transform duration-300 ${
                            darkMode ? "translate-x-7" : "translate-x-0"
                            }`}
                        >
                            {darkMode ? <PiMoonThin className="text-black" /> : <PiSunThin className="text-black" />}
                        </div>
                    </button>
                    {/* Join Waitlist Button */}
                    <button className="p-3 rounded-full font-semibold bg-white text-black shadow-md hover:bg-gray-100 transition">
                        Join Waitlist
                    </button>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <div className="lg:hidden flex items-center justify-between p-5 w-full">
                <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
                <FaBars className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
            </div>

            {/* Sidebar Menu (Mobile) */}
            {menuOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 rounded-3xl">
                <div
                className={`fixed top-0 left-0 w-56 h-56 ${
                    darkMode ? "bg-[#171F3C] text-white" : "bg-white text-black"
                } shadow-lg p-4 flex flex-col gap-4 z-50 transition-colors`}
                >
                    <button className="self-end text-xl text-black" onClick={() => setMenuOpen(false)}>
                        ✖
                    </button>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`relative w-16 h-8 flex items-center ${
                        darkMode ? "bg-gray-700" : "bg-gray-300"
                        } rounded-full shadow-md p-1 transition`}
                    >
                        <div
                        className={`w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-400 transition-transform duration-300 ${
                            darkMode ? "translate-x-7" : "translate-x-0"
                        }`}
                        >
                        {darkMode ? <PiMoonThin className="text-black" /> : <PiSunThin className="text-black" />}
                        </div>
                    </button>

                    {/* Join Waitlist Button */}
                    <button
                        className={`p-2 rounded-full font-semibold ${
                        darkMode
                            ? "bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition"
                            : "bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition"
                        } shadow-md transition`}
                    >
                        Join Waitlist
                    </button>
                </div>
            </div>
            )}

            {/* Main Content */}
            <div className="mt-2">
                <div className="flex flex-wrap justify-center items-center text-center">
                    <div className="flex flex-wrap flex-col justify-center items-center text-center gap-5 mb-6">
                        <h1 className="lg:text-5xl text-4xl mb-7 w-full max-w-[700px]">
                            Be The First To Experience Anime Fest.
                        </h1>
                        <div className="flex justify-between items-center bg-[#FFFFFF66] backdrop-blur-md rounded-full shadow-md p-3 gap-2 w-full max-w-[600px] cursor-pointer mb-7">
                            <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent outline-none p-3 w-full placeholder-black"
                            />
                            <button className="bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition w-full max-w-28 cursor-pointer p-3">
                            Join Waitlist
                            </button>
                        </div>
                        <div>
                            <Countdown targetDate="2025-06-20T12:00:00Z"/>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default Navbar