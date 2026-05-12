import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const works = [
  {
    id: 1,
    title: 'Nexus Platform',
    category: 'Interaction Design',
    image: 'https://images.unsplash.com/photo-1621360841013-c76831f1628f?q=80&w=2564&auto=format&fit=crop',
    year: '2023',
  },
  {
    id: 2,
    title: 'Aura App',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2670&auto=format&fit=crop',
    year: '2023',
  },
  {
    id: 3,
    title: 'Verve Rebrand',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop',
    year: '2022',
  }
];

export default function FeaturedWorks() {
  return (
    <section id="work" className="py-32 px-6 border-t border-white/5 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Selected Projects</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter">Featured Works&copy;</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-4 group text-[10px] tracking-[0.2em] uppercase font-bold text-white/60 hover:text-white transition-colors">
            <span>View all works</span>
            <span className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.a
              href="#"
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#111] border border-white/5">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                />
              </div>
              <div className="flex justify-between items-start border-t border-white/5 pt-4">
                <div>
                  <h3 className="text-xl font-serif tracking-tight mb-2 group-hover:text-white/80 transition-colors">{work.title}</h3>
                  <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">{work.category}</p>
                </div>
                <span className="text-white/30 text-[10px] tracking-[0.2em]">{work.year}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
