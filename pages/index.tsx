import React, { useState } from "react";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Hero from "@/Components/Hero";
import About from "@/Components/AboutUs";
import Products from "@/Components/Products";
import OurProducts from "@/Components/OurProducts";
import OurTeams from "@/Components/OurTeams";
import Testimonial from "@/Components/Testimonial";
import Footer from "@/Components/Footer";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* NavBar Section*/}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/*Hero Section*/}
        <Hero />
        <div className="relative z-[30]">
          <About />
          {/* Services */}
          <Products />
          <OurProducts />
          {/* Our Teams */}
          <OurTeams />
          {/* Testimonial */}
          <Testimonial />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
