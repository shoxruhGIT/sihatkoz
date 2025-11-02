import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import About from "./components/About/About";
import WhyUs from "./components/WhyUs/WhyUs";
import Departments from "./components/Departments/Departments";
import StatsPanel from "./components/StatsPanel/StatsPanel";
import Reviews from "./components/Reviews/Reviews";
import Blog from "./components/Blog/Blog";
import Partner from "./components/Partner/Partner";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Feature />
        <About />
        <WhyUs />
        <Departments />
        <StatsPanel />
        <Reviews />
        <Blog />
        <Partner />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
