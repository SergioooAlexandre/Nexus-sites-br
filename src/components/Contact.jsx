import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, MapPin, Mail } from 'lucide-react';

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '5579998832814';
    const text = `Olá Nexus Sites BR!
Meus dados de contato:
- Nome: ${formData.name}
- E-mail: ${formData.email}
- WhatsApp: ${formData.phone}
- Mensagem: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contato" className="relative py-24 bg-black overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-4">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider font-display">
              Contato Rápido
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white mb-4">
            Inicie Seu Projeto Hoje
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Estamos prontos para transformar sua visão em um site de alta performance. Entre em contato por formulário ou redes sociais.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1 - Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="glass p-8 rounded-3xl space-y-8 flex-1 flex flex-col justify-center">
              <div>
                <h3 className="text-xl font-display font-extrabold text-white mb-2">Canais de Atendimento</h3>
                <p className="text-sm text-gray-400 font-light">Se preferir conversar diretamente, utilize um dos nossos canais oficiais.</p>
              </div>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5579998832814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-colors">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-semibold">WhatsApp</span>
                    <span className="text-white font-bold text-base group-hover:text-brand-blue transition-colors">
                      (79) 99883-2814
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/nexussitesbr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 group-hover:bg-brand-blue/20 transition-colors">
                    <Instagram className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-semibold">Instagram</span>
                    <span className="text-white font-bold text-base group-hover:text-brand-blue transition-colors">
                      @nexussitesbr
                    </span>
                  </div>
                </a>

                 {/* Email / Info */}
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-semibold">E-mail Comercial</span>
                    <a href="mailto:nexusssitesbr@gmail.com" className="text-white font-bold text-base hover:text-brand-blue transition-colors">
                      nexusssitesbr@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-semibold">Localização</span>
                    <span className="text-white font-bold text-base block">
                      Propriá - Sergipe e Aracaju - Sergipe
                    </span>
                    <span className="block text-xs text-brand-blue font-semibold mt-1">
                      Atendimento para todo o Brasil.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass p-8 sm:p-10 rounded-3xl space-y-6 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-display font-extrabold text-white mb-2">Envie uma Mensagem</h3>
                <p className="text-sm text-gray-400 font-light mb-6">Preencha o formulário e você será direcionado ao WhatsApp com sua proposta estruturada.</p>
              </div>

              <div className="space-y-4">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome ou da sua empresa"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-blue transition-all"
                  />
                </div>

                {/* E-mail & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase mb-2">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="exemplo@email.com"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-blue transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 uppercase mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(79) 99883-2814"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-blue transition-all"
                    />
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase mb-2">Detalhes do Projeto</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto: tipo de site (institucional, landing page, loja), prazo, referências, etc."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-blue transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-6 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-4 px-6 rounded-xl text-sm transition-all duration-200 flex items-center justify-center cursor-pointer shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/50"
              >
                Enviar Solicitação
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
