import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductDetailsProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, isOpen, onClose }) => {
  const { state, dispatch } = useApp();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const isFavorited = state.favorites.includes(product.id);

  const handleToggleFavorite = () => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: product.id });
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product,
        quantity,
        selectedSize,
        selectedColor,
      },
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="min-h-screen px-4 text-center flex items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl max-w-6xl w-full mx-auto overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Gallery */}
              <div className="relative">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] text-black px-3 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-1">
                        <FontAwesomeIcon icon="magic" />
                        NOVO
                      </span>
                    )}
                    {product.isOnSale && (
                      <span className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A65] text-white px-3 py-1 rounded-full text-xs font-black shadow-lg flex items-center gap-1">
                        <FontAwesomeIcon icon="fire" />
                        OFERTA
                      </span>
                    )}
                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all"
                  >
                    <FontAwesomeIcon icon="times" className="text-xl" />
                  </button>
                </div>
                
                {/* Image thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex gap-2 p-4 overflow-x-auto">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index ? 'border-[#00FF7F]' : 'border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon="star"
                            className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} avaliações)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleToggleFavorite}
                    className="p-3 rounded-full border-2 border-gray-300 hover:border-red-500 transition-all"
                  >
                    <FontAwesomeIcon
                      icon="heart"
                      className={`text-xl ${isFavorited ? 'text-red-500' : 'text-gray-400'}`}
                    />
                  </button>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-3xl font-black bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                    R$ {product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon="ruler" />
                    Tamanho
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border-2 rounded-lg font-semibold transition-all ${
                          selectedSize === size
                            ? 'border-[#00FF7F] bg-[#00FF7F] text-black'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Color Selection */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon="palette" />
                    Cor: <span className="text-[#00FF7F]">{selectedColor}</span>
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-4 transition-all ${
                          selectedColor === color ? 'border-black scale-110' : 'border-gray-300'
                        } ${
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
                  </div>
                </div>
                
                {/* Quantity */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-3">Quantidade</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:bg-gray-100 transition-colors"
                      >
                        <FontAwesomeIcon icon="minus" />
                      </button>
                      <span className="px-4 py-3 font-semibold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 hover:bg-gray-100 transition-colors"
                      >
                        <FontAwesomeIcon icon="plus" />
                      </button>
                    </div>
                    <span className="text-gray-600">
                      Total: <span className="font-bold text-green-600">
                        R$ {(product.price * quantity).toFixed(2)}
                      </span>
                    </span>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] text-black font-bold py-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon="shopping-bag" />
                    Adicionar ao Carrinho
                  </button>
                  <button className="px-6 py-4 border-2 border-black text-black font-bold rounded-lg hover:bg-black hover:text-white transition-all">
                    Comprar Agora
                  </button>
                </div>
                
                {/* Tags */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold mb-3">Tags</h3>
                  <div className="flex gap-2 flex-wrap">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetails;