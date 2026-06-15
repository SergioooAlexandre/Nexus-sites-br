import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'SuperMax Delivery',
      subtitle: 'Supermercado & Delivery',
      description: 'Sistema moderno de supermercado online com catálogo de produtos, carrinho de compras, integração com WhatsApp e layout responsivo.',
      image: '/assets/supermax_delivery_v2.png',
      url: 'https://supermax-psi.vercel.app/',
      tags: ['React', 'Tailwind CSS', 'Carrinho Ativo', 'WhatsApp'],
    },
    {
      title: 'Sergio Elias Advocacia',
      subtitle: 'Escritório de Advocacia',
      description: 'Site institucional para advocacia com foco em credibilidade, atendimento via WhatsApp e presença digital profissional.',
      image: '/assets/dr_sergio_elias_v2.png',
      url: 'https://dr-sergio-elias-advocacia.vercel.app/',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp', 'Credibilidade'],
    },
    {
      title: 'Calculadora de Juros Compostos',
      subtitle: 'Ferramenta Financeira',
      description: 'Ferramenta financeira para simulações de investimentos com cálculo automático, histórico de simulações e interface moderna.',
      image: '/assets/calculadora_juros_v2.png',
      url: 'https://calculadorajuroscompontossergio.vercel.app/',
      tags: ['React', 'Tailwind CSS', 'Chart.js', 'Simulador', 'Interativo'],
    },
  ];

  return (
    <section id="portfolio" className="relative py-24 bg-black overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-4">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider font-display">
              Projetos de Sucesso
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mb-4">
            Portfólio em Destaque
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Desenvolvemos sites focados na experiência do usuário e otimizados para converter visitas em vendas e contatos.
          </p>
        </div>

        {/* Portfolio List */}
        <div className="flex flex-col space-y-28">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Project Image in Browser Frame */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex-shrink-0"
              >
                {/* Simulated Browser Frame with Neon Shadow Glow on Hover */}
                <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/60 shadow-2xl shadow-brand-blue/5 hover:border-brand-blue/40 hover:shadow-[0_0_35px_rgba(10,132,255,0.25)] transition-all duration-300 group">
                  {/* Browser Topbar */}
                  <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center space-x-4">
                    {/* Traffic Lights */}
                    <div className="flex space-x-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    {/* URL Bar */}
                    <div className="flex-1 max-w-xs mx-auto bg-black/40 border border-white/5 rounded-md py-1 px-3 text-center text-xs text-gray-500 font-mono tracking-tight select-none truncate">
                      {project.url.replace('https://', '')}
                    </div>
                  </div>
                  
                  {/* Preview Image with fixed aspect-ratio */}
                  <div className="relative overflow-hidden aspect-video bg-neutral-900 flex items-center justify-center">
                    {/* Real Project Badge */}
                    <div className="absolute top-4 left-4 z-20 bg-brand-blue/90 border border-white/20 text-white text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md shadow-lg shadow-brand-blue/20">
                      Projeto Real
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                    >
                      <div className="p-3 rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 flex flex-col space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-brand-blue tracking-wider uppercase font-display">
                    {project.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-display font-black text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-base leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>


              </motion.div>
            </div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-24 pt-8 border-t border-white/5"
        >
          <p className="text-sm text-gray-500 font-light italic">
            "Projetos reais desenvolvidos e publicados para demonstrar qualidade, velocidade e presença digital profissional."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
