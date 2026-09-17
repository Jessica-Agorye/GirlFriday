import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhatWeSource from "../components/WhatWeSource";
import ServicePricing from "../components/ServicePricing";
import FAQ from "../components/Faq";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhatWeSource />
      <ServicePricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
};
export default HomePage;
