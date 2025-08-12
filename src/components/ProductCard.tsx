import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { state, dispatch } = useApp();
  const isFavorited = state.favorites.includes(product.id);

  const handleToggleFavorite = () => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: product.id });
  };

  const handleAddToCart = () => {
    // Show visual feedback
    const button = document.activeElement as HTMLButtonElement;
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    }
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product,
        quantity: 1,
        selectedSize: product.sizes[0],
        selectedColor: product.colors[0],
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform-gpu hover:-translate-y-2"
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
          />
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] text-black px-3 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-1"
            >
              <FontAwesomeIcon icon="sparkles" />
              NOVO
            </motion.span>
          )}
          {product.isOnSale && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A65] text-white px-3 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-1"
            >
              <FontAwesomeIcon icon="fire" />
              OFERTA
            </motion.span>
          )}
        </div>
        
        {/* Favorite Button */}
        <motion.button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon
            icon="heart"
            className={`text-lg transition-colors ${isFavorited ? 'text-red-500' : 'text-gray-600'}`}
          />
        </motion.button>
        
        {/* Quick Add Button */}
        <motion.button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 p-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon="shopping-bag" className="text-lg" />
        </motion.button>
        
        {/* Quick view button */}
        <motion.button
          className="absolute bottom-3 left-3 p-3 bg-white/90 backdrop-blur-sm text-black rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon="eye" className="text-lg" />
        </motion.button>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-[#00FF7F] transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon="star"
                className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {product.rating} ({product.reviews})
          </span>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through font-medium">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-2xl font-black bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
            R$ {product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {product.colors.slice(0, 3).map((color, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                className={`w-7 h-7 rounded-full border-2 border-gray-300 shadow-sm cursor-pointer ${
                  color === 'Preto' ? 'bg-black' :
                  color === 'Branco' ? 'bg-white' :
                  color === 'Verde' || color === 'Verde Neon' ? 'bg-green-500' :
                  color === 'Verde Militar' ? 'bg-green-700' :
                  color === 'Cinza' ? 'bg-gray-500' :
                  color === 'Laranja' ? 'bg-orange-500' :
                  color === 'Bege' ? 'bg-amber-200' :
                  'bg-gray-300'
                }`}
                title={color}
              />
            ))}
            {product.colors.length > 3 && (
              <div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center shadow-sm">
                <span className="text-xs text-gray-600 font-bold">+{product.colors.length - 3}</span>
              </div>
            )}
          </div>
          
          {/* Size indicator */}
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <FontAwesomeIcon icon="ruler" />
            <span>{product.sizes.length} tamanhos</span>
          </div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-[#00FF7F]/10 pointer-events-none" />
    </motion.div>
  );
};

export default ProductCard;