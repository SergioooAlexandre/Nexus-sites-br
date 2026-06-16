import { Phone } from 'lucide-react';

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
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


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Planos', href: '#planos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src="/assets/nexus_logo.jpg"
                alt="Nexus Sites BR Logo"
                className="h-10 w-10 rounded-full border border-brand-blue/20 shadow-md shadow-brand-blue/10"
              />
              <span className="font-display font-extrabold text-lg tracking-tight text-white ml-3">
                NEXUS <span className="text-brand-blue">SITES BR</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-sm">
              "Sites que conectam negócios a resultados."
            </p>
            <p className="text-xs text-gray-600 font-light max-w-sm">
              Criamos sites profissionais modernos, rápidos e otimizados para atrair mais clientes e gerar resultados reais para a sua empresa.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">Navegação</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social connections */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">Redes & Contato</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://wa.me/5579998832814"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-sm text-gray-500 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>(79) 99883-2814</span>
              </a>
              
              <a
                href="https://instagram.com/nexussitesbr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-sm text-gray-500 hover:text-white transition-colors group"
              >
                <Instagram className="w-4 h-4 text-brand-blue" />
                <span>@nexussitesbr</span>
              </a>

              <a
                href="mailto:nexusssitesbr@gmail.com"
                className="flex items-center space-x-2.5 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <span className="text-brand-blue">✉</span>
                <span>nexusssitesbr@gmail.com</span>
              </a>

              <div className="text-xs text-gray-500 pt-2 border-t border-white/5 space-y-1">
                <p><span className="font-semibold text-white">Localização:</span></p>
                <p>Propriá - Sergipe e</p>
                <p>Aracaju - Sergipe</p>
                <p className="text-brand-blue font-semibold">Atendimento para todo o Brasil.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-4 text-xs text-gray-600 font-light text-center">
          <p>© {currentYear} Desenvolvido por Nexus Sites BR. Todos os direitos reservados.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
