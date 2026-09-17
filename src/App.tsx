import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhatWeSource from "./components/WhatWeSource";
import ServicePricing from "./components/ServicePricing";
import FAQ from "./components/Faq";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhatWeSource />
      <ServicePricing />
      <FAQ />
    </>
  );
}

export default App;
