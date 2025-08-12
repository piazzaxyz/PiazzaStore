import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00FF7F] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF6B35] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-black mb-6 text-white">
            <FontAwesomeIcon icon="rocket" className="mr-4 text-[#00FF7F]" />
            FIQUE POR DENTRO
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            <FontAwesomeIcon icon="magic" className="mr-2 text-[#FF6B35]" />
            Seja o primeiro a saber sobre lançamentos exclusivos, ofertas especiais e as últimas tendências streetwear
            <FontAwesomeIcon icon="magic" className="ml-2 text-[#00FF7F]" />
          </p>
        </motion.div>
        
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-8"
        >
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF7F] focus:border-transparent transition-all"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] text-black font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-[#00FF7F]/25 transition-all flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon="paper-plane" />
            INSCREVER
          </motion.button>
        </motion.form>
        
        {isSubscribed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/20 border border-green-500/30 text-green-400 px-6 py-3 rounded-lg max-w-md mx-auto mb-8"
          >
            <FontAwesomeIcon icon="check" className="mr-2" />
            Obrigado! Você foi inscrito com sucesso!
          </motion.div>
        )}
        
        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            {
              icon: 'fire',
              title: 'Lançamentos Exclusivos',
              description: 'Acesso antecipado às novidades'
            },
            {
              icon: 'tag',
              title: 'Ofertas Especiais',
              description: 'Descontos exclusivos para inscritos'
            },
            {
              icon: 'crown',
              title: 'Conteúdo VIP',
              description: 'Dicas de estilo e tendências'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#00FF7F] to-[#00E5FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={benefit.icon as any} className="text-2xl text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-gray-500 mt-8 flex items-center justify-center gap-2"
        >
          <FontAwesomeIcon icon="shield-alt" className="text-[#00FF7F]" />
          Não enviamos spam. Cancele quando quiser.
        </motion.p>
      </div>
    </section>
  );
};

export default Newsletter;