import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$99',
    description: 'Perfect for individuals and small setups.',
    features: ['1 Landing Page', 'Basic Animations', 'Source Files', '1 Week Support'],
  },
  {
    name: 'Pro',
    price: '$299',
    description: 'Ideal for growing businesses and agencies.',
    features: ['Up to 5 Pages', 'Advanced Animations', 'Framer CMS Setup', '1 Month Support', 'Custom Domain'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$899',
    description: 'For large scale projects and custom needs.',
    features: ['Unlimited Pages', 'Complex Integrations', 'Custom 3D Assets', 'Priority Support', 'Strategy Call'],
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 border-t border-white/5 relative bg-[#080808]">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20 text-center max-w-2xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-white/20"></div>
            <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Engagement</span>
            <div className="w-8 h-[1px] bg-white/20"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tighter mb-6">Pricing Plans</h2>
          <p className="text-white/40 font-light text-sm max-w-md mx-auto">Clear and straightforward pricing tailored to different stages of your digital journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-10 flex flex-col border ${plan.popular ? 'bg-[#151515] border-white/20 scale-100 md:scale-105 relative z-10' : 'bg-[#0a0a0a] border-white/5'}`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[9px] font-bold px-4 py-1.5 uppercase tracking-[0.3em]">
                  Most Popular
                </span>
              )}
              <h3 className="text-xs uppercase tracking-widest font-bold mb-2 text-[#F4F4F4]">{plan.name}</h3>
              <p className={`text-[10px] uppercase tracking-widest mb-8 ${plan.popular ? 'text-white/40' : 'text-white/30'}`}>{plan.description}</p>
              <div className="mb-10 pb-10 border-b border-white/5">
                <span className="text-5xl font-serif tracking-tighter text-[#F4F4F4]">{plan.price}</span>
                <span className={`text-[10px] ml-2 tracking-widest ${plan.popular ? 'text-white/40' : 'text-white/30'}`}>/ PROJECT</span>
              </div>
              <ul className="mb-12 flex-1 flex flex-col gap-4 text-sm font-light">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-4">
                    <div className={`w-1 h-1 rounded-full ${plan.popular ? 'bg-white/60' : 'bg-white/30'}`}></div>
                    <span className="text-white/60">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 text-[10px] tracking-[0.2em] font-bold uppercase transition-colors border ${plan.popular ? 'bg-white text-black border-white hover:bg-white/90' : 'bg-transparent text-[#F4F4F4] border-white/20 hover:bg-white hover:text-black'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
