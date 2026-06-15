import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem Somos', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Planos', href: '#planos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  const whatsappNumber = '5579998832814';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um orçamento de site profissional com a Nexus Sites BR.`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-lg shadow-black/30' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/assets/nexus_logo.jpg"
              alt="Nexus Sites BR"
              className="h-10 w-10 rounded-full border border-brand-blue/20 group-hover:scale-105 transition-all duration-250 shadow-md shadow-brand-blue/10"
            />
            <span className="font-display font-extrabold text-xl tracking-tight text-white ml-3">
              NEXUS <span className="text-brand-blue">SITES BR</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-sm text-gray-300 hover:text-white hover:shadow-brand-blue/10 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue/90 shadow-md shadow-brand-blue/20 hover:shadow-brand-blue/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Fazer Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-b border-white/10 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-blue/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-semibold text-white bg-brand-blue hover:bg-brand-blue/90 shadow-md shadow-brand-blue/20"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Fazer Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
