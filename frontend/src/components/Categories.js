import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  const foodCategories = [
    { id: 1, name: 'Biryani & Kacchi', image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=500&q=80', items: '150+ Options', desc: 'Traditional aromatic rice & tender meat' },
    { id: 2, name: 'Bengali Meals', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80', items: '90+ Options', desc: 'Authentic deshi rice, fish & traditional curries' },
    { id: 3, name: 'Burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80', items: '120+ Options', desc: 'Juicy beef, crispy chicken & smash burgers' },
    { id: 4, name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80', items: '85+ Options', desc: 'Hot, cheesy Italian crust pizzas' },
    { id: 5, name: 'Pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281298?auto=format&fit=crop&w=500&q=80', items: '75+ Options', desc: 'Creamy Alfredo, Carbonara & Bolognese pasta' },
    { id: 6, name: 'Fried Chicken', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=500&q=80', items: '95+ Options', desc: 'Crispy fried chicken, wings & nuggets' },
    { id: 7, name: 'Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=80', items: '110+ Options', desc: 'Fried rice, chow mein, manchurian & dim sum' },
    { id: 8, name: 'Thai', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=500&q=80', items: '60+ Options', desc: 'Tom yum soup, green curry & authentic flavours' },
    { id: 9, name: 'Korean', image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=500&q=80', items: '50+ Options', desc: 'Korean BBQ, bibimbap, bulgogi & ramen' },
    { id: 10, name: 'Kebab & BBQ', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80', items: '70+ Options', desc: 'Seekh kebab, beef chap & grilled items' },
    { id: 11, name: 'Shawarma & Wraps', image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=80', items: '65+ Options', desc: 'Loaded chicken or beef shawarma & wraps' },
    { id: 12, name: 'Steak', image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=80', items: '40+ Options', desc: 'Juicy beef and chicken steaks' },
    { id: 13, name: 'Seafood', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=500&q=80', items: '45+ Options', desc: 'Prawn, fish, squid & seafood pasta' },
    { id: 14, name: 'Bakery & Desserts', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80', items: '85+ Options', desc: 'Cakes, cheesecakes, pastries & brownies' },
    { id: 15, name: 'Coffee & Beverages', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80', items: '90+ Options', desc: 'Espresso, latte, cappuccino, tea & juices' }
  ];

  const handleCategoryClick = (catName) => {
    navigate(`/category/${encodeURIComponent(catName)}`);
  };

  return (
    <div style={{ padding: '40px 60px', backgroundColor: '#FAFAFA', minHeight: '90vh' }}>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#111827', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>🍕</span> Explore Food Categories
        </h2>
        <p style={{ color: '#6B7280', fontSize: '14px', marginTop: '6px' }}>
          Choose your favorite food category and discover delicious items instantly!
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
        gap: '24px' 
      }}>
        {foodCategories.map((cat) => (
          <div 
            key={cat.id} 
            onClick={() => handleCategoryClick(cat.name)}
            style={{ 
              backgroundColor: '#FFF', 
              borderRadius: '18px', 
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)', 
              border: '1px solid #F3F4F6',
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,107,26,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
            }}
          >
            <div style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
              <img 
                src={cat.image} 
                alt={cat.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
              />
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', color: '#111827', fontWeight: '700' }}>
                  {cat.name}
                </h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#6B7280', lineHeight: '1.4' }}>
                  {cat.desc}
                </p>
              </div>

              <div style={{ 
                marginTop: '16px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderTop: '1px solid #F3F4F6',
                paddingTop: '12px'
              }}>
                <span style={{ fontSize: '12px', fontWeight: '600', color: '#FF6B1A' }}>
                  {cat.items}
                </span>
                <span style={{ fontSize: '14px', color: '#9CA3AF' }}>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;