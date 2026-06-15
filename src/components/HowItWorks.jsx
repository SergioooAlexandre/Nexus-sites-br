import { motion } from 'framer-motion';
import { MessageSquare, Compass, CheckCircle2, Code, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: <MessageSquare className="w-6 h-6 text-brand-blue" />,
      title: 'Solicite um orçamento',
      description: 'Entre em contato pelo WhatsApp ou preencha o formulário para nos falar sobre a sua empresa e seus objetivos.',
    },
    {
      step: '02',
      icon: <Compass className="w-6 h-6 text-brand-blue" />,
      title: 'Receba seu projeto personalizado',
      description: 'Analisamos o seu mercado e desenhamos uma proposta ideal sob medida com os melhores recursos para o seu site.',
    },
    {
      step: '03',
      icon: <CheckCircle2 className="w-6 h-6 text-brand-blue" />,
      title: 'Aprove o layout',
      description: 'Apresentamos um protótipo visual moderno para você validar. Faremos ajustes até que fique exatamente como deseja.',
    },
    {
      step: '04',
      icon: <Code className="w-6 h-6 text-brand-blue" />,
      title: 'Desenvolvemos o site',
      description: 'Nossa equipe codifica o site utilizando as tecnologias mais rápidas, seguras e com SEO otimizado para o Google.',
    },
    {
      step: '05',
      icon: <Rocket className="w-6 h-6 text-brand-blue" />,
      title: 'Publicamos e entregamos',
      description: 'Colocamos seu site no ar com seu domínio configurado, SSL de segurança ativo e fazemos a entrega oficial pronto para vender.',
    },
  ];

  return (
    <section id="como-funciona" className="relative py-24 bg-black overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-4">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider font-display">
              Processo Transparente
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Criar um site com a Nexus é simples, rápido e transparente. Conheça as etapas do nosso desenvolvimento.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Progress Connecting Line for Desktop */}
          <div className="absolute top-24 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-blue/10 via-brand-blue/50 to-brand-blue/10 hidden lg:block pointer-events-none" />

          {/* Steps list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Step Card Visual */}
                <div className="relative mb-6 z-10">
                  {/* Number Badge */}
                  <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-neutral-900 border border-white/10 text-[10px] font-bold text-gray-400 flex items-center justify-center group-hover:border-brand-blue group-hover:text-brand-blue transition-colors">
                    {step.step}
                  </span>
                  
                  {/* Icon Container */}
                  <div className="w-20 h-20 rounded-2xl bg-neutral-950 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-brand-blue/40 group-hover:shadow-brand-blue/10 group-hover:bg-dark-card-hover transition-all duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Step Description */}
                <div className="space-y-2.5 max-w-[200px]">
                  <h3 className="text-base font-display font-bold text-white group-hover:text-brand-blue transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
