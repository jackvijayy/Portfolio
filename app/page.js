'use client'

import About from "@/components/About";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";


export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden 
   mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <Project />
        <Certification />
        <Contact />
        <Footer/>





      </div>

    </main>
  );
}
