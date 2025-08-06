import React from 'react';
import { useState } from 'react';
import { Menu, Search, ShoppingBag, Heart, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { categories } from '../data/products';
import Cart from './Cart';
import Favorites from './Favorites';

const Header: React.FC = () => {
  const { state, dispatch } = useApp();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const handleCategorySelect = (categoryId: string) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: categoryId });
    dispatch({ type: 'TOGGLE_MENU' });
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={24} className="text-gray-800" />
          </button>
          
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold tracking-wider">
              <span className="text-black">PIAZZA</span>
              <span className="text-[#00FF7F] ml-1">STORE</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch({ type: 'TOGGLE_SEARCH' })}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Search size={20} className="text-gray-800" />
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsFavoritesOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Heart size={20} className="text-gray-800" />
              </button>
              {state.favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.favorites.length}
                </span>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ShoppingBag size={20} className="text-gray-800" />
              </button>
              {state.cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <AnimatePresence>
          {state.isSearchOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="overflow-hidden bg-gray-50 border-t"
            >
              <div className="p-4">
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF7F] focus:border-transparent"
                    value={state.searchQuery}
                    onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {state.isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed left-0 top-0 w-80 h-full bg-white z-50 overflow-y-auto"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <button
                    onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <nav className="space-y-2">
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                      Categorias
                    </h3>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          state.selectedCategory === category.id
                            ? 'bg-[#00FF7F] text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.name}</span>
                          <span className="text-sm opacity-75">({category.count})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-3">
                      <User size={20} />
                      Minha Conta
                    </button>
                    <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-3">
                      <Heart size={20} />
                      Favoritos
                    </button>
                  </div>
                </nav>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Piazza Store</h3>
                    <p className="text-sm text-gray-600 mb-2">Porto Alegre - Cristal, RS</p>
                    <p className="text-sm text-gray-600">(51) 99369-3721</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </AnimatePresence>

      {/* Favorites Sidebar */}
      <AnimatePresence>
        <Favorites isOpen={isFavoritesOpen} onClose={() => setIsFavoritesOpen(false)} />
      </AnimatePresence>
    </>
  );
};

export default Header;