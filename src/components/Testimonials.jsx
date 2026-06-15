import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Claudio Max',
      role: 'Fundador do SuperMax Delivery',
      initials: 'CM',
      comment: 'Atendimento excelente e site entregue rapidamente.',
      rating: 5,
    },
    {
      name: 'Dr. Sergio Elias',
      role: 'Advogado',
      initials: 'SE',
      comment: 'O site institucional superou todas as expectativas. Transmite a seriedade e credibilidade que a advocacia exige.',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="relative py-24 bg-black tech-grid">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-glow-radial-secondary pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-4">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider font-display">
              Provas Sociais
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            A satisfação e o sucesso dos nossos parceiros é o que nos move. Veja depoimentos de quem confia em nosso trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col justify-between hover:border-brand-blue/20 hover:bg-neutral-950/60 transition-all duration-300 relative group"
            >
              {/* Quote Icon Background decoration */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-blue/5 group-hover:text-brand-blue/10 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-brand-blue text-brand-blue" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-gray-300 text-sm leading-relaxed font-light mb-8 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 border-t border-white/5 pt-5">
                <div className="w-11 h-11 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-display font-extrabold text-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight font-display">{t.name}</h4>
                  <p className="text-xs text-gray-500 leading-tight">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
