import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useApp } from '../context/AppContext';
import { categories } from '../data/products';
import Cart from './Cart';
import Favorites from './Favorites';
import Logo from './Logo';

const Header: React.FC = () => {
  const { state, dispatch } = useApp();
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const handleCategorySelect = (categoryId: string) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: categoryId });
    dispatch({ type: 'TOGGLE_MENU' });
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-gray-200/50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center">
              <Logo size="sm" />
            </Link>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all hover:scale-105"
            >
              <FontAwesomeIcon icon="bars" className="text-gray-800 text-lg" />
            </button>
          </div>
          
          <div className="flex-1 text-center">
            <Link to="/">
              <motion.h1 
                className="text-2xl font-black tracking-wider cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">PIAZZA</span>
                <span className="bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] bg-clip-text text-transparent ml-1">STORE</span>
              </motion.h1>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => dispatch({ type: 'TOGGLE_SEARCH' })}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon="search" className="text-gray-800" />
            </motion.button>
            
            <div className="relative">
              <motion.button 
                onClick={() => setIsFavoritesOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon="heart" className="text-gray-800" />
              </motion.button>
              {state.favorites.length > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8A65] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg"
                >
                  {state.favorites.length}
                </motion.span>
              )}
            </div>
            
            <div className="relative">
              <motion.button 
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon="shopping-bag" className="text-gray-800" />
              </motion.button>
              {state.cart.length > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8A65] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg"
                >
                  {state.cart.reduce((acc, item) => acc + item.quantity, 0)}
                </motion.span>
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
              className="overflow-hidden bg-gradient-to-r from-gray-50 to-white border-t border-gray-200/50"
            >
              <div className="p-4">
                <div className="relative">
                  <FontAwesomeIcon icon="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00FF7F] focus:border-transparent transition-all shadow-sm"
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
              className="fixed left-0 top-0 w-80 h-full bg-white/95 backdrop-blur-lg z-50 overflow-y-auto border-r border-gray-200/50"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold flex items-center">
                    <FontAwesomeIcon icon="bars" className="mr-2 text-[#00FF7F]" />
                    Menu
                  </h2>
                  <motion.button
                    onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon="times" className="text-xl" />
                  </motion.button>
                </div>
                
                <nav className="space-y-2">
                  {/* Navigation Links */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3 flex items-center">
                      <FontAwesomeIcon icon="home" className="mr-2" />
                      Navegação
                    </h3>
                    <div className="space-y-2">
                      <Link
                        to="/"
                        onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
                        className={`w-full text-left p-3 rounded-lg transition-all flex items-center gap-3 ${
                          location.pathname === '/'
                            ? 'bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] text-black font-semibold'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <FontAwesomeIcon icon="home" />
                        Início
                      </Link>
                      <Link
                        to="/contato"
                        onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
                        className={`w-full text-left p-3 rounded-lg transition-all flex items-center gap-3 ${
                          location.pathname === '/contato'
                            ? 'bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] text-black font-semibold'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <FontAwesomeIcon icon="envelope" />
                        Contato
                      </Link>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                      <FontAwesomeIcon icon="tag" className="mr-2" />
                      Categorias
                    </h3>
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          state.selectedCategory === category.id
                            ? 'bg-gradient-to-r from-[#00FF7F] to-[#00E5FF] text-black font-semibold'
                            : 'hover:bg-gray-100'
                        }`}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <FontAwesomeIcon 
                              icon={
                                category.id === 'all' ? 'th-large' :
                                category.id === 'camisetas' ? 'tshirt' :
                                category.id === 'moletons' ? 'shirt' :
                                category.id === 'calcas' ? 'user' :
                                'gem'
                              } 
                            />
                            <span>{category.name}</span>
                          </div>
                          <span className="text-sm opacity-75 bg-gray-200 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <motion.button 
                      className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-all flex items-center gap-3"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <FontAwesomeIcon icon="user" />
                      Minha Conta
                    </motion.button>
                    <motion.button 
                      onClick={() => {
                        setIsFavoritesOpen(true);
                        dispatch({ type: 'TOGGLE_MENU' });
                      }}
                      className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-all flex items-center gap-3"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <FontAwesomeIcon icon="heart" />
                      Favoritos
                      {state.favorites.length > 0 && (
                        <span className="ml-auto bg-[#FF6B35] text-white text-xs px-2 py-1 rounded-full">
                          {state.favorites.length}
                        </span>
                      )}
                    </motion.button>
                    <motion.button 
                      className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-all flex items-center gap-3"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <FontAwesomeIcon icon="headset" />
                      Suporte
                    </motion.button>
                  </div>
                </nav>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Logo size="sm" className="mr-2" />
                      <h3 className="font-bold">Piazza Store</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-1 flex items-center justify-center">
                      <FontAwesomeIcon icon="map-marker-alt" className="mr-1 text-[#00FF7F]" />
                      Porto Alegre - Cristal, RS
                    </p>
                    <p className="text-sm text-gray-600 flex items-center justify-center">
                      <FontAwesomeIcon icon="phone" className="mr-1 text-[#00FF7F]" />
                      (51) 99369-3721
                    </p>
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