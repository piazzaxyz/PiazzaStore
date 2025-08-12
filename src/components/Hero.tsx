import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useApp } from '../context/AppContext';

const Hero: React.FC = () => {
  const { dispatch } = useApp();

  const handleExploreCollection = () => {
    // Scroll to products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Also set category to show all products
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: 'all' });
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <div className="absolute inset-0">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <img
          src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Streetwear Collection"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#00FF7F]/20 via-transparent to-[#FF6B35]/20"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(0,255,127,0.2) 0%, transparent 50%, rgba(255,107,53,0.2) 100%)',
              'linear-gradient(225deg, rgba(255,107,53,0.2) 0%, transparent 50%, rgba(0,255,127,0.2) 100%)',
              'linear-gradient(45deg, rgba(0,255,127,0.2) 0%, transparent 50%, rgba(255,107,53,0.2) 100%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Floating icons */}
          <div className="absolute -top-20 -left-20 opacity-20">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              <FontAwesomeIcon icon="crown" className="text-[#00FF7F] text-6xl" />
            </motion.div>
          </div>
          <div className="absolute -top-10 -right-20 opacity-20">
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <FontAwesomeIcon icon="fire" className="text-[#FF6B35] text-4xl" />
            </motion.div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-tight"
          >
            <motion.span 
              className="block text-white drop-shadow-lg"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(0,255,127,0.5)',
                  '0 0 20px rgba(255,255,255,0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              NOVA
            </motion.span>
            <br />
            <motion.span 
              className="block bg-gradient-to-r from-[#00FF7F] via-[#00E5FF] to-[#00FF7F] bg-clip-text text-transparent drop-shadow-lg"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              COLEÇÃO
            </motion.span>
            <br />
            <motion.span 
              className="block bg-gradient-to-r from-[#FF6B35] via-[#FF8A65] to-[#FF6B35] bg-clip-text text-transparent drop-shadow-lg"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              STREETWEAR
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            <FontAwesomeIcon icon="sparkles" className="mr-2 text-[#00FF7F]" />
            Descubra as últimas tendências da moda urbana com peças exclusivas inspiradas na cultura street de Porto Alegre
            <FontAwesomeIcon icon="sparkles" className="ml-2 text-[#FF6B35]" />
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(0,255,127,0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExploreCollection}
              className="bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] text-black font-black px-10 py-5 rounded-full hover:shadow-2xl transition-all flex items-center gap-3 text-lg group"
            >
              <FontAwesomeIcon icon="rocket" className="group-hover:animate-bounce" />
              EXPLORE A COLEÇÃO
              <FontAwesomeIcon icon="arrow-right" className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-all flex items-center gap-3 text-lg backdrop-blur-sm"
            >
              <FontAwesomeIcon icon="play" />
              VER VÍDEO
            </motion.button>
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { icon: 'users', number: '10K+', label: 'Clientes' },
              { icon: 'star', number: '4.9', label: 'Avaliação' },
              { icon: 'shipping-fast', number: '24h', label: 'Entrega' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <FontAwesomeIcon icon={stat.icon as any} className="text-[#00FF7F] text-2xl mb-2" />
                <div className="text-2xl font-black text-white">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-20 left-8">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-4 h-4 bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] rounded-full shadow-lg"
        >
          <div className="w-full h-full bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] rounded-full blur-sm" />
        </motion.div>
      </div>
      <div className="absolute top-32 right-12">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-6 h-6 border-2 border-[#FF6B35] rounded-full relative"
        >
          <div className="absolute inset-0 border-2 border-[#FF6B35] rounded-full animate-ping" />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="text-sm mb-2">Role para baixo</span>
          <FontAwesomeIcon icon="chevron-down" className="text-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;