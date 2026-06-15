import { motion } from 'framer-motion';
import { Award, Zap, Shield, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Zap className="w-6 h-6 text-brand-blue" />, value: '< 1s', label: 'Carregamento ultra rápido' },
    { icon: <Award className="w-6 h-6 text-brand-blue" />, value: '+100%', label: 'Conversão e novos leads' },
    { icon: <Shield className="w-6 h-6 text-brand-blue" />, value: 'SSL', label: 'Site seguro e protegido' },
    { icon: <Users className="w-6 h-6 text-brand-blue" />, value: 'Suporte', label: 'Atendimento humanizado' },
  ];

  return (
    <section id="sobre" className="relative py-24 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-brand-blue" />
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-blue font-display">
                Quem Somos
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
              Conectando sua marca ao mercado digital.
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              A <strong className="text-white font-semibold">Nexus Sites BR</strong> é especializada na criação de sites profissionais para empresas, academias, lojas, clínicas, restaurantes e prestadores de serviço.
            </p>
            
            <p className="text-gray-400 text-base leading-relaxed font-light">
              Nosso objetivo principal é capacitar negócios a atingirem o próximo nível, desenvolvendo soluções digitais que não só impressionam pela estética, mas também carregam rapidamente, oferecem excelente experiência de usuário e são otimizadas para rankear no Google.
            </p>

            {/* Target Markets Badges */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Sites Sob Medida Para:</p>
              <div className="flex flex-wrap gap-2">
                {['Empresas', 'Lojas Virtuais', 'Clínicas', 'Academias', 'Restaurantes', 'Prestadores de Serviço'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:border-brand-blue/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-6 flex flex-col space-y-4 hover:border-brand-blue/20 hover:scale-102 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-colors">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-400 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
