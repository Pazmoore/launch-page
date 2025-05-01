"use client";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const Arrow = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="fixed bottom-0 left-0 right-0 cursor-pointer"
      onClick={scrollToTop}
    >
      <div className="contain flex items-end justify-end h-full">
        <span className="custom-light-bg rounded-full text-3xl p-3 my-6">
          <IoIosArrowUp />
        </span>
      </div>
    </section>
  );
};

export default Arrow;
