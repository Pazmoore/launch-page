import React from "react";
import Link from "next/link";

export default function why() {
  return (
    <section className="mt-20">
      <div className="flex flex-col flex-wrap items-center justify-center text-center px-4">
        <h1 className="lg:text-5xl text-4xl text-gray-400 mb-2">
          Movie Conference 2025:
        </h1>
        <h1 className="text-2xl font-extrabold mb-4 bg-gradient-to-br from-[#ff0101] to-[#f1c1bb] bg-clip-text text-transparent">
          Celebrating the Art of Storytelling and Cinema 🎥✨
        </h1>

        <div className="flex flex-wrap justify-between items-center w-full gap-4">
            <p className=" text-lg">
                Welcome to the <strong>Movie Conference</strong>, the ultimate gathering for film enthusiasts,
                industry professionals, and creative minds passionate about cinema. This event is a celebration
                of storytelling, innovation, and the art of filmmaking. Dive into engaging panel discussions,
                inspiring keynote sessions, and hands-on workshops led by industry leaders. Discover the latest
                trends in film production, directing, animation, and movie critique. Whether you’re a filmmaker,
                critic, or movie lover, this conference offers endless opportunities to learn, network, and be
                inspired. Join us as we explore the magic of movies and the power of visual storytelling. 🎬✨
            </p>
        </div>

        <Link
          href="https://ticket-lake-two.vercel.app/"
          className="mt-4 mb-4 inline-block px-5 py-3 text-white font-bold text-base rounded-full bg-gradient-to-br from-[#f10004] to-[#8aefcc] shadow-md hover:from-[#8aefcc] hover:to-[#f10004] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        >
          Let&apos;s Get Started
        </Link>
      </div>
    </section>
  );
}
