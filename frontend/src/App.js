import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Checkout from './components/Checkout';
import Restaurants from './components/Restaurants';
import Categories from './components/Categories';
import Offers from './components/Offers';
import TrackOrder from './components/TrackOrder';
import CategoryProducts from './components/CategoryProducts';
import RestaurantDetails from './components/RestaurantDetails';
import FoodVerseAI from './components/FoodVerseAI'; // ✅ FoodVerse AI Import

function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.style.backgroundColor = darkMode ? '#0F172A' : '#FAFAFA';
    document.body.style.color = darkMode ? '#F8FAFC' : '#111827';
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  const isOrderSuccess = toastMessage.toLowerCase().includes('order placed') || toastMessage.toLowerCase().includes('order confirmed');

  return (
    <Router>
      <style>{`
        @keyframes popupCenterBounce {
          0% { opacity: 0; transform: scale(0.5); }
          70% { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/signup" element={<Signup darkMode={darkMode} />} />
        <Route path="/login" element={<Login darkMode={darkMode} />} />
        <Route path="/profile" element={<Profile darkMode={darkMode} />} />
        
        <Route 
          path="/checkout" 
          element={<Checkout darkMode={darkMode} showToast={showToast} />} 
        />
        
        <Route path="/restaurants" element={<Restaurants darkMode={darkMode} />} />
        
        <Route 
          path="/restaurant/:id" 
          element={<RestaurantDetails darkMode={darkMode} showToast={showToast} />} 
        />
        
        <Route path="/categories" element={<Categories darkMode={darkMode} />} />
        <Route path="/offers" element={<Offers darkMode={darkMode} />} />
        <Route path="/track-order" element={<TrackOrder darkMode={darkMode} />} />
        <Route path="/category/:categoryName" element={<CategoryProducts darkMode={darkMode} />} />
      </Routes>

      {/* খাবার সিলেক্ট করার ছোট পপ-আপ */}
      {toastMessage && !isOrderSuccess && (
        <div style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: darkMode ? '#1E293B' : '#111827',
            color: '#FFFFFF',
            padding: '12px 20px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            fontSize: '14px',
            fontWeight: '600',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderLeft: '4px solid #FF6B1A'
        }}>
          <span>✨</span> {toastMessage}
        </div>
      )}

      {/* অর্ডার কনফার্মের বড় পপ-আপ */}
      {toastMessage && isOrderSuccess && (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999999
        }}>
          <div style={{
              backgroundColor: darkMode ? '#1E293B' : '#111827',
              color: '#FFFFFF',
              padding: '36px 48px',
              borderRadius: '24px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
              textAlign: 'center',
              borderTop: '6px solid #FF6B1A',
              maxWidth: '450px',
              width: '90%',
              animation: 'popupCenterBounce 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
          }}>
            <div style={{ fontSize: '56px', marginBottom: '4px' }}>🎉</div>
            <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '800', color: '#FF6B1A' }}>Order Confirmed!</h3>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.5', color: '#E5E7EB', fontWeight: '500' }}>
              {toastMessage}
            </p>
          </div>
        </div>
      )}

      {/* ✨ FoodVerse AI Component */}
      <FoodVerseAI />

    </Router>
  );
}

export default App;