import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What exactly are your core deliverables?",
    answer: "We deliver full-scale digital experiences including UX/UI design, interactive prototypes, and production-ready frontend code. Every deliverable is thoroughly documented."
  },
  {
    question: "How do you structure the design process?",
    answer: "Our process is highly iterative. We start with discovery and wireframes, move into high-fidelity design, and refine continuously based on milestone feedback until launch."
  },
  {
    question: "Do you offer development services as well?",
    answer: "Yes, we specialize in high-performance frontend development using React, Framer Motion, and Tailwind CSS to ensure the design vision is perfectly executed in code."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Most projects range from 4 to 8 weeks depending on scope and complexity. We always define a clear timeline during the discovery phase."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 border-t border-white/5 relative bg-[#080808]">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-white/20"></div>
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Information</span>
            <div className="w-8 h-[1px] bg-white/20"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tighter mb-6">FAQ.</h2>
          <p className="text-white/40 font-light text-sm max-w-md mx-auto">
            Clarifying Deliverables Before They Begin with Real Process and Honest Answers.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-[#0a0a0a] border ${isOpen ? 'border-white/20' : 'border-white/5'} overflow-hidden transition-all duration-300`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className="font-serif text-lg tracking-wide">{faq.question}</span>
                  <span className={`w-10 h-10 flex items-center justify-center border transition-colors ${isOpen ? 'border-white/30 text-white' : 'border-white/10 text-white/40'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-white/50 font-light text-sm leading-relaxed border-t border-white/5 pt-6 mt-2 mx-6 md:mx-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
