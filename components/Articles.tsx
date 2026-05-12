import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'The Future of Interaction Design',
    author: 'Gregory Lalle',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2670&auto=format&fit=crop',
    date: 'Oct 12, 2023',
  },
  {
    id: 2,
    title: 'Minimalism is Not Lack of Design',
    author: 'Clive Willow',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop',
    date: 'Nov 04, 2023',
  },
  {
    id: 3,
    title: 'Creating Digital Experiences That Last',
    author: 'Raven Claw',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2794&auto=format&fit=crop',
    date: 'Dec 18, 2023',
  }
];

export default function Articles() {
  return (
    <section id="blog" className="py-20 px-6 border-t border-white/5 relative bg-[#080808]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Journal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter uppercase whitespace-nowrap text-white/90">Writing</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-4 group text-[10px] tracking-[0.2em] font-bold text-white/60 hover:text-white transition-colors uppercase">
            <span>All articles</span>
            <span className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.a
              href="#"
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block"
            >
              <div className="relative aspect-[3/2] overflow-hidden mb-6 bg-[#111] border border-white/5">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                />
              </div>
              <div className="flex justify-between items-start gap-4 border-t border-white/5 pt-4">
                <div>
                  <h3 className="text-lg md:text-xl font-serif mb-2 group-hover:text-white/80 transition-colors leading-tight">{article.title}</h3>
                  <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-medium">By {article.author}</p>
                </div>
                <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase whitespace-nowrap">{article.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
