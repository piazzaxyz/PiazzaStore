import React from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';
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
      className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-[#00FF7F] text-white px-3 py-1 rounded-full text-xs font-bold">
              NOVO
            </span>
          )}
          {product.isOnSale && (
            <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-bold">
              OFERTA
            </span>
          )}
        </div>
        
        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <Heart
            size={18}
            className={isFavorited ? 'text-red-500 fill-current' : 'text-gray-600'}
          />
        </button>
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 active:scale-95"
        >
          <ShoppingBag size={18} />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-2">
          <Star size={16} className="text-yellow-500 fill-current" />
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-xl font-bold text-green-600">
            R$ {product.price.toFixed(2)}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full border-2 border-gray-300 ${
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
              <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
                <span className="text-xs text-gray-600">+{product.colors.length - 3}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;