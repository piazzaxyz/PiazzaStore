import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, CartItem } from '../types';

interface AppState {
  cart: CartItem[];
  favorites: string[];
  searchQuery: string;
  selectedCategory: string;
  isMenuOpen: boolean;
  isSearchOpen: boolean;
}

type AppAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_FAVORITE'; payload: string }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_SELECTED_CATEGORY'; payload: string }
  | { type: 'TOGGLE_MENU' }
  | { type: 'TOGGLE_SEARCH' };

const initialState: AppState = {
  cart: [],
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  searchQuery: '',
  selectedCategory: 'all',
  isMenuOpen: false,
  isSearchOpen: false,
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(
        item => 
          item.product.id === action.payload.product.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor
      );
      
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.payload.product.id &&
            item.selectedSize === action.payload.selectedSize &&
            item.selectedColor === action.payload.selectedColor
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload),
      };
    
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    
    case 'TOGGLE_FAVORITE':
      const newFavorites = state.favorites.includes(action.payload)
        ? state.favorites.filter(id => id !== action.payload)
        : [...state.favorites, action.payload];
      
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      
      return {
        ...state,
        favorites: newFavorites,
      };
    
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };
    
    case 'SET_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
      };
    
    case 'TOGGLE_MENU':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        isSearchOpen: !state.isSearchOpen,
      };
    
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};