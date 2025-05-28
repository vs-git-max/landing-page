import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Workflow from "./components/sections/Workflow";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/sections/Footer";
import { Separator } from "./components/ui/separator";

const App = () => {
  return (
    <div className="bg-black w-full min-h-screen text-white font-bold">
      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Separator />
        <Footer />
      </div>
    </div>
  );
};

export default App;
