'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from './ui/Button';

export function CartDrawer() {
    const {
        cart,
        isCartOpen,
        toggleCart,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                        aria-hidden="true"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="cart-title"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <h2 id="cart-title" className="text-2xl font-bold font-quicksand flex items-center gap-2">
                                <ShoppingBag className="text-brand-purple" />
                                Seu Carrinho
                            </h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                                aria-label="Fechar carrinho"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-500">
                                    <ShoppingBag size={64} className="opacity-20" />
                                    <p className="font-nunito text-lg">Seu carrinho está vazio.</p>
                                    <Button variant="secondary" onClick={toggleCart}>
                                        Continuar Comprando
                                    </Button>
                                </div>
                            ) : (
                                cart.map(item => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center p-2">
                                            {/* Ideally optimize image loading here */}
                                            <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <h4 className="font-semibold text-gray-800 line-clamp-1">{item.name}</h4>
                                            <div className="text-sm text-gray-500">
                                                {item.size} • {item.count} un
                                            </div>
                                            <div className="flex items-center justify-between pt-2">
                                                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-white rounded-md shadow-sm transition-all disabled:opacity-50"
                                                        aria-label="Diminuir quantidade"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-white rounded-md shadow-sm transition-all"
                                                        aria-label="Aumentar quantidade"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <div className="font-bold text-brand-purple">
                                                    R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 self-start p-1 transition-colors"
                                            aria-label="Remover item"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                                <div className="flex items-center justify-between text-lg font-bold font-quicksand">
                                    <span>Total</span>
                                    <span className="text-brand-purple">
                                        R$ {cartTotal.toFixed(2).replace('.', ',')}
                                    </span>
                                </div>
                                <Button className="w-full text-lg shadow-xl shadow-brand-purple/20">
                                    Finalizar Compra
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
