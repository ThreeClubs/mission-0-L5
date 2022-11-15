import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

const scrollToSignUp = () => {
  ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div
      id="container"
      className="bg-gray-200 font-sans flex flex-col items-center"
    >
      <Header />
      <HeroSection />
      <div ref={ref} className="w-full">
        <SignUp  />
      </div>
      <Footer />
    </div>
  );
}
