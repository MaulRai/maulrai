import { motion } from 'motion/react';

const experiences = [
  {
    id: 1,
    title: "Mobile Developer Intern",
    company: "Herlens",
    description: "Spearheaded UI development using Flutter for 5 key modules, resolving bugs and improving stability by 50%. Integrated frontend interfaces with backend APIs.",
    year: "2024",
  },
  {
    id: 2,
    title: "Ristek Tutor Class Instructor",
    company: "Ristek Fasilkom UI",
    description: "Awarded Best Tutor 2025. Tutored 10+ core CS subjects, delivering sessions and curating supplementary materials.",
    year: "2025",
  },
  {
    id: 3,
    title: "Manager of Creative Division",
    company: "COMPFEST",
    description: "Directed creative operations for a large-scale national tech event. Standardized visual identity across digital and physical platforms.",
    year: "2024",
  },
  {
    id: 4,
    title: "Media Division Staff",
    company: "BEM Fasilkom UI",
    description: "Produced 30+ high-quality visual assets and social media content while maintaining brand consistency.",
    year: "2023",
  },
  {
    id: 5,
    title: "Executive Lead",
    company: "SIX IT SMAN 6 BEKASI",
    description: "Managed 12+ programs including workshops and events. Acted as a liaison between the club and external organizations.",
    year: "2022",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-t border-white/5 relative bg-[#080808] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-white/20"></div>
          <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Journey</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tighter mb-16 uppercase">Experience</h2>
        
        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-white/0 md:transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-white/40 rounded-full transform -translate-x-1.5 md:-translate-x-1/2 ring-2 ring-[#080808] z-10 cursor-pointer hover:bg-white transition-colors"
                />
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} ml-8 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Card background with gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative p-8 border border-white/10 rounded-lg backdrop-blur-sm hover:border-white/20 transition-all duration-300 bg-[#0a0a0a]/50">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-mono">{exp.year}</span>
                        <motion.div
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="w-1.5 h-1.5 bg-white/40 rounded-full"
                        />
                      </div>
                      
                      <p className="text-[11px] tracking-[0.15em] text-white/30 uppercase mb-3 group-hover:text-white/50 transition-colors">
                        {exp.company}
                      </p>
                      
                      <h3 className="text-lg md:text-xl font-serif font-bold tracking-tight mb-3 text-white group-hover:text-white/90 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <p className="text-sm leading-relaxed text-white/60 group-hover:text-white/70 transition-colors font-light">
                        {exp.description}
                      </p>
                      
                      {/* Hover accent line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 origin-left"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
