import { motion } from 'motion/react';

const experiences = [
  {
    id: 1,
    title: "Mobile Developer Intern",
    company: "Herlens",
    description: "Spearheaded UI development using Flutter for 5 key modules, resolving bugs and improving stability by 50%. Integrated frontend interfaces with backend APIs.",
  },
  {
    id: 2,
    title: "Ristek Tutor Class Instructor",
    company: "Ristek Fasilkom UI",
    description: "Awarded Best Tutor 2025. Tutored 10+ core CS subjects, delivering sessions and curating supplementary materials.",
  },
  {
    id: 3,
    title: "Manager of Creative Division",
    company: "COMPFEST",
    description: "Directed creative operations for a large-scale national tech event. Standardized visual identity across digital and physical platforms.",
  },
  {
    id: 4,
    title: "Media Division Staff",
    company: "BEM Fasilkom UI",
    description: "Produced 30+ high-quality visual assets and social media content while maintaining brand consistency.",
  },
  {
    id: 5,
    title: "Executive Lead",
    company: "SIX IT SMAN 6 BEKASI",
    description: "Managed 12+ programs including workshops and events. Acted as a liaison between the club and external organizations.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-t border-white/5 relative bg-[#080808]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-white/20"></div>
          <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Journey</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tighter mb-12 uppercase">Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#111] p-10 border border-white/5 flex flex-col justify-between h-full group hover:border-white/10 transition-colors"
            >
              <div className="mb-8">
                <p className="text-white/30 text-[10px] tracking-[0.2em] mb-4 uppercase">{exp.company}</p>
                <h3 className="text-xl font-serif tracking-tight mb-4 group-hover:text-white transition-colors uppercase">{exp.title}</h3>
                <p className="text-sm font-light leading-relaxed text-white/60">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
