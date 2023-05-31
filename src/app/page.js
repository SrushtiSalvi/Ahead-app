"use client";

import AOS from "aos";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Study from "@/components/Study";
import AboutApp from "@/components/AboutApp";
import SelfImprovement from "@/components/SelfImprovement";
import Study1 from "@/components/Study1";
import FeatureSection from "@/components/FeatureSection";
import Note from "@/components/Note";
import WorkWithUs from "@/components/WorkWithUs";
import Vacancies from "@/components/Vacancies";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refreshHard();
  }, []);
  return (
    <div>
      <div className="px-12">
        <Navbar />
        <Hero />
        <Study />
        <AboutApp />
        <SelfImprovement />
        <Study1 />
        <FeatureSection />
        <Note />
        <WorkWithUs />
        <Vacancies />
        <Footer />
      </div>
    </div>
  );
}
