import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  const whatsappNumber = '5579998832814';
  
  const plans = [
    {
      name: 'Plano Básico',
      price: '250',
      hosting: '45',
      description: 'Ideal para profissionais autônomos, pequenos negócios locais e início de presença digital.',
      features: [
        'Site institucional moderno',
        'Integração com WhatsApp',
        'Design 100% responsivo',
        'Até 3 páginas estruturadas',
        'Certificado de Segurança SSL',
        'Links para redes sociais',
      ],
      whatsappMsg: 'Olá, tenho interesse no Plano Básico da Nexus Sites BR.',
      popular: false,
    },
    {
      name: 'Plano Profissional',
      price: '550',
      hosting: '85',
      description: 'Perfeito para empresas em crescimento, clínicas, academias e prestadores de serviço.',
      features: [
        'Site completo e personalizado',
        'Galeria de fotos/serviços',
        'Formulário de contato premium',
        'Integração com Instagram feed',
        'Até 8 páginas estruturadas',
        'Certificado de Segurança SSL',
        'Otimização de SEO básica',
      ],
      whatsappMsg: 'Olá, tenho interesse no Plano Profissional da Nexus Sites BR.',
      popular: true,
    },
    {
      name: 'Plano Premium',
      price: '1.000',
      hosting: '145',
      description: 'Indicado para marcas estabelecidas que precisam de catálogo digital, performance extrema e SEO de ponta.',
      features: [
        'Site avançado corporativo',
        'Catálogo de produtos completo',
        'Área administrativa simplificada',
        'SEO avançado para buscas',
        'Performance ultra otimizada',
        'Páginas ilimitadas de conteúdo',
        'Certificado de Segurança SSL',
      ],
      whatsappMsg: 'Olá, tenho interesse no Plano Premium da Nexus Sites BR.',
      popular: false,
    },
  ];

  return (
    <section id="planos" className="relative py-24 bg-black tech-grid">
      {/* Background glow behind pricing cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-radial pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-4">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider font-display">
              Investimento Inteligente
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mb-4">
            Nossos Planos e Preços
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Desenvolvimento profissional sob medida com valores justos, transparentes e suporte dedicado.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const encodedMsg = encodeURIComponent(plan.whatsappMsg);
            const waLink = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-neutral-950 border-2 border-brand-blue shadow-2xl shadow-brand-blue/20 -translate-y-2 lg:-translate-y-4 z-10'
                    : 'bg-neutral-950/60 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase text-white shadow-md shadow-brand-blue/30">
                    Mais Popular
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className="text-xl font-display font-extrabold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 min-h-[36px]">{plan.description}</p>

                  {/* Plan Price */}
                  <div className="mb-6 flex flex-col">
                    <span className="text-gray-500 text-xs uppercase font-semibold">Valor de Criação</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-white text-lg font-bold">R$</span>
                      <span className="text-white text-5xl font-display font-black tracking-tight">{plan.price}</span>
                      <span className="text-white text-lg font-bold">,00</span>
                    </div>
                    
                    {/* Hosting Details */}
                    <div className="mt-3 flex items-center space-x-1.5 px-3 py-1 rounded bg-white/5 border border-white/5 w-fit">
                      <Info className="w-3.5 h-3.5 text-brand-blue" />
                      <span className="text-xs text-gray-300">
                        Hospedagem + Suporte: <strong className="text-brand-blue font-semibold">R$ {plan.hosting}/mês</strong>
                      </span>
                    </div>
                  </div>

                  <hr className="border-white/10 mb-6" />

                  {/* Features list */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-gray-300">
                        <Check className="w-4 h-4 text-brand-blue mr-2.5 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 text-center flex items-center justify-center cursor-pointer ${
                    plan.popular
                      ? 'bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg shadow-brand-blue/35 hover:-translate-y-0.5'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 hover:-translate-y-0.5'
                  }`}
                >
                  Quero este Plano
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
