import React from "react";
import Header from "../src/components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      id="container"
      className="bg-gray-200 font-sans flex flex-col items-center"
    >
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
