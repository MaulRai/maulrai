import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden min-h-[70vh] flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl relative flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-4xl space-y-2">
            <h1 className="text-6xl md:text-[8vw] lg:text-[10vw] font-serif leading-[0.9] tracking-tighter text-[#F4F4F4] uppercase">
              Raihan<br />
              <span className="text-white/60 italic lowercase tracking-normal">Maulana</span>
            </h1>
          </div>
          
          <div className="max-w-sm space-y-4">
            <p className="text-sm text-white/40 font-light leading-relaxed">
              AI-Powered Full-Stack Developer. Crafting impactful digital experiences through code, artificial intelligence, and intuitive design.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/maulrai" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-raihan-maulana-a05a2823a/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://maulrai.bio" className="px-6 py-3 border border-white/20 text-[10px] tracking-[0.2em] font-bold hover:bg-white hover:text-black cursor-pointer transition-colors uppercase">
                View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
