'use client';

import { motion } from 'motion/react';
import { 
  DiPython, DiJava, DiCpp, DiPostgresql, DiDocker, DiAws
} from 'react-icons/di';
import { 
  SiNextdotjs, SiFlutter, SiReact, SiTypescript, SiFastapi, SiSpringboot,
  SiSolidity, SiRust, SiFigma, SiJira, SiNeo4J, SiOpenai
} from 'react-icons/si';
import { Code2 } from 'lucide-react';

const skillCategories = [
  {
    id: '01',
    title: 'Languages',
    items: [
      { name: 'Python', icon: <DiPython className="w-6 h-6" /> },
      { name: 'Java', icon: <DiJava className="w-6 h-6" /> },
      { name: 'C++', icon: <DiCpp className="w-6 h-6" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" /> },
      { name: 'SQL', icon: <DiPostgresql className="w-6 h-6" /> },
      { name: 'GDScript', icon: <Code2 className="w-6 h-6" /> },
    ],
  },
  {
    id: '02',
    title: 'Full-Stack',
    items: [
      { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6" /> },
      { name: 'React', icon: <SiReact className="w-6 h-6" /> },
      { name: 'FastAPI', icon: <SiFastapi className="w-6 h-6" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="w-6 h-6" /> },
      { name: 'Node.js', icon: <SiNextdotjs className="w-6 h-6" /> },
    ],
  },
  {
    id: '03',
    title: 'Mobile Dev',
    items: [
      { name: 'Flutter', icon: <SiFlutter className="w-6 h-6" /> },
      { name: 'BLoC', icon: <SiFlutter className="w-6 h-6" /> },
    ],
  },
  {
    id: '04',
    title: 'AI & Data',
    items: [
      { name: 'RAG', icon: <SiOpenai className="w-6 h-6" /> },
      { name: 'Neo4j', icon: <SiNeo4J className="w-6 h-6" /> },
      { name: 'Vector Search', icon: <SiOpenai className="w-6 h-6" /> },
      { name: 'Gemini API', icon: <SiOpenai className="w-6 h-6" /> },
    ],
  },
  {
    id: '05',
    title: 'Web3 & Cloud',
    items: [
      { name: 'Solidity', icon: <SiSolidity className="w-6 h-6" /> },
      { name: 'Rust', icon: <SiRust className="w-6 h-6" /> },
      { name: 'AWS', icon: <DiAws className="w-6 h-6" /> },
      { name: 'Docker', icon: <DiDocker className="w-6 h-6" /> },
      { name: 'PostgreSQL', icon: <DiPostgresql className="w-6 h-6" /> },
    ],
  },
  {
    id: '06',
    title: 'Design & Tools',
    items: [
      { name: 'Figma', icon: <SiFigma className="w-6 h-6" /> },
      { name: 'Canva', icon: <Code2 className="w-6 h-6" /> },
      { name: 'Jira', icon: <SiJira className="w-6 h-6" /> },
      { name: 'Postman', icon: <Code2 className="w-6 h-6" /> },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 border-t border-white/5 relative bg-[#080808] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tighter uppercase whitespace-nowrap">Skills & Tech</h2>
          </div>
          <p className="max-w-md text-sm text-white/40 font-light leading-relaxed mt-4 md:mt-8">
            I architect intelligent systems, from AI-powered search engines to Web3 applications and high-performance mobile apps.
          </p>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center gap-6 group"
            >
              {/* Category label - sticky */}
              <div className="flex-shrink-0 flex items-center gap-2 min-w-max">
                <span className="text-white/30 text-[10px] tracking-[0.2em]">{category.id} {"//"}</span>
                <h3 className="text-base md:text-lg font-serif tracking-tight uppercase text-white whitespace-nowrap">{category.title}</h3>
              </div>

              {/* Animated carousel container */}
              <div className="relative overflow-hidden flex-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm py-3 px-4">
                {/* Left gradient fade */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none rounded-l-full"></div>
                
                {/* Right gradient fade */}
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none rounded-r-full"></div>

                {/* Carousel wrapper */}
                <div className="overflow-hidden">
                  <motion.div
                    className="flex gap-3 whitespace-nowrap"
                    animate={{ x: [0, -(category.items.length * 56 + (category.items.length - 1) * 12)] }}
                    transition={{
                      duration: 20 + category.items.length * 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {/* Original items */}
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={`${category.id}-${itemIndex}`}
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0 group/item relative w-14 h-14 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 transition-colors duration-300 cursor-pointer flex items-center justify-center"
                        title={item.name}
                      >
                        <div className="text-white/60 group-hover/item:text-white transition-colors duration-300 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </motion.div>
                    ))}

                    {/* Duplicated items for seamless loop */}
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={`${category.id}-dup-${itemIndex}`}
                        whileHover={{ scale: 1.2 }}
                        className="flex-shrink-0 group/item relative w-14 h-14 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 transition-colors duration-300 cursor-pointer flex items-center justify-center"
                        title={item.name}
                      >
                        <div className="text-white/60 group-hover/item:text-white transition-colors duration-300 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


