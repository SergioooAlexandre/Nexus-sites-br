import { motion } from 'framer-motion';
import { Send, Layout, ShieldCheck, Smartphone, HelpCircle, HardDrive } from 'lucide-react';

export default function Differentials() {
  const items = [
    {
      icon: <Send className="w-6 h-6 text-brand-blue" />,
      title: 'Entrega Rápida',
      description: 'Respeitamos rigidamente os prazos combinados. Seu site no ar o mais rápido possível, sem enrolações.',
    },
    {
      icon: <Layout className="w-6 h-6 text-brand-blue" />,
      title: 'Design Profissional',
      description: 'Criamos interfaces modernas, elegantes e sob medida. Layouts que transmitem a qualidade real do seu negócio.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
      title: 'Site Seguro',
      description: 'Proteção garantida com criptografia SSL. Segurança de dados para a sua empresa e para os seus visitantes.',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-brand-blue" />,
      title: 'Responsivo',
      description: 'Navegação fluida em qualquer tela. Seu site funcionará perfeitamente em celulares, tablets e computadores.',
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-brand-blue" />,
      title: 'Suporte Dedicado',
      description: 'Suporte dedicado pelo WhatsApp em horário comercial. Atendimento rápido e humanizado para tirar dúvidas.',
    },
    {
      icon: <HardDrive className="w-6 h-6 text-brand-blue" />,
      title: 'Hospedagem Inclusa',
      description: 'Servidores de alto desempenho para manter seu site rápido e estável, com hospedagem inclusa conforme o plano.',
    },
  ];

  return (
    <section id="diferenciais" className="relative py-24 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-4">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider font-display">
              Por Que a Nexus?
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Unimos design estético inovador à engenharia web avançada para oferecer a melhor experiência para você e seus clientes.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-blue/20 hover:bg-neutral-950/60 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 mb-6 group-hover:scale-105 group-hover:bg-brand-blue/20 transition-all duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-display font-extrabold text-white mb-3 group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
