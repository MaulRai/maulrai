import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const works = [
  {
    id: 1,
    title: 'Study Portal Fasilkom UI',
    category: 'Full-Stack • AI Agent • RAG',
    image: '/images/study.png',
    link: 'https://study-staging.ppl.cs.ui.ac.id',
  },
  {
    id: 2,
    title: 'Syair - Semantic Search',
    category: 'AI Agent • RAG • IR',
    image: '/images/syair.png',
    link: 'https://syair.site',
  },
  {
    id: 3,
    title: 'Vessel',
    category: 'Web3 • Blockchain • Finance • DeFi',
    image: '/images/vessel.png',
    link: 'https://vessel-vert.vercel.app',
  },
  {
    id: 4,
    title: 'MyMineTicketKu',
    category: 'Web3 • Blockchain • NFT • Marketplace',
    image: '/images/mymineticketku.png',
    link: 'https://my-mine-ticket-ku-fe.vercel.app',
  },
  {
    id: 5,
    title: 'Garuda Cendekia Academy',
    category: 'Full-Stack • AI Vision',
    image: '/images/gca.png',
    link: 'https://dev.garudacendekiaacademy.com/',
  },
  {
    id: 6,
    title: 'PvZetian',
    category: 'Game Dev • Multiplayer',
    image: '/images/pvzetian.png',
    link: 'https://maulrai.itch.io/pvzetian',
  }
];

export default function FeaturedWorks() {
  return (
    <section id="work" className="py-20 px-6 border-t border-white/5 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Selected Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter uppercase">Featured Works</h2>
          </div>
          <a href="https://github.com/maulrai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 group text-[10px] tracking-[0.2em] uppercase font-bold text-white/60 hover:text-white transition-colors">
            <span>View GitHub Portfolio</span>
            <span className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {works.map((work, index) => (
            <motion.a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block"
            >
              <div className="relative w-full aspect-16/8 overflow-hidden mb-6 bg-[#111] border border-white/5">
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
                <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/20 group-hover:border-white/40 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

