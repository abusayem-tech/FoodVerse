import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const MenuPage = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const { cart, addToCart, removeFromCart, getTotalPrice } = useCart();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/restaurants/${id}`)
            .then(res => setRestaurant(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!restaurant) return <div>Loading menu...</div>;

    return (
        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
            {/* বাম পাশে মেনু লিস্ট */}
            <div style={{ flex: 2 }}>
                <h1>{restaurant.name}</h1>
                <h3>Menu Items</h3>
                {restaurant.menuItems.map((item, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <h4>{item.itemName}</h4>
                            <p>Tk {item.price}</p>
                            <p style={{ fontSize: '12px', color: '#666' }}>{item.description}</p>
                        </div>
                        <button onClick={() => addToCart(item)} style={{ padding: '8px 15px', cursor: 'pointer', height: '40px' }}>
                            + Add
                        </button>
                    </div>
                ))}
            </div>

            {/* ডান পাশে Foodpanda-র মতো সাইডবার কার্ট */}
            <div style={{ flex: 1, border: '1px solid #ddd', padding: '20px', borderRadius: '8px', height: 'fit-content' }}>
                <h3>Your Cart</h3>
                {cart.length === 0 ? (
                    <div>
                        <p>Hungry?</p>
                        <p style={{ color: '#888' }}>You haven't added anything to your cart!</p>
                    </div>
                ) : (
                    <div>
                        {cart.map((item, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span>{item.itemName} x {item.quantity}</span>
                                <div>
                                    <button onClick={() => removeFromCart(item.itemName)}>-</button>
                                    <button onClick={() => addToCart(item)}>+</button>                                    
                                    <span> Tk {item.price * item.quantity}</span>
                                </div>
                            </div>
                        ))}
                        <hr />
                        <h4>Total: Tk {getTotalPrice()}</h4>
                        <button style={{ width: '100%', padding: '10px', backgroundColor: '#e21b70', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            Review payment and address
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuPage;