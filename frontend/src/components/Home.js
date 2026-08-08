import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { foodItems } from '../data/foodItems';

const Home = ({ darkMode, showToast }) => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // ডার্ক মোডের ডাইনামিক কালার প্যালেট
  const bgColor = darkMode ? '#0F172A' : '#FAFAFA';
  const cardBg = darkMode ? '#1E293B' : '#FFFFFF';
  const bannerBg = darkMode ? '#334155' : '#FFF5F0';
  const textColor = darkMode ? '#F8FAFC' : '#111827';
  const subTextColor = darkMode ? '#94A3B8' : '#6B7280';
  const borderColor = darkMode ? '#475569' : '#F3F4F6';
  const inputBg = darkMode ? '#1E293B' : '#FFFFFF';

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }

    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addToCart = (food) => {
    if (!localStorage.getItem('user')) {
      if (showToast) showToast('কার্টে খাবার যোগ করতে আগে লগইন করুন!');
      setTimeout(() => navigate('/login'), 1200);
      return;
    }

    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
      cart = [];
    }
    const existingIndex = cart.findIndex(item => item.id === food.id);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...food, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    if (showToast) showToast(`${food.name} added to cart!`);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Good Morning';
    if (hour >= 12 && hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getUserFullName = () => {
    if (!user) return '';
    return `${user.firstName || ''} ${user.lastName || ''}`.trim();
  };

  const fullName = getUserFullName();
  const greeting = getGreeting();

  const restaurants = [
    { id: 1, name: "Sultan's Dine", tags: 'Biryani & Kacchi, Bengali Meals', rating: '4.9', time: '30-40 min', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500' },
    { id: 2, name: 'Kacchi Bhai', tags: 'Biryani & Kacchi', rating: '4.8', time: '30-45 min', img: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500' },
    { id: 3, name: 'Hazi Nanna Biryani', tags: 'Biryani & Kacchi', rating: '4.6', time: '25-35 min', img: 'https://images.unsplash.com/photo-1624823297534-114d64239dbd?w=500' },
    { id: 4, name: 'Roohani', tags: 'Biryani & Kacchi, Bengali Meals', rating: '4.7', time: '30-40 min', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500' },
    { id: 5, name: 'Star Kabab & Restaurant', tags: 'Bengali Meals, Kebab & BBQ', rating: '4.5', time: '25-35 min', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500' },
    { id: 6, name: 'PizzaBurg', tags: 'Burgers, Pizza, Pasta, Fried Chicken', rating: '4.7', time: '25-35 min', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500' },
    { id: 7, name: 'Chillox', tags: 'Burgers, Fried Chicken', rating: '4.8', time: '20-30 min', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
    { id: 8, name: 'Madchef', tags: 'Burgers, Steak, Kebab & BBQ', rating: '4.7', time: '25-35 min', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500' },
    { id: 9, name: 'Takeout', tags: 'Burgers, Fried Chicken, Steak, Shawarma', rating: '4.5', time: '20-30 min', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500' },
    { id: 10, name: 'BFC', tags: 'Fried Chicken, Burgers, Shawarma & Wraps', rating: '4.4', time: '20-30 min', img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500' },
    { id: 11, name: "Khana's", tags: 'Burgers, Shawarma & Wraps', rating: '4.3', time: '25-35 min', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500' },
    { id: 12, name: 'Spaghetti Jazz', tags: 'Pizza, Pasta, Steak', rating: '4.6', time: '30-40 min', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500' },
    { id: 13, name: 'Prego', tags: 'Pizza, Pasta, Steak, Seafood', rating: '4.9', time: '40-50 min', img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500' },
    { id: 14, name: 'Grand Prince Thai & Chinese', tags: 'Chinese, Thai, Seafood', rating: '4.4', time: '30-40 min', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500' },
    { id: 15, name: 'Hongbao', tags: 'Chinese, Seafood', rating: '4.8', time: '35-45 min', img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500' },
    { id: 16, name: 'Koreana Restaurant', tags: 'Korean, Seafood', rating: '4.7', time: '35-45 min', img: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500' },
    { id: 17, name: "Cooper's Bakery", tags: 'Bakery & Desserts, Coffee & Beverages', rating: '4.7', time: '15-25 min', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
    { id: 18, name: 'Secret Recipe', tags: 'Pasta, Bakery & Desserts, Coffee & Beverages', rating: '4.8', time: '20-30 min', img: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=500' },
    { id: 19, name: 'North End Coffee Roasters', tags: 'Coffee & Beverages', rating: '4.9', time: '20-30 min', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500' },
    { id: 20, name: "Gloria Jean's Coffees", tags: 'Coffee & Beverages', rating: '4.7', time: '20-30 min', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500' }
  ];

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const lowerQuery = query.toLowerCase();

      const matchedRestaurants = restaurants.filter(res => 
        res.name.toLowerCase().includes(lowerQuery) || 
        res.tags.toLowerCase().includes(lowerQuery)
      ).map(res => ({ ...res, type: 'restaurant' }));

      let matchedFoods = [];
      if (foodItems) {
        Object.values(foodItems).forEach(menuList => {
          if (Array.isArray(menuList)) {
            menuList.forEach(food => {
              if (food.name.toLowerCase().includes(lowerQuery) || (food.category && food.category.toLowerCase().includes(lowerQuery))) {
                if (!matchedFoods.some(f => f.name.toLowerCase() === food.name.toLowerCase())) {
                  matchedFoods.push({ ...food, type: 'food' });
                }
              }
            });
          }
        });
      }

      setSuggestions([...matchedRestaurants, ...matchedFoods.slice(0, 5)]);
      setShowDropdown(true);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    
    if (!query) return;

    setShowDropdown(false);

    const matchedRestaurant = restaurants.find(res => 
      res.name.toLowerCase().includes(query) || 
      res.tags.toLowerCase().includes(query)
    );

    if (matchedRestaurant) {
      navigate(`/restaurant/${matchedRestaurant.id}`);
    } else {
      navigate(`/category/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const categories = [
    { name: 'Biryani & Kacchi', img: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=100&q=80' },
    { name: 'Bengali Meals', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=100&q=80' },
    { name: 'Burger & Fast Food', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=100&q=80' },
    { name: 'Pizza & Pasta', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=100&q=80' },
    { name: 'Chinese & Thai', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=100&q=80' },
    { name: 'Kebab & Grill', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=100&q=80' },
    { name: 'Shawarma & Wraps', img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=100&q=80' },
    { name: 'Desserts & Bakery', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=100&q=80' },
    { name: 'Drinks & Beverages', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=100&q=80' },
    { name: 'Street Food', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=100&q=80' },
    { name: 'Sea Food', img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=100&q=80' }
  ];

  const foods = [
    { id: 9001, name: 'Basmati Kacchi', restaurant: 'Kacchi Bhai', price: '৳330', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500' },
    { id: 9002, name: 'Smoky BBQ Cheese Beef', restaurant: 'Chillox', price: '৳295', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
    { id: 9003, name: 'Royal Silk', restaurant: 'PizzaBurg', price: '৳349', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500' }
  ];

  return (
    <div style={{ padding: '30px 60px', backgroundColor: bgColor, color: textColor, minHeight: '100vh', transition: 'all 0.3s ease' }}>
      
      {/* Hero Banner */}
      <div style={{ 
        backgroundColor: bannerBg, 
        padding: '35px 40px', 
        borderRadius: '24px', 
        marginBottom: '35px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '50%' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: textColor, margin: 0 }}>
            {greeting}
            {user && fullName && (
              <>, <span style={{ color: '#FF5A36' }}>{fullName}</span></>
            )} 👋
          </h1>
          
          <p style={{ color: subTextColor, fontSize: '15px', marginTop: '8px', marginBottom: '24px' }}>
            What would you like to eat today?
          </p>

          {/* লাইভ সার্চ বক্স এবং ড্রপডাউন */}
          <div style={{ position: 'relative' }} ref={searchRef}>
            <form onSubmit={handleSearch} style={{ display: 'flex', backgroundColor: inputBg, borderRadius: '12px', padding: '6px 8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: `1px solid ${borderColor}` }}>
              <input 
                type="text" 
                placeholder="Search for food, restaurants, cuisines..." 
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => { if (suggestions.length > 0) setShowDropdown(true); }}
                style={{ border: 'none', outline: 'none', padding: '10px 14px', width: '100%', fontSize: '14px', backgroundColor: 'transparent', color: textColor }}
              />
              <button type="submit" style={{ backgroundColor: '#FF5A36', color: '#FFF', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                Search
              </button>
            </form>

            {/* সাজেশন ড্রপডাউন লিস্ট */}
            {showDropdown && suggestions.length > 0 && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: cardBg,
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                borderRadius: '12px',
                marginTop: '8px',
                zIndex: 1000,
                maxHeight: '300px',
                overflowY: 'auto',
                border: `1px solid ${borderColor}`
              }}>
                {suggestions.map((item, index) => (
                  <div 
                    key={index}
                    onClick={() => {
                      setShowDropdown(false);
                      if (item.type === 'restaurant') {
                        navigate(`/restaurant/${item.id}`);
                      } else {
                        navigate(`/category/${encodeURIComponent(item.name)}`);
                      }
                    }}
                    style={{
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      borderBottom: `1px solid ${borderColor}`,
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = darkMode ? '#334155' : '#FFF5F0'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <img 
                      src={item.img || item.image} 
                      alt={item.name} 
                      style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} 
                    />
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: textColor }}>{item.name}</div>
                      <div style={{ fontSize: '12px', color: subTextColor }}>
                        {item.type === 'restaurant' ? '🏛️ Restaurant' : `🍽️ Food • ৳${item.price}`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '25px', fontSize: '12px', color: subTextColor, fontWeight: '600' }}>
            <span>🚚 Fast Delivery</span>
            <span>🛡️ Secure Payment</span>
            <span>⭐ Best Quality</span>
            <span>🏷️ Great Offers</span>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500" 
            alt="Food Banner" 
            style={{ width: '380px', height: '220px', objectFit: 'cover', borderRadius: '20px' }}
          />
          <div style={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: '#FF5A36', color: '#FFF', padding: '8px 12px', borderRadius: '50%', fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>
            UP TO<br/><span style={{ fontSize: '16px' }}>20%</span><br/>OFF
          </div>
        </div>
      </div>

      {/* Explore Categories */}
      <div style={{ marginBottom: '35px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: textColor, marginBottom: '15px' }}>Explore Categories</h3>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
          {categories.map((cat, index) => (
            <div 
              key={index} 
              onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
              style={{ 
                backgroundColor: cardBg, 
                padding: '10px 16px', 
                borderRadius: '14px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)', 
                cursor: 'pointer', 
                border: `1px solid ${borderColor}`, 
                minWidth: '120px',
                flexShrink: 0
              }}
            >
              <img 
                src={cat.img} 
                alt={cat.name} 
                style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} 
              />
              <span style={{ fontSize: '14px', fontWeight: '600', color: textColor }}>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* Popular Restaurants */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', color: textColor, marginBottom: '15px' }}>Popular Restaurants</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {restaurants.map((res) => (
              <div 
                key={res.id} 
                onClick={() => navigate(`/restaurant/${res.id}`)}
                style={{ 
                  backgroundColor: cardBg, 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)', 
                  border: `1px solid ${borderColor}`, 
                  display: 'flex', 
                  flexDirection: 'column',
                  cursor: 'pointer' 
                }}
              >
                <img src={res.img} alt={res.name} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
                <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', color: textColor, fontWeight: '700' }}>{res.name}</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: subTextColor, lineHeight: '1.4' }}>{res.tags}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', fontSize: '13px', fontWeight: '600', borderTop: `1px solid ${borderColor}`, paddingTop: '8px' }}>
                    <span style={{ color: '#F59E0B' }}>⭐ {res.rating}</span>
                    <span style={{ color: subTextColor }}>{res.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended for You */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: textColor, margin: 0 }}>Recommended for You</h3>
            <span
              onClick={() => navigate('/restaurants')}
              style={{ color: '#FF5A36', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}
            >
              View All →
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {foods.map((food) => (
              <div key={food.id} style={{ backgroundColor: cardBg, padding: '10px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: `1px solid ${borderColor}` }}>
                <img src={food.img} alt={food.name} style={{ width: '60px', height: '60px', borderRadius: '10px', objectFit: 'cover' }} />
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '14px', color: textColor }}>{food.name}</h4>
                  <span style={{ fontSize: '14px', fontWeight: 'bold', color: textColor }}>{food.price}</span>
                </div>
                <button 
                  onClick={() => addToCart(food)} 
                  style={{ backgroundColor: '#FF5A36', color: '#FFF', border: 'none', width: '28px', height: '28px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;