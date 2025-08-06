import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">PIAZZA</span>
              <span className="text-[#00FF7F] ml-1">STORE</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Streetwear premium inspirado na cultura urbana de Porto Alegre
            </p>
            <div className="flex gap-4">
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram size={20} />
              </button>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook size={20} />
              </button>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter size={20} />
              </button>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#00FF7F] transition-colors">Camisetas</a></li>
              <li><a href="#" className="hover:text-[#00FF7F] transition-colors">Moletons</a></li>
              <li><a href="#" className="hover:text-[#00FF7F] transition-colors">Calças</a></li>
              <li><a href="#" className="hover:text-[#00FF7F] transition-colors">Acessórios</a></li>
              <li><a href="#" className="hover:text-[#00FF7F] transition-colors">Lançamentos</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#00FF7F] transition-colors">Atendimento</a></li>
              <li><a href="#" className="hover:text-[#00FF7F] transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-[#00FF7F] transition-colors">Guia de Medidas</a></li>
              <li><a href="#" className="hover:text-[#00FF7F] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#00FF7F] transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#00FF7F] mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  Porto Alegre - Cristal, RS<br />
                  CEP: 90810-150
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#00FF7F]" />
                <p className="text-sm">(51) 99369-3721</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#00FF7F]" />
                <p className="text-sm">contato@piazzastore.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">FIQUE POR DENTRO</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Receba em primeira mão novidades, lançamentos e ofertas exclusivas
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF7F] focus:border-transparent"
              />
              <button className="bg-[#00FF7F] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#00FF7F]/90 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Piazza Store. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;