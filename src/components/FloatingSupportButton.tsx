import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FloatingSupportButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5551993693721?text=Olá! Tenho interesse nos produtos da Piazza Store.', '_blank');
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] p-4 rounded-full shadow-2xl hover:shadow-[#00FF7F]/50 transition-all"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{
          background: 'linear-gradient(45deg, #00FF7F, #00E5FF)',
        }}
      >
        <FontAwesomeIcon icon="headset" className="text-black text-xl" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] animate-ping opacity-30" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-24 right-6 w-80 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200/50"
            >
              <div className="bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon="headset" className="text-black text-lg" />
                    <h3 className="font-black text-black">Precisa de Ajuda?</h3>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-black/10 rounded-lg transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon="times" className="text-black" />
                  </motion.button>
                </div>
                <p className="text-sm text-black/80 mt-2 flex items-center gap-2">
                  <FontAwesomeIcon icon="sparkles" />
                  Nossa equipe está pronta para te atender!
                </p>
              </div>
              
              <div className="p-6 space-y-4">
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all flex items-center gap-3 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} className="text-xl" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">WhatsApp</div>
                    <div className="text-sm opacity-90">(51) 99369-3721</div>
                  </div>
                  <FontAwesomeIcon icon="arrow-right" className="ml-auto group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  onClick={() => window.location.href = 'tel:5551993693721'}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-3 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon="phone" className="text-xl" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Telefone</div>
                    <div className="text-sm opacity-90">(51) 99369-3721</div>
                  </div>
                  <FontAwesomeIcon icon="arrow-right" className="ml-auto group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-3 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon="envelope" className="text-xl" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Email</div>
                    <div className="text-sm opacity-90">dudupiazza16@gmail.com</div>
                  </div>
                  <FontAwesomeIcon icon="arrow-right" className="ml-auto group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon="clock" className="text-[#00FF7F]" />
                    Atendimento: Seg-Sex 9h às 18h • Sáb 9h às 14h
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingSupportButton;