import React from 'react';
import { motion } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import ProductCard from './ProductCard';

interface FavoritesProps {
  isOpen: boolean;
  onClose: () => void;
}

const Favorites: React.FC<FavoritesProps> = ({ isOpen, onClose }) => {
  const { state } = useApp();

  const favoriteProducts = products.filter(product => 
    state.favorites.includes(product.id)
  );

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        className="fixed right-0 top-0 w-full max-w-2xl h-full bg-white z-50 overflow-y-auto"
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Favoritos ({state.favorites.length})</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {favoriteProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center px-4">
            <Heart size={64} className="text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhum favorito ainda</h3>
            <p className="text-gray-600 mb-4">Adicione produtos aos favoritos para vê-los aqui</p>
            <button
              onClick={onClose}
              className="bg-[#00FF7F] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#00FF7F]/90 transition-colors"
            >
              Explorar Produtos
            </button>
          </div>
        ) : (
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {favoriteProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Favorites;