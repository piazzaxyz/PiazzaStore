import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { useApp } from '../context/AppContext';

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, subtitle, limit }) => {
  const { state } = useApp();

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (state.selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === state.selectedCategory);
    }

    // Filter by search query
    if (state.searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(state.searchQuery.toLowerCase()))
      );
    }

    // Apply limit if specified
    if (limit) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  }, [state.selectedCategory, state.searchQuery, limit]);

  if (filteredProducts.length === 0) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Nenhum produto encontrado</h3>
          <p className="text-gray-600">
            Tente ajustar seus filtros ou termo de busca
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="products-section" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </motion.div>
        )}
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {limit && filteredProducts.length >= limit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
              VER TODOS OS PRODUTOS
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;