import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Jobs from "../components/Jobs/Jobs";
import Hero from "../components/Hero/Hero";
import Filter from "../components/Filter/Filter";

const Home = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Hero />
      <Filter />
      <Jobs />
      <Footer />
    </div>
  );
};

export default Home;
