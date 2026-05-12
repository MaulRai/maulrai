'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedWorks from '../components/FeaturedWorks';
import Services from '../components/Services';
import UserExperience from '../components/Experience';
import Articles from '../components/Articles';
import UserFAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F4F4F4] font-sans selection:bg-[#F4F4F4] selection:text-[#080808] relative">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWorks />
        <Services />
        <UserExperience />
        <Articles />
        <UserFAQ />
      </main>
      <Footer />
    </div>
  );
}

