import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Companies from "../components/Companies";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";

export default function Homepage() {
  return (
    <div className="text-white">
      <Hero />
      <Features />
      <Companies />
      <Testimonial />
      <FAQ />
    </div>
  );
}
