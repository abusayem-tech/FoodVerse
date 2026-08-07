import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { foodItems } from '../data/foodItems';

const RestaurantDetails = ({ darkMode, showToast }) => {
  const { id } = useParams();
  const currentMenu = foodItems[Number(id)] || [];

  const handleAddToCart = (item) => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      if (showToast) showToast('কার্টে খাবার যোগ করতে আগে লগইন করুন!');
      setTimeout(() => window.location.href = '/login', 1200);
      return;
    }

    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = savedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingIndex > -1) {
      savedCart[existingIndex].quantity += 1;
    } else {
      savedCart.push({
        id: item.id,
        name: item.name,
        price: `৳${item.price}`,
        img: item.image,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(savedCart));
    window.dispatchEvent(new Event('cartUpdated'));

    // App.js-এর মাধ্যমে নিচে ডানে ছোট টোস্ট মেসেজ ভাসবে
    if (showToast) {
      showToast(`${item.name} added to cart!`);
    }
  };

  const cardBg = darkMode ? '#1E293B' : '#FFF';
  const textColor = darkMode ? '#F8FAFC' : '#111827';
  const borderColor = darkMode ? '#334155' : '#F3F4F6';

  return (
    <div style={{ padding: '40px 60px', backgroundColor: darkMode ? '#0F172A' : '#FAFAFA', minHeight: '90vh' }}>
      <Link to="/restaurants" style={{ textDecoration: 'none', color: '#FF6B1A', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
        ← Back to Restaurants
      </Link>

      <h2 style={{ fontSize: '26px', fontWeight: '800', color: textColor, marginBottom: '24px' }}>
        🍽️ Menu Items
      </h2>

      {currentMenu.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
          {currentMenu.map((item) => (
            <div key={item.id} style={{ backgroundColor: cardBg, borderRadius: '16px', padding: '16px', border: `1px solid ${borderColor}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px' }} />
                <span style={{ fontSize: '11px', backgroundColor: '#FFF3EB', color: '#FF6B1A', padding: '4px 8px', borderRadius: '6px', fontWeight: '600' }}>
                  {item.category}
                </span>
                <h3 style={{ margin: '8px 0 4px 0', fontSize: '16px', color: textColor }}>{item.name}</h3>
                <p style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#059669' }}>৳ {item.price}</p>
              </div>

              <button 
                onClick={() => handleAddToCart(item)}
                style={{ marginTop: '16px', width: '100%', backgroundColor: '#FF6B1A', color: '#FFF', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: '#6B7280' }}>No items found for this restaurant.</p>
      )}
    </div>
  );
};

export default RestaurantDetails;