import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = ({ items }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [toastMessage, setToastMessage] = useState('');
    const navigate = useNavigate();

    const showToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => {
            setToastMessage('');
        }, 3000);
    };

    const handleAddToCart = (item) => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            showToast('কার্টে খাবার যোগ করতে আগে লগইন করুন!');
            setTimeout(() => navigate('/login'), 1200);
            return;
        }

        let updatedCart = [...cart];
        const existingIndex = updatedCart.findIndex(cartItem => cartItem.itemName === item.itemName);
        if (existingIndex > -1) {
            updatedCart[existingIndex].quantity = (updatedCart[existingIndex].quantity || 1) + 1;
        } else {
            updatedCart.push({ ...item, id: item.itemName, name: item.itemName, quantity: 1 });
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
        showToast(`${item.itemName} added to cart!`);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            const priceNum = parseInt(String(item.price).replace(/[^0-9]/g, '')) || 0;
            return total + priceNum * (item.quantity || 1);
        }, 0);
    };

    const totalAmount = calculateTotal();

    return (
        <div className="menu-page">
            <style>{`
                @keyframes popupCenterBounce {
                  0% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.5);
                  }
                  70% {
                    transform: translate(-50%, -50%) scale(1.05);
                  }
                  100% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                  }
                }
            `}</style>

            <div className="menu-items">
                <h2>New Arrivals</h2>
                {items && items.map(item => (
                    <div className="menu-card" key={item.itemName}>
                        <div>
                            <h4>{item.itemName}</h4>
                            <p>Tk {item.price}</p>
                            <p>{item.description}</p>
                        </div>
                        <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>+</button>
                    </div>
                ))}
            </div>
            
            {/* Right side cart */}
            <div className="sidebar-cart">
                <h3>Hungry?</h3>
                {cart.length === 0 ? (
                    <p>You haven't added anything to your cart!</p>
                ) : (
                    <div>
                        {cart.map((cItem, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', margin: '4px 0', color: '#333' }}>
                                <span>{cItem.itemName || cItem.name} (x{cItem.quantity || 1})</span>
                                <span>Tk {parseInt(String(cItem.price).replace(/[^0-9]/g, '')) * (cItem.quantity || 1)}</span>
                            </div>
                        ))}
                    </div>
                )}
                <div className="cart-total">
                    <span>Total: Tk {totalAmount}</span>
                </div>
                <button disabled={cart.length === 0} onClick={() => navigate('/checkout')}>Review payment and address</button>
            </div>

            {/* সেন্টারে পপ-আপ অ্যানিমেটেড টোস্ট */}
            {toastMessage && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#111827',
                    color: '#FFFFFF',
                    padding: '18px 32px',
                    borderRadius: '16px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    fontSize: '16px',
                    fontWeight: '600',
                    zIndex: 999999,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    borderTop: '4px solid #FF6B1A',
                    animation: 'popupCenterBounce 0.4s ease-out forwards'
                }}>
                    <span style={{ fontSize: '22px' }}>✨</span> {toastMessage}
                </div>
            )}
        </div>
    );
};

export default Menu;