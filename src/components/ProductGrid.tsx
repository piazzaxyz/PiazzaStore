import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import { products } from '../data/products';
import { useApp } from '../context/AppContext';
import { Product } from '../types';

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, subtitle, limit }) => {
  const { state } = useApp();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAll, setShowAll] = useState(false);

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

    // Apply limit if specified and not showing all
    if (limit && !showAll) {
      filtered = filtered.slice(0, limit);
    }

    return filtered;
  }, [state.selectedCategory, state.searchQuery, limit, showAll]);

  const allProducts = useMemo(() => {
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

    return filtered;
  }, [state.selectedCategory, state.searchQuery]);

  if (filteredProducts.length === 0) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-12 shadow-lg"
          >
            <FontAwesomeIcon icon="search" className="text-6xl text-gray-300 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Nenhum produto encontrado</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Não encontramos produtos que correspondam aos seus critérios de busca ou categoria selecionada.
            </p>
            <button
              onClick={() => {
                // Reset filters
                state.searchQuery && state.dispatch({ type: 'SET_SEARCH_QUERY', payload: '' });
                state.selectedCategory !== 'all' && state.dispatch({ type: 'SET_SELECTED_CATEGORY', payload: 'all' });
              }}
              className="bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
            >
              <FontAwesomeIcon icon="refresh" className="mr-2" />
              Limpar Filtros
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="products-section" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-20 w-32 h-32 bg-[#00FF7F] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-[#FF6B35] rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
                <FontAwesomeIcon icon="fire" className="mr-4 text-[#FF6B35]" />
                {title}
              </h2>
              {subtitle && (
                <p className="text-xl text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon="magic" className="text-[#00FF7F]" />
                  {subtitle}
                  <FontAwesomeIcon icon="magic" className="text-[#FF6B35]" />
                </p>
              )}
              
              {/* Category indicator */}
              {state.selectedCategory !== 'all' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
                >
                  <FontAwesomeIcon icon="filter" className="text-[#00FF7F]" />
                  <span className="font-semibold">
                    Filtrando por: {state.selectedCategory.charAt(0).toUpperCase() + state.selectedCategory.slice(1)}
                  </span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                    {allProducts.length} produto{allProducts.length !== 1 ? 's' : ''}
                  </span>
                </motion.div>
              )}
            </motion.div>
          )}
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer"
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </div>
          
          {limit && allProducts.length > limit && !showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-16"
            >
              <button
                onClick={() => setShowAll(true)}
                className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-4 rounded-full hover:shadow-xl transition-all font-bold text-lg group inline-flex items-center gap-3"
              >
                <FontAwesomeIcon icon="eye" />
                VER TODOS OS {allProducts.length} PRODUTOS
                <FontAwesomeIcon icon="arrow-right" className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
          
          {/* Product count indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500 bg-white/50 backdrop-blur-sm inline-flex items-center gap-2 px-4 py-2 rounded-full">
              <FontAwesomeIcon icon="check" className="text-[#00FF7F]" />
              Mostrando {filteredProducts.length} de {allProducts.length} produtos
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductGrid;
