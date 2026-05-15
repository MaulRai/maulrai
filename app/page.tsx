'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedWorks from '../components/FeaturedWorks';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Experience from '../components/Experience';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F4F4] font-sans selection:bg-[#F4F4F4] selection:text-[#080808] relative">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWorks />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

