'use client';

import { motion } from 'motion/react';
import {
  DiPython, DiJava, DiPostgresql, DiDocker, DiNodejs,  DiDjango
} from 'react-icons/di';
import {
  SiNextdotjs, SiFlutter, SiReact, SiTypescript, SiFastapi, SiSpringboot,
  SiSolidity, SiRust, SiFigma, SiJira, SiNeo4J, SiGodotengine,
  SiCanva, SiGooglegemini, SiLangchain, SiAndroidstudio, SiGo,
  SiGooglecloud, SiEthers, SiWagmi, SiCoinbase, SiTensorflow,
  SiScikitlearn, SiOpencv, SiFirebase, SiGit, SiVercel
} from 'react-icons/si';
import { BiCube } from 'react-icons/bi';
import { GrGraphQl } from 'react-icons/gr';
import { PiGraph } from 'react-icons/pi';
import { FaAws } from 'react-icons/fa';

const skillCategories = [
  {
    id: '01',
    title: 'Languages',
    items: [
      { name: 'Python', icon: <DiPython className="w-6 h-6" /> },
      { name: 'Java', icon: <DiJava className="w-6 h-6" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" /> },
      { name: 'Go', icon: <SiGo className="w-6 h-6" /> },
      { name: 'GDScript', icon: <SiGodotengine className="w-6 h-6" /> },
      { name: 'Rust', icon: <SiRust className="w-6 h-6" /> },
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
      { name: 'Node.js', icon: <DiNodejs className="w-6 h-6" /> },
      { name: 'Django', icon: <DiDjango className="w-6 h-6" /> },
    ],
  },
  {
    id: '03',
    title: 'Mobile Dev',
    items: [
      { name: 'Flutter', icon: <SiFlutter className="w-6 h-6" /> },
      { name: 'BLoC', icon: <BiCube className="w-6 h-6" /> },
      { name: 'React Native', icon: <SiReact className="w-6 h-6" /> },
      { name: 'Android Studio', icon: <SiAndroidstudio className="w-6 h-6" /> },
    ],
  },
  {
    id: '04',
    title: 'AI & Data',
    items: [
      { name: 'SQL', icon: <DiPostgresql className="w-6 h-6" /> },
      { name: 'GraphQL', icon: <GrGraphQl className="w-6 h-6" /> },
      { name: 'RAG', icon: <PiGraph className="w-6 h-6" /> },
      { name: 'TensorFlow', icon: <SiTensorflow className="w-6 h-6" /> },
      { name: 'Scikit-Learn', icon: <SiScikitlearn className="w-6 h-6" /> },
      { name: 'OpenCV', icon: <SiOpencv className="w-6 h-6" /> },
      { name: 'Langchain', icon: <SiLangchain className="w-6 h-6" /> },
      { name: 'Neo4j', icon: <SiNeo4J className="w-6 h-6" /> },
      { name: 'Gemini API', icon: <SiGooglegemini className="w-6 h-6" /> },
    ],
  },
  {
    id: '05',
    title: 'Web3 & Cloud',
    items: [
      { name: 'Solidity', icon: <SiSolidity className="w-6 h-6" /> },
      { name: 'Ethers', icon: <SiEthers className="w-6 h-6" /> },
      { name: 'Wagmi', icon: <SiWagmi className="w-6 h-6" /> },
      { name: 'Coinbase', icon: <SiCoinbase className="w-6 h-6" /> },
      { name: 'AWS', icon: <FaAws className="w-6 h-6" /> },
      { name: 'Docker', icon: <DiDocker className="w-6 h-6" /> },
      { name: 'Google Cloud', icon: <SiGooglecloud className="w-6 h-6" /> },
    ],
  },
  {
    id: '06',
    title: 'Design & Tools',
    items: [
      { name: 'Figma', icon: <SiFigma className="w-6 h-6" /> },
      { name: 'Canva', icon: <SiCanva className="w-6 h-6" /> },
      { name: 'Jira', icon: <SiJira className="w-6 h-6" /> },
      { name: 'Git', icon: <SiGit className="w-6 h-6" /> },
      { name: 'Firebase', icon: <SiFirebase className="w-6 h-6" /> },
      { name: 'Vercel', icon: <SiVercel className="w-6 h-6" /> },
    ],
  },
];

export default function Skills() {
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

        <div className="divide-y divide-white/5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[250px_1fr] items-center gap-8 py-8"
            >
              <div className="flex items-center gap-3 group">
                <span className="text-white/30 text-[10px] tracking-[0.2em] font-mono group-hover:text-white/60 transition-colors uppercase">{category.id} {"//"}</span>
                <h3 className="text-3xl md:text-4xl font-serif tracking-tight uppercase text-white/90 group-hover:text-white transition-colors">{category.title}</h3>
              </div>

              {/* Animated carousel container */}
              <div className="relative overflow-hidden">
                {/* Left gradient fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none"></div>

                {/* Right gradient fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none"></div>

                {/* Carousel wrapper */}
                <div className="overflow-hidden py-2">
                  <motion.div
                    className="flex gap-4 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      duration: 15 + (category.items.length * 2),
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {/* Triple the items to ensure small sets (like 3 items) cover enough width for the -50% loop */}
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex gap-4">
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={`${category.id}-${i}-${itemIndex}`}
                            className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-lg border border-white/5 bg-white/[0.03] hover:bg-white/10 transition-all duration-300 cursor-default group/item"
                          >
                            <div className="text-white/40 group-hover/item:text-white transition-colors duration-300">
                              {item.icon}
                            </div>
                            <span className="text-sm font-medium text-white/60 group-hover/item:text-white transition-colors duration-300 uppercase tracking-wider">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
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


