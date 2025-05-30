import React from "react";
import Navbar from "../Components/navbar.jsx";
import StatSection from "../Components/Stat-Section.jsx";
import Berlanggan from "../Components/Berlanggan.jsx";
import Footer from "../Components/Footer.jsx";
import ProductUnggulan from "../Components/Product-Unggulan.jsx";
import HeroSection from "../Components/Hero-Section.jsx";


function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatSection />
      <ProductUnggulan />
      <Berlanggan />
      <Footer />    
      </div>
  );
}

export default HomePage;
