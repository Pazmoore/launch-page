import React from "react";
import Arrow from "@/components/Arrow";
import Why from "@/components/Why";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <section className="px-5">
      <Navbar/>
      <Why />
      <Footer />
      <Arrow />
    </section>
  );
};

export default Page;
