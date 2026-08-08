import React from 'react';
import { useNavigate } from 'react-router-dom';

const Restaurants = () => {
  const navigate = useNavigate();

  const allRestaurants = [
    { id: 1, name: "Sultan’s Dine", tags: "Kacchi Biryani, Morog Polao, Chicken Roast", rating: "4.9", time: "20-30 min", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500" },
    { id: 2, name: "Kacchi Bhai", tags: "Kacchi Biryani, Morog Polao, Mutton Rezala", rating: "4.8", time: "30-45 min", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500" },
    { id: 3, name: "Star Kabab & Restaurant", tags: "Beef Bhuna, Seekh Kebab, Chicken Tikka", rating: "4.7", time: "20-35 min", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500" },
    { id: 4, name: "PizzaBurg", tags: "BBQ Chicken Pizza, Pasta, Beef Burger", rating: "4.7", time: "25-40 min", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
    { id: 19, name: "Hazi Nanna Biryani", tags: "Kacchi Biryani, Beef Biryani, Borhani", rating: "4.7", time: "30-40 min", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500" },
    { id: 20, name: "Roohani-Gulshan", tags: "Kacchi Biryani, Chicken Biryani, Beef Biryani", rating: "4.6", time: "25-35 min", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500" }
  ];

  return (
    <div style={{ padding: '40px 60px', backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', marginBottom: '20px' }}>
        🏬 All Popular Restaurants
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
        {allRestaurants.map((res) => (
          <div
            key={res.id}
            onClick={() => navigate(`/restaurant/${res.id}`)}
            style={{
              backgroundColor: '#FFF',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
              border: '1px solid #F3F4F6',
              cursor: 'pointer'
            }}
          >
            <img src={res.img} alt={res.name} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
              <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', color: '#111827', fontWeight: '700' }}>{res.name}</h3>
              <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#6B7280' }}>{res.tags}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', fontWeight: '600' }}>
                <span style={{ color: '#F59E0B' }}>⭐ {res.rating}</span>
                <span style={{ color: '#6B7280' }}>{res.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;