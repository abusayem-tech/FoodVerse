import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // কার্টে আইটেম যোগ করা
    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.itemName === item.itemName);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.itemName === item.itemName
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    // কার্ট থেকে আইটেম কমানো বা মুছে ফেলা
    const removeFromCart = (itemName) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.itemName === itemName);
            if (existingItem.quantity === 1) {
                return prevCart.filter(cartItem => cartItem.itemName !== itemName);
            }
            return prevCart.map(cartItem =>
                cartItem.itemName === itemName
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
        });
    };

    // মোট দাম হিসাব করা
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);