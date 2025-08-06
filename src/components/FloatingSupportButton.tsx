import React, { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingSupportButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5551993693721?text=Olá! Tenho interesse nos produtos da Piazza Store.', '_blank');
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#00FF7F] p-4 rounded-full shadow-lg hover:bg-[#00FF7F]/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <MessageCircle size={24} className="text-black" />
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
              className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-xl z-50 overflow-hidden"
            >
              <div className="bg-[#00FF7F] p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-black">Precisa de Ajuda?</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-black/10 rounded-lg transition-colors"
                  >
                    <X size={20} className="text-black" />
                  </button>
                </div>
                <p className="text-sm text-black/80 mt-1">
                  Nossa equipe está pronta para te atender!
                </p>
              </div>
              
              <div className="p-4 space-y-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-3"
                >
                  <MessageCircle size={20} />
                  <div className="text-left">
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm opacity-90">(51) 99369-3721</div>
                  </div>
                </button>
                
                <button
                  onClick={() => window.location.href = 'tel:5551993693721'}
                  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-3"
                >
                  <Phone size={20} />
                  <div className="text-left">
                    <div className="font-medium">Telefone</div>
                    <div className="text-sm opacity-90">(51) 99369-3721</div>
                  </div>
                </button>
                
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500">
                    Atendimento: Seg-Sex 9h às 18h
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