import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#080808] border-t border-white/5 text-[#F4F4F4] pt-32 pb-12 px-6 relative z-40 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Connect</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter mb-8 leading-tight">
              Let's build something<br /><span className="italic text-white/60">great together.</span>
            </h2>
            <a 
              href="mailto:muhammadraihanofc@gmail.com" 
              className="inline-flex items-center gap-3 text-xl font-serif tracking-tight border-b border-white/20 pb-1 hover:text-white/80 hover:border-white/50 transition-colors"
            >
              muhammadraihanofc@gmail.com
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div className="flex flex-col gap-4">
              <h4 className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-2">Socials</h4>
              <a href="https://github.com/maulrai" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors uppercase">GitHub</a>
              <a href="https://www.linkedin.com/in/muhammad-raihan-maulana-a05a2823a/" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors uppercase">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-2">Navigation</h4>
              <a href="#work" className="text-[10px] tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors uppercase">Projects</a>
              <a href="#services" className="text-[10px] tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors uppercase">Skills</a>
              <a href="#experience" className="text-[10px] tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors uppercase">Experience</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full text-center"
          >
            <h1 className="text-[12vw] leading-none font-serif tracking-tighter uppercase mb-6 text-white/90">
              Maulrai&reg;
            </h1>
          </motion.div>
          
          <div className="w-full h-16 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.3em] font-medium text-white/30 uppercase border-t border-white/5 mt-8 pt-8 md:pt-0">
            <div className="flex gap-4 md:gap-8 items-center flex-wrap justify-center mb-4 md:mb-0">
              <span>&copy; {new Date().getFullYear()} Muhammad Raihan Maulana</span>
              <span className="hidden md:inline text-white/10">|</span>
              <span>AI-Powered Full-Stack Developer</span>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/maulrai" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/muhammad-raihan-maulana-a05a2823a/" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
