import { motion } from 'motion/react';

const reviews = [
  {
    id: 1,
    quote: "Working with Palmer brought a unique edge to our platform. They understood the vision immediately and executed with flawless precision.",
    author: "Elena Rodriguez",
    role: "CEO at Vento",
  },
  {
    id: 2,
    quote: "Their brutalist approach and sharp attention to detail completely transformed our brand identity into something iconic.",
    author: "Marcus Chen",
    role: "Founder, Studio X",
  },
  {
    id: 3,
    quote: "A rare mix of creative intuition and technical excellence. The resulting experience feels incredibly fluid and fast.",
    author: "Sarah Jenkins",
    role: "Product Lead, Nexus",
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 border-t border-white/5 relative bg-[#080808]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-white/20"></div>
          <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Feedback</span>
          <div className="w-8 h-[1px] bg-white/20"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tighter mb-20 text-center">Testimonials &mdash; <span className="italic text-white/60">Reviews</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#111] p-10 border border-white/5 flex flex-col justify-between h-full group hover:border-white/10 transition-colors"
            >
              <div className="mb-8 relative">
                <svg className="w-8 h-8 text-white/5 mb-6 group-hover:text-white/10 transition-colors" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg>
                <p className="text-sm font-light leading-relaxed text-white/60">
                  "{review.quote}"
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex flex-col gap-1">
                <p className="font-bold text-[#F4F4F4] text-xs uppercase tracking-widest">{review.author}</p>
                <p className="text-white/30 text-[10px] tracking-[0.2em]">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
