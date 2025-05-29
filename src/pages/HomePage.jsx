import React from "react";
import Navbar from "../Components/navbar";
import StatSection from "../Components/Stat-Section";
import Berlanggan from "../Components/Berlanggan";
import Footer from "../Components/Footer";
import HeroSection from "../Components/hero-Section";
import ProductUnggulan from "../Components/Product-Unggulan.Jsx";


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
