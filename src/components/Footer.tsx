import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#00FF7F] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#FF6B35] rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <Logo size="md" className="mr-3" />
              <h3 className="text-2xl font-black">
                <span className="text-white">PIAZZA</span>
                <span className="bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] bg-clip-text text-transparent ml-1">STORE</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              <FontAwesomeIcon icon="sparkles" className="mr-2 text-[#00FF7F]" />
              Streetwear premium inspirado na cultura urbana de Porto Alegre. Estilo, qualidade e autenticidade em cada peça.
            </p>
            <div className="flex gap-3">
              {[
                { icon: ['fab', 'instagram'], color: 'from-pink-500 to-purple-600', link: '#' },
                { icon: ['fab', 'facebook'], color: 'from-blue-600 to-blue-700', link: '#' },
                { icon: ['fab', 'twitter'], color: 'from-blue-400 to-blue-500', link: '#' },
                { icon: ['fab', 'tiktok'], color: 'from-black to-gray-800', link: '#' },
                { icon: ['fab', 'youtube'], color: 'from-red-500 to-red-600', link: '#' }
              ].map((social, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-gradient-to-br ${social.color} rounded-xl hover:shadow-lg transition-all`}
                >
                  <FontAwesomeIcon icon={social.icon as any} className="text-lg" />
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <FontAwesomeIcon icon="tag" className="mr-2 text-[#00FF7F]" />
              Categorias
            </h4>
            <ul className="space-y-3 text-gray-300">
              {[
                { name: 'Camisetas', icon: 'tshirt' },
                { name: 'Moletons', icon: 'shirt' },
                { name: 'Calças', icon: 'user' },
                { name: 'Acessórios', icon: 'gem' },
                { name: 'Lançamentos', icon: 'fire' }
              ].map((category, index) => (
                <li key={index}>
                  <motion.a 
                    href="#" 
                    className="hover:text-[#00FF7F] transition-all flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <FontAwesomeIcon icon={category.icon as any} className="group-hover:scale-110 transition-transform" />
                    {category.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <FontAwesomeIcon icon="headset" className="mr-2 text-[#00FF7F]" />
              Suporte
            </h4>
            <ul className="space-y-3 text-gray-300">
              {[
                { name: 'Atendimento', icon: 'comments' },
                { name: 'Trocas e Devoluções', icon: 'exchange-alt' },
                { name: 'Guia de Medidas', icon: 'ruler' },
                { name: 'FAQ', icon: 'question-circle' },
                { name: 'Contato', icon: 'envelope' }
              ].map((support, index) => (
                <li key={index}>
                  <motion.a 
                    href="#" 
                    className="hover:text-[#00FF7F] transition-all flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <FontAwesomeIcon icon={support.icon as any} className="group-hover:scale-110 transition-transform" />
                    {support.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <FontAwesomeIcon icon="map-marker-alt" className="mr-2 text-[#00FF7F]" />
              Contato
            </h4>
            <div className="space-y-4 text-gray-300">
              <motion.div 
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#00FF7F] to-[#00E5FF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon="map-marker-alt" className="text-black" />
                </div>
                <div>
                  <p className="font-semibold text-white">Localização</p>
                  <p className="text-sm">
                  Porto Alegre - Cristal, RS<br />
                  CEP: 90810-150
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon="phone" className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Telefone</p>
                  <p className="text-sm">(51) 99369-3721</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon="envelope" className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm">dudupiazza16@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Newsletter */}
        <motion.div 
          className="border-t border-gray-800 pt-12 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="max-w-lg mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4 flex items-center justify-center">
              <FontAwesomeIcon icon="bell" className="mr-2 text-[#00FF7F]" />
              FIQUE POR DENTRO
            </h4>
            <p className="text-gray-300 mb-6">
              Receba em primeira mão novidades, lançamentos e ofertas exclusivas
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF7F] focus:border-transparent transition-all"
              />
              <motion.button 
                className="bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] text-black px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-[#00FF7F]/25 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon="paper-plane" />
                ENVIAR
              </motion.button>
            </div>
          </div>
        </motion.div>
        
        {/* Bottom */}
        <motion.div 
          className="border-t border-gray-800 pt-8 mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <FontAwesomeIcon icon="copyright" />
              2024 Piazza Store. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#00FF7F] transition-colors flex items-center gap-1">
                <FontAwesomeIcon icon="shield-alt" />
                Privacidade
              </a>
              <a href="#" className="hover:text-[#00FF7F] transition-colors flex items-center gap-1">
                <FontAwesomeIcon icon="file-alt" />
                Termos
              </a>
              <a href="#" className="hover:text-[#00FF7F] transition-colors flex items-center gap-1">
                <FontAwesomeIcon icon="cookie-bite" />
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Decorative bottom line */}
        <motion.div
          className="mt-8 h-1 bg-gradient-to-r from-transparent via-[#00FF7F] to-transparent rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        />
        </div>
      </div>
    </footer>
  );
};

export default Footer;