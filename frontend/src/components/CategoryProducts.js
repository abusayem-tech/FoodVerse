import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// আপনার ২০টি রেস্টুরেন্টের লিস্ট
const allRestaurants = [
  { id: 1, name: "Sultan's Dine", rating: "4.9", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500" },
  { id: 2, name: "Kacchi Bhai", rating: "4.8", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500" },
  { id: 3, name: "Hazi Nanna Biryani", rating: "4.6", img: "https://images.unsplash.com/photo-1624823297534-114d64239dbd?w=500" },
  { id: 4, name: "Roohani", rating: "4.7", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500" },
  { id: 5, name: "Star Kabab & Restaurant", rating: "4.5", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500" },
  { id: 6, name: "PizzaBurg", rating: "4.7", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
  { id: 7, name: "Chillox", rating: "4.8", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
  { id: 8, name: "Madchef", rating: "4.7", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500" },
  { id: 9, name: "Takeout", rating: "4.5", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500" },
  { id: 10, name: "BFC", rating: "4.4", img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500" },
  { id: 11, name: "Khana's", rating: "4.3", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500" },
  { id: 12, name: "Spaghetti Jazz", rating: "4.6", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500" },
  { id: 13, name: "Prego", rating: "4.9", img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500" },
  { id: 14, name: "Grand Prince Thai & Chinese", rating: "4.4", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500" },
  { id: 15, name: "Hongbao", rating: "4.8", img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500" },
  { id: 16, name: "Koreana Restaurant", rating: "4.7", img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500" },
  { id: 17, name: "Cooper's Bakery", rating: "4.7", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500" },
  { id: 18, name: "Secret Recipe", rating: "4.8", img: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=500" },
  { id: 19, name: "North End Coffee Roasters", rating: "4.9", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500" },
  { id: 20, name: "Gloria Jean's Coffees", rating: "4.7", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500" }
];

// প্রতিটি ক্যাটাগরির আইডি ম্যাপিং
const categoryMap = {
  'biryani & kacchi': [1, 2, 3, 4],
  'bengali meals': [1, 4, 5],
  'burgers': [6, 7, 8, 9, 10, 11],
  'burger & fast food': [6, 7, 8, 9, 10, 11],
  'pizza': [6, 12, 13],
  'pasta': [6, 12, 13, 18],
  'pizza & pasta': [6, 12, 13, 18],
  'fried chicken': [6, 7, 9, 10],
  'chinese': [14, 15],
  'thai': [14],
  'chinese & thai': [14, 15],
  'korean': [16],
  'kebab & bbq': [1, 4, 5, 8],
  'kebab & grill': [1, 4, 5, 8],
  'shawarma & wraps': [9, 10, 11],
  'steak': [8, 9, 12, 13],
  'seafood': [13, 14, 15, 16],
  'sea food': [13, 14, 15, 16],
  'bakery & desserts': [17, 18, 20],
  'desserts & bakery': [17, 18, 20],
  'coffee & beverages': [17, 18, 19, 20],
  'drinks & beverages': [17, 18, 19, 20],
  'street food': [9, 11]
};

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // URL থেকে ক্যাটাগরির নাম রিড করা
  const decodedCategory = decodeURIComponent(categoryName || '').toLowerCase().trim();

  // ক্যাটাগরি অনুযায়ী ম্যাপিং করা রেস্টুরেন্ট আইডি সংগ্রহ
  const matchedIds = categoryMap[decodedCategory] || [];

  // রেস্টুরেন্ট ফিল্টার ও সার্চ হ্যান্ডলিং
  const restaurantsToShow = allRestaurants.filter(res => {
    const matchesCategory = matchedIds.includes(res.id);
    const matchesSearch = res.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: '40px 60px', backgroundColor: '#FAFAFA', minHeight: '90vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ padding: '8px 16px', backgroundColor: '#FFF', border: '1px solid #D1D5DB', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
        >
          ← Back
        </button>

        <input 
          type="text" 
          placeholder="Search restaurant..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #D1D5DB', outline: 'none', width: '220px' }}
        />
      </div>

      <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', marginBottom: '20px', textTransform: 'capitalize' }}>
        Restaurants serving "{decodeURIComponent(categoryName || '')}"
      </h2>

      {restaurantsToShow.length === 0 ? (
        <div style={{ padding: '40px 0', color: '#6B7280' }}>
          <h3>No restaurants found for this category.</h3>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {restaurantsToShow.map((res) => (
            <div key={res.id} style={{ backgroundColor: '#FFF', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', border: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column' }}>
              <img src={res.img} alt={res.name} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#111827', fontWeight: '700' }}>{res.name}</h3>
                  <p style={{ margin: 0, fontSize: '13px', color: '#6B7280' }}>
                    Popular spot for {decodeURIComponent(categoryName || '')}
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', borderTop: '1px solid #F3F4F6', paddingTop: '12px' }}>
                  <span style={{ fontSize: '13px', color: '#F59E0B', fontWeight: '600' }}>⭐ {res.rating}</span>
                  <button 
                    onClick={() => navigate(`/restaurant/${res.id}`)} 
                    style={{ backgroundColor: '#FF6B1A', color: '#FFF', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;