import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '5579998832814';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento de site com a Nexus Sites BR.`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden tech-grid">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-glow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-blue/15 blur-3xl animate-glow-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-3xl animate-glow-3 pointer-events-none" />

      {/* Overlay for subtle dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-xs font-semibold text-brand-blue tracking-wider uppercase font-display">
            Agência Digital Premium
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white mb-6 leading-[1.1]"
        >
          Mais clientes. <br />
          Mais vendas. <span className="text-gradient-blue">Mais resultados.</span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed font-light"
        >
          Criamos sites profissionais que ajudam empresas a vender mais, transmitir credibilidade e crescer na internet.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-blue hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/50 hover:-translate-y-1 transition-all duration-250 cursor-pointer"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-md hover:-translate-y-1 transition-all duration-250 cursor-pointer"
          >
            Ver Portfólio
            <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
          </a>
        </motion.div>

        {/* Conversion Indicators below Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/5 pt-8 w-full max-w-4xl"
        >
          {[
            'Entrega rápida',
            'WhatsApp integrado',
            'Design profissional',
            'Site responsivo',
            'Suporte dedicado',
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
              <span className="text-brand-blue font-extrabold text-sm">✓</span>
              <span className="text-xs sm:text-sm font-medium tracking-wide">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
