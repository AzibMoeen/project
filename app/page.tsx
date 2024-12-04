"use client";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Resume from "@/components/sections/Resume";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 space-y-20">
        <Hero />
        <Technologies />
        <Projects />
        <Resume />
        <Education />
        <Contact />
      </div>
    </main>
  );
}