import { motion } from 'framer-motion';
import { Globe, FileText, ShoppingCart, BookOpen, MessageSquare, Search } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-brand-blue" />,
      title: 'Sites Institucionais',
      description: 'Estruturas profissionais e completas para apresentar sua empresa, consolidar sua marca e passar total credibilidade aos clientes.',
    },
    {
      icon: <FileText className="w-8 h-8 text-brand-blue" />,
      title: 'Landing Pages',
      description: 'Páginas de alta conversão focadas em um único produto ou serviço, projetadas estrategicamente para transformar visitantes em contatos comerciais.',
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-brand-blue" />,
      title: 'Lojas Virtuais',
      description: 'E-commerce robusto e seguro para catalogar seus produtos, receber pagamentos online e automatizar seu processo de vendas.',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-brand-blue" />,
      title: 'Catálogos Online',
      description: 'Exibição digital elegante dos seus produtos ou serviços, ideal para facilitar pedidos no WhatsApp sem a necessidade de pagamento complexo.',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-brand-blue" />,
      title: 'Integração com WhatsApp',
      description: 'Conectamos seu site diretamente ao seu canal de vendas no WhatsApp, tornando o contato instantâneo e aumentando suas taxas de fechamento.',
    },
    {
      icon: <Search className="w-8 h-8 text-brand-blue" />,
      title: 'SEO para Google',
      description: 'Otimização avançada de código e conteúdo para posicionar seu site nos primeiros resultados das buscas do Google de forma orgânica.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="servicos" className="relative py-24 bg-black tech-grid">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-glow-radial-secondary pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-4">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider font-display">
              Soluções Inteligentes
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mb-4">
            Serviços para alavancar seu negócio
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Desenvolvemos soluções digitais completas e de altíssimo nível técnico para destacar sua empresa e atrair mais leads qualificados.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass rounded-2xl p-8 hover:bg-dark-card-hover hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-all duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-blue transition-colors duration-200">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Decorative Glow Dot */}
              <div className="mt-8 flex items-center text-xs font-semibold text-brand-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Saiba mais
                <span className="ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
