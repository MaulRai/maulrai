import { motion } from 'motion/react';
import { 
  DiPython
} from 'react-icons/di';
import { 
  SiNextdotjs, SiFlutter, SiNeo4J, SiFigma, SiSolidity
} from 'react-icons/si';

const skills = [
  { id: '01', title: 'Languages', description: 'Python, Java, C++, TypeScript, SQL, GDScript', icon: <DiPython className="w-8 h-8" /> },
  { id: '02', title: 'Full-Stack', description: 'Next.js, React, FastAPI, Spring Boot, Node.js', icon: <SiNextdotjs className="w-8 h-8" /> },
  { id: '03', title: 'Mobile Dev', description: 'Cross-platform development using Flutter & BLoC', icon: <SiFlutter className="w-8 h-8" /> },
  { id: '04', title: 'AI & Data', description: 'RAG, Neo4j, OpenSearch, Vector Search, Gemini API', icon: <SiNeo4J className="w-8 h-8" /> },
  { id: '05', title: 'Web3 & Cloud', description: 'Solidity, Rust, AWS Rekognition, Docker, PostgreSQL', icon: <SiSolidity className="w-8 h-8" /> },
  { id: '06', title: 'Design & Tools', description: 'UI/UX Design with Figma, Canva, Jira, Postman', icon: <SiFigma className="w-8 h-8" /> },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 border-t border-white/5 relative bg-[#080808]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/20"></div>
              <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter uppercase whitespace-nowrap">Skills & Tech<br/><span className="text-white/30 italic text-2xl md:text-4xl">(Core Stack)</span></h2>
          </div>
          <p className="max-w-md text-sm text-white/40 font-light leading-relaxed mt-4 md:mt-20">
            I architect intelligent systems, from AI-powered search engines to Web3 applications and high-performance mobile apps.
          </p>
        </div>

        <div className="border-t border-white/5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group border-b border-white/5 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer hover:bg-white/5 hover:pl-8 transition-all duration-500"
            >
              <div className="flex items-center gap-8">
                <span className="text-white/30 text-[10px] tracking-[0.2em]">{skill.id} {"//"}</span>
                <div className="flex items-center gap-4">
                  <div className="text-white/20 group-hover:text-white transition-colors duration-500">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-serif tracking-tighter group-hover:text-white/80 transition-colors uppercase">{skill.title}</h3>
                </div>
              </div>
              <div className="flex items-center justify-between w-full md:w-auto gap-12">
                <p className="text-white/40 max-w-xs text-sm font-light leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


