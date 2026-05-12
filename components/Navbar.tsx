import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Work', 'Services', 'Pricing', 'Blog', 'Contact'];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6 border-b border-white/5 md:border-transparent'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.3em] font-medium text-white/40 mb-1 hidden md:block">STUDIO</span>
            <a href="#" className="text-3xl font-serif tracking-tighter">PALMER&reg;</a>
          </div>
          
          <nav className="hidden md:flex gap-16 items-center text-[10px] tracking-[0.2em] font-semibold text-white/60">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors uppercase">
                {link}
              </a>
            ))}
            <a href="#contact" className="text-white/30 hover:text-white transition-colors">
              [ CONTACT ]
            </a>
          </nav>

          <button className="md:hidden text-white/60 hover:text-white" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#080808] flex flex-col pt-6 px-6 border-b border-white/5"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-3xl font-serif tracking-tighter">PALMER&reg;</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/60 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 text-[10px] tracking-[0.3em] font-semibold uppercase text-white/60">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white">
                  {link}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white/30 hover:text-white mt-4">
                [ CONTACT ]
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
