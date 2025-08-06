import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">CATEGORIAS</h2>
          <p className="text-gray-600">Encontre seu estilo perfeito</p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => handleCategorySelect(category.id)}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg font-bold mb-2">{category.name.toUpperCase()}</h3>
                <p className="text-sm opacity-90">{category.count} produtos</p>
              </div>
              
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00FF7F] to-[#FF6B35] transform scale-x-0 group-hover:scale-x-100 transition-transform" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;