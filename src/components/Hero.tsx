import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
    <section className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Streetwear Collection"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">NOVA</span>
            <br />
            <span className="text-[#00FF7F]">COLEÇÃO</span>
            <br />
            <span className="text-white">STREETWEAR</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 mb-8"
          >
            Descubra as últimas tendências da moda urbana com peças exclusivas
            inspiradas na cultura street de Porto Alegre
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreCollection}
            className="bg-[#00FF7F] text-black font-bold px-8 py-4 rounded-full hover:bg-[#00FF7F]/90 transition-colors flex items-center gap-2 mx-auto"
          >
            EXPLORE A COLEÇÃO
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-4">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-[#00FF7F] rounded-full"
        />
      </div>
      <div className="absolute top-20 right-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 border-2 border-[#FF6B35] rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;