import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  { id: '01', title: 'Art Direction', description: 'Visual strategy and brand aesthetics.' },
  { id: '02', title: 'UI/UX Design', description: 'Functional and striking digital experiences.' },
  { id: '03', title: 'Creative Coding', description: 'Turning designs into performant web applications.' },
  { id: '04', title: 'Brand Identity', description: 'Logos, guidelines, and holistic brand systems.' },
  { id: '05', title: 'Motion Design', description: 'Fluid animations and interaction design.' },
  { id: '06', title: '3D Visualization', description: 'Immersive textures and product rendering.' },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 border-t border-white/5 relative bg-[#080808]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter">Services<br/><span className="text-white/30 italic text-2xl md:text-4xl">(6)</span></h2>
          </div>
          <p className="max-w-md text-sm text-white/40 font-light leading-relaxed mt-4 md:mt-20">
            We operate at the intersection of design, technology, and art to build digital products that scale.
          </p>
        </div>

        <div className="border-t border-white/5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group border-b border-white/5 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer hover:bg-white/[0.02] hover:pl-8 transition-all duration-500"
            >
              <div className="flex items-center gap-8">
                <span className="text-white/30 text-[10px] tracking-[0.2em]">{service.id} //</span>
                <h3 className="text-2xl md:text-4xl font-serif tracking-tighter group-hover:text-white/80 transition-colors uppercase">{service.title}</h3>
              </div>
              <div className="flex items-center justify-between w-full md:w-auto gap-12">
                <p className="text-white/40 max-w-xs text-sm font-light leading-relaxed">{service.description}</p>
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-hover:bg-white/5">
                  <ArrowRight className="w-4 h-4 text-white/60" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
