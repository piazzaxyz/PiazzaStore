import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categories } from '../data/products';
import { useApp } from '../context/AppContext';

const CategoryGrid: React.FC = () => {
  const { dispatch } = useApp();

  const handleCategorySelect = (categoryId: string) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: categoryId });
    // Scroll to products section
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayCategories = categories.filter(cat => cat.id !== 'all');

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#00FF7F] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#FF6B35] rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-black mb-6 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: '200% 200%' }}
          >
            <FontAwesomeIcon icon="th-large" className="mr-4 text-[#00FF7F]" />
            CATEGORIAS
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            <FontAwesomeIcon icon="magic" className="mr-2 text-[#FF6B35]" />
            Encontre seu estilo perfeito em nossa seleção exclusiva
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {displayCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategorySelect(category.id)}
              className="group relative aspect-square overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu"
            >
              {/* Background image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                {/* Category icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-[#00FF7F]/20 transition-all duration-300"
                >
                  <FontAwesomeIcon 
                    icon={
                      category.id === 'camisetas' ? 'tshirt' :
                      category.id === 'moletons' ? 'shirt' :
                      category.id === 'calcas' ? 'user' :
                      'gem'
                    } 
                    className="text-2xl group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
                
                <h3 className="text-xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                  {category.name.toUpperCase()}
                </h3>
                <p className="text-sm opacity-90 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  <FontAwesomeIcon icon="tag" className="mr-1" />
                  {category.count} produtos
                </p>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#00FF7F] rounded-3xl transition-all duration-500" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-[#00FF7F]/25" />
              
              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#00FF7F] via-[#00E5FF] to-[#FF6B35] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl" />
            </motion.button>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-dashed border-gray-300 rounded-full flex items-center justify-center"
          >
            <FontAwesomeIcon icon="magic" className="text-[#00FF7F] text-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
