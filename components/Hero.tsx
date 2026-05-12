import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-screen flex flex-col pt-40">
      <div className="container mx-auto max-w-7xl relative flex-1 flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12 flex-1"
        >
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Featured Studio</span>
            </div>
            <h1 className="text-6xl md:text-[8vw] lg:text-[10vw] font-serif leading-[0.9] tracking-tighter text-[#F4F4F4] uppercase">
              Bold<br />
              <span className="text-white/60 italic lowercase tracking-normal">imagery</span>
            </h1>
          </div>
          
          <div className="max-w-sm mb-4 md:mb-8 space-y-6">
            <p className="text-sm text-white/40 font-light leading-relaxed">
              A minimalist exploration of interaction and digital spaces in the modern web. Designed for clarity and performance.
            </p>
            <div className="pt-4 flex gap-4">
              <a href="#work" className="px-6 py-3 border border-white/20 text-[10px] tracking-[0.2em] font-bold hover:bg-white hover:text-black cursor-pointer transition-colors uppercase">
                View Projects
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 relative aspect-square md:aspect-[21/9] w-full bg-[#111] border border-white/5 overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Hero featured work" 
            className="w-full h-full object-cover object-center opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
          />
          <div className="absolute inset-0 border border-white/5"></div>
          <div className="absolute top-8 left-8 text-[10px] tracking-[0.4em] font-bold text-white/20">
            01 / 04
          </div>
          <div className="absolute bottom-8 right-8 text-[10px] tracking-[0.2em] text-white/20" style={{ writingMode: 'vertical-rl' }}>
            REF: HERO-VISION
          </div>
        </motion.div>
      </div>
    </section>
  );
}
