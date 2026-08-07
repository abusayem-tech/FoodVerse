import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');

  const restaurantsList = [
    { id: 1, name: "Sultan's Dine", area: "Mirpur, Uttara, Dhanmondi, Gulshan", mainCategory: "Biryani & Kacchi, Bengali Meals", rating: "4.9", time: "30-40 min", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500" },
    { id: 2, name: "Kacchi Bhai", area: "Multiple locations", mainCategory: "Biryani & Kacchi", rating: "4.8", time: "30-45 min", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500" },
    { id: 3, name: "Hazi Nanna Biryani", area: "Old Dhaka, Mirpur", mainCategory: "Biryani & Kacchi", rating: "4.6", time: "25-35 min", img: "https://images.unsplash.com/photo-1624823297534-114d64239dbd?w=500" },
    { id: 4, name: "Roohani", area: "Gulshan, Banani", mainCategory: "Biryani & Kacchi, Bengali Meals", rating: "4.7", time: "30-40 min", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500" },
    { id: 5, name: "Star Kabab & Restaurant", area: "Dhanmondi, Panthapath, Banani", mainCategory: "Bengali Meals, Kebab & BBQ", rating: "4.5", time: "25-35 min", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500" },
    { id: 6, name: "PizzaBurg", area: "Mirpur, Uttara, Dhanmondi, Bashundhara", mainCategory: "Burgers, Pizza, Pasta, Fried Chicken", rating: "4.7", time: "25-35 min", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
    { id: 7, name: "Chillox", area: "Dhanmondi, Banani, Uttara", mainCategory: "Burgers, Fried Chicken", rating: "4.8", time: "20-30 min", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
    { id: 8, name: "Madchef", area: "Dhanmondi, Banani", mainCategory: "Burgers, Steak, Kebab & BBQ", rating: "4.7", time: "25-35 min", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500" },
    { id: 9, name: "Takeout", area: "Mirpur, Banani, Uttara", mainCategory: "Burgers, Fried Chicken, Steak, Shawarma", rating: "4.5", time: "20-30 min", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500" },
    { id: 10, name: "BFC", area: "Multiple locations", mainCategory: "Fried Chicken, Burgers, Shawarma & Wraps", rating: "4.4", time: "20-30 min", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500" },
    { id: 11, name: "Khana's", area: "Dhanmondi", mainCategory: "Burgers, Shawarma & Wraps", rating: "4.3", time: "25-35 min", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500" },
    { id: 12, name: "Spaghetti Jazz", area: "Gulshan", mainCategory: "Pizza, Pasta, Steak", rating: "4.6", time: "30-40 min", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500" },
    { id: 13, name: "Prego", area: "Gulshan", mainCategory: "Pizza, Pasta, Steak, Seafood", rating: "4.9", time: "40-50 min", img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500" },
    { id: 14, name: "Grand Prince Thai & Chinese", area: "Mirpur", mainCategory: "Chinese, Thai, Seafood", rating: "4.4", time: "30-40 min", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500" },
    { id: 15, name: "Hongbao", area: "Gulshan", mainCategory: "Chinese, Seafood", rating: "4.8", time: "35-45 min", img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500" },
    { id: 16, name: "Koreana Restaurant", area: "Gulshan", mainCategory: "Korean, Seafood", rating: "4.7", time: "35-45 min", img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500" },
    { id: 17, name: "Cooper's Bakery", area: "Multiple locations", mainCategory: "Bakery & Desserts, Coffee & Beverages", rating: "4.7", time: "15-25 min", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" },
    { id: 18, name: "Secret Recipe", area: "Dhanmondi, Uttara", mainCategory: "Pasta, Bakery & Desserts, Coffee & Beverages", rating: "4.8", time: "20-30 min", img: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=500" },
    { id: 19, name: "North End Coffee Roasters", area: "Dhanmondi, Gulshan", mainCategory: "Coffee & Beverages", rating: "4.9", time: "20-30 min", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500" },
    { id: 20, name: "Gloria Jean's Coffees", area: "Multiple locations", mainCategory: "Coffee & Beverages", rating: "4.7", time: "20-30 min", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500" }
  ];

  const filteredRestaurants = restaurantsList.filter(res => {
    const matchesSearch = res.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          res.mainCategory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === 'All' || res.area.toLowerCase().includes(selectedArea.toLowerCase());
    return matchesSearch && matchesArea;
  });

  return (
    <div style={{ padding: '40px 60px', backgroundColor: '#FAFAFA', minHeight: '90vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🍽️</span> All Restaurants
          </h2>
          <p style={{ color: '#6B7280', fontSize: '14px', marginTop: '6px' }}>
            Explore the best restaurants across Dhaka and order your favorite meal!
          </p>
        </div>

        <div style={{ display: 'flex', backgroundColor: '#FFF', borderRadius: '12px', padding: '6px 12px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', border: '1px solid #E5E7EB', width: '300px' }}>
          <input 
            type="text" 
            placeholder="Search restaurant or cuisine..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '14px', backgroundColor: 'transparent' }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', overflowX: 'auto', paddingBottom: '5px' }}>
        {['All', 'Mirpur', 'Uttara', 'Dhanmondi', 'Gulshan', 'Banani'].map((area) => (
          <button
            key={area}
            onClick={() => setSelectedArea(area)}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              border: selectedArea === area ? 'none' : '1px solid #E5E7EB',
              backgroundColor: selectedArea === area ? '#FF6B1A' : '#FFF',
              color: selectedArea === area ? '#FFF' : '#374151',
              fontWeight: '600',
              fontSize: '13px',
              cursor: 'pointer',
              boxShadow: selectedArea === area ? '0 4px 12px rgba(255,107,26,0.2)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            {area}
          </button>
        ))}
      </div>

      {filteredRestaurants.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px', color: '#6B7280' }}>
          <h3>No restaurants found matching your criteria.</h3>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredRestaurants.map((res) => (
            <Link to={`/restaurant/${res.id}`} key={res.id} style={{ textDecoration: 'none' }}>
              <div 
                style={{ 
                  backgroundColor: '#FFF', 
                  borderRadius: '18px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)', 
                  border: '1px solid #F3F4F6',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
              >
                <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
                  <img src={res.img} alt={res.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', color: '#111827', fontWeight: '700' }}>{res.name}</h3>
                    <p style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#FF6B1A', fontWeight: '600' }}>{res.mainCategory}</p>
                    <p style={{ margin: 0, fontSize: '12px', color: '#6B7280' }}>📍 {res.area}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', borderTop: '1px solid #F3F4F6', paddingTop: '12px', fontSize: '13px', fontWeight: '600' }}>
                    <span style={{ color: '#F59E0B' }}>⭐ {res.rating}</span>
                    <span style={{ color: '#6B7280' }}>🕒 {res.time}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurants;