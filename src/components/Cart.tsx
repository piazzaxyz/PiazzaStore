import React from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useApp();

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: productId, quantity: newQuantity } });
    }
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const total = state.cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

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
        className="fixed right-0 top-0 w-full max-w-md h-full bg-white z-50 overflow-y-auto"
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Carrinho ({state.cart.length})</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {state.cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center px-4">
            <ShoppingBag size={64} className="text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Carrinho vazio</h3>
            <p className="text-gray-600 mb-4">Adicione produtos para começar suas compras</p>
            <button
              onClick={onClose}
              className="bg-[#00FF7F] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#00FF7F]/90 transition-colors"
            >
              Continuar Comprando
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 p-4 space-y-4">
              {state.cart.map((item) => (
                <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">{item.product.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">
                      {item.selectedSize} • {item.selectedColor}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">
                      R$ {(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 p-4 space-y-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={clearCart}
                  className="text-red-500 text-sm hover:underline"
                >
                  Limpar Carrinho
                </button>
                <div className="text-right">
                  <p className="text-lg font-bold">Total: R$ {total.toFixed(2)}</p>
                </div>
              </div>
              
              <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Finalizar Compra
              </button>
              
              <button
                onClick={onClose}
                className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Continuar Comprando
              </button>
            </div>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Cart;