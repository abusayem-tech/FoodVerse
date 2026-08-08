import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoLight from '../logo.PNG';
import logoDark from '../logo-dark.PNG';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState('Dhaka, Bangladesh');
  const [searchQuery, setSearchQuery] = useState('');
  const [customAddressInput, setCustomAddressInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  
  const [mapCenter, setMapCenter] = useState({ lat: 23.8103, lng: 90.4125 });

  const dropdownRef = useRef(null);
  const cartRef = useRef(null);
  const location = useLocation();

  const loadCart = () => {
    try {
      setCart(JSON.parse(localStorage.getItem('cart')) || []);
    } catch {
      setCart([]);
    }
  };

  const loadUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try { 
        setUser(JSON.parse(storedUser)); 
      } catch (e) { 
        console.error(e); 
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUser();

    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) { setCurrentAddress(savedLocation); }

    loadCart();
    
    // ইভেন্ট লিসেনার (লাইভ আপডেট এর জন্য)
    window.addEventListener('cartUpdated', loadCart);
    window.addEventListener('userUpdated', loadUser);

    return () => {
      window.removeEventListener('cartUpdated', loadCart);
      window.removeEventListener('userUpdated', loadUser);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsDropdownOpen(false);
      if (cartRef.current && !cartRef.current.contains(event.target)) setIsCartOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) return alert("Geolocation is not supported");
    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setMapCenter({ lat: latitude, lng: longitude });
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();
          const address = data.display_name ? data.display_name.split(',').slice(0, 3).join(',') : `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          saveLocation(address);
        } catch { saveLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`); }
        finally { setIsLoadingLocation(false); }
      },
      () => { alert("Unable to retrieve location."); setIsLoadingLocation(false); }
    );
  };

  const handleSearchAddress = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 2) {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setSearchResults(data);
      } catch (err) { console.error(err); }
    } else { setSearchResults([]); }
  };

  const handleSelectSearchResult = (result) => {
    const shortAddress = result.display_name.split(',').slice(0, 3).join(',');
    setMapCenter({ lat: parseFloat(result.lat), lng: parseFloat(result.lon) });
    saveLocation(shortAddress);
    setSearchResults([]);
    setSearchQuery('');
  };

  const handleSetCustomAddress = () => {
    if (!customAddressInput.trim()) return alert("Please enter address!");
    saveLocation(customAddressInput.trim());
    setCustomAddressInput('');
  };

  const saveLocation = (address) => {
    setCurrentAddress(address);
    localStorage.setItem('userLocation', address);
    setIsLocationModalOpen(false);
  };

  const updateQuantity = (id, delta) => {
    let updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const priceNum = parseInt(String(item.price).replace(/[^0-9]/g, '')) || 0;
      return total + (priceNum * item.quantity);
    }, 0);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsDropdownOpen(false);
    window.location.href = '/login';
  };

  const getUserFullName = () => {
    if (!user) return '';
    return `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User';
  };

  const getLinkStyle = (path) => ({
    textDecoration: 'none',
    color: location.pathname === path ? '#FF6B1A' : (darkMode ? '#E2E8F0' : '#374151'),
    borderBottom: location.pathname === path ? '2px solid #FF6B1A' : '2px solid transparent',
    paddingBottom: '4px',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  });

  const bgStyle = darkMode ? '#1E293B' : '#FFFFFF';
  const textStyle = darkMode ? '#F8FAFC' : '#111827';
  const borderStyle = darkMode ? '#334155' : '#E5E7EB';

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '12px 60px', 
      backgroundColor: bgStyle, 
      borderBottom: `1px solid ${borderStyle}`,
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'background-color 0.3s ease'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img 
          src={darkMode ? logoDark : logoLight} 
          alt="FoodVerse Logo" 
          style={{ 
            height: '48px', 
            width: 'auto', 
            maxHeight: '48px', 
            objectFit: 'contain', 
            display: 'block' 
          }} 
        />
      </Link>

      <div style={{ display: 'flex', gap: '28px', fontWeight: '600', fontSize: '14px' }}>
        <Link to="/" style={getLinkStyle('/')}>Home</Link>
        <Link to="/restaurants" style={getLinkStyle('/restaurants')}>Restaurants</Link>
        <Link to="/categories" style={getLinkStyle('/categories')}>Categories</Link>
        <Link to="/offers" style={getLinkStyle('/offers')}>Offers</Link>
        <Link to="/track-order" style={getLinkStyle('/track-order')}>Track Order</Link>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button
          onClick={toggleDarkMode}
          style={{
            backgroundColor: darkMode ? '#334155' : '#F3F4F6',
            color: darkMode ? '#FDE047' : '#111827',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          {darkMode ? '🌙 Dark' : '☀️ Light'}
        </button>

        <div 
          onClick={() => setIsLocationModalOpen(true)}
          style={{ 
            fontSize: '13px', 
            color: textStyle, 
            cursor: 'pointer', 
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: darkMode ? '#334155' : '#F9FAFB',
            padding: '6px 12px',
            borderRadius: '20px',
            border: `1px solid ${borderStyle}`
          }}
        >
          📍 <span style={{ maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{currentAddress}</span> ˅
        </div>

        <div style={{ position: 'relative' }} ref={cartRef}>
          <div onClick={() => setIsCartOpen(!isCartOpen)} style={{ position: 'relative', cursor: 'pointer', fontSize: '18px' }}>
            🛒
            {totalItems > 0 && (
              <span style={{ position: 'absolute', top: '-6px', right: '-6px', backgroundColor: '#FF6B1A', color: '#FFF', borderRadius: '50%', padding: '1px 6px', fontSize: '10px', fontWeight: 'bold' }}>
                {totalItems}
              </span>
            )}
          </div>

          {isCartOpen && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: 0,
              width: '320px',
              backgroundColor: bgStyle,
              boxShadow: '0px 10px 30px rgba(0,0,0,0.25)',
              borderRadius: '16px',
              padding: '16px',
              zIndex: 1100,
              border: `1px solid ${borderStyle}`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: `1px solid ${borderStyle}`, paddingBottom: '8px' }}>
                <h4 style={{ margin: 0, fontSize: '15px', color: textStyle }}>Your Cart ({totalItems})</h4>
                {cart.length > 0 && (
                  <span onClick={() => { localStorage.removeItem('cart'); loadCart(); window.dispatchEvent(new Event('cartUpdated')); }} style={{ fontSize: '11px', color: '#EF4444', cursor: 'pointer', fontWeight: '600' }}>
                    Clear All
                  </span>
                )}
              </div>

              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '20px 0', color: '#9CA3AF', fontSize: '13px' }}>
                  🛒 Your cart is empty!
                </div>
              ) : (
                <div style={{ maxHeight: '240px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: darkMode ? '#0F172A' : '#FAFAFA', padding: '8px', borderRadius: '10px' }}>
                      <img src={item.img} alt={item.name} style={{ width: '45px', height: '45px', borderRadius: '8px', objectFit: 'cover' }} />
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: textStyle }}>{item.name}</div>
                        <div style={{ fontSize: '12px', color: '#FF6B1A', fontWeight: 'bold' }}>{item.price}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: bgStyle, border: `1px solid ${borderStyle}`, borderRadius: '6px', padding: '2px 6px' }}>
                        <button onClick={() => updateQuantity(item.id, -1)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold', color: textStyle }}>-</button>
                        <span style={{ fontSize: '12px', fontWeight: 'bold', color: textStyle }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold', color: '#FF6B1A' }}>+</button>
                      </div>
                      <button onClick={() => removeItem(item.id)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#9CA3AF', fontSize: '14px' }}>🗑️</button>
                    </div>
                  ))}
                </div>
              )}

              {cart.length > 0 && (
                <div style={{ borderTop: `1px solid ${borderStyle}`, marginTop: '12px', paddingTop: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold', color: textStyle, marginBottom: '12px' }}>
                    <span>Total Amount:</span>
                    <span style={{ color: '#FF6B1A' }}>৳{calculateTotal()}</span>
                  </div>
                  <Link to="/checkout" onClick={() => setIsCartOpen(false)} style={{ textDecoration: 'none' }}>
                    <button style={{ width: '100%', backgroundColor: '#FF6B1A', color: '#FFF', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>
                      Proceed to Checkout
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {user ? (
          <div style={{ position: 'relative' }} ref={dropdownRef}>
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <img 
                src={user.profilePic || user.avatar || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} 
                alt="Profile" 
                style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} 
              />
              <span style={{ fontWeight: '600', fontSize: '14px', color: textStyle }}>{getUserFullName()}</span>
              <span style={{ fontSize: '12px', color: '#6B7280' }}>{isDropdownOpen ? '▴' : '▾'}</span>
            </div>

            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '48px',
                right: 0,
                width: '200px',
                backgroundColor: bgStyle,
                boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
                borderRadius: '12px',
                padding: '8px 0',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 1100,
                border: `1px solid ${borderStyle}`
              }}>
                <Link to="/profile" onClick={() => setIsDropdownOpen(false)} style={{ ...menuItemStyle, color: textStyle }}>👤 My Profile</Link>
                <Link to="/track-order" onClick={() => setIsDropdownOpen(false)} style={{ ...menuItemStyle, color: textStyle }}>📄 My Orders</Link>
                <div style={{ borderTop: `1px solid ${borderStyle}`, margin: '6px 0' }}></div>
                <button onClick={handleLogout} style={{ ...menuItemStyle, color: '#FF6B1A', border: 'none', background: 'none', width: '100%', textAlign: 'left', fontWeight: 'bold' }}>
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" style={{ backgroundColor: '#FF6B1A', color: '#FFFFFF', textDecoration: 'none', padding: '8px 18px', borderRadius: '8px', fontWeight: 'bold', fontSize: '14px' }}>
            Login / Sign Up
          </Link>
        )}
      </div>

      {isLocationModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
          <div style={{ backgroundColor: bgStyle, color: textStyle, borderRadius: '16px', width: '460px', maxHeight: '90vh', overflowY: 'auto', padding: '24px', position: 'relative', border: `1px solid ${borderStyle}` }}>
            <button onClick={() => setIsLocationModalOpen(false)} style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: 'none', fontSize: '18px', cursor: 'pointer', color: textStyle }}>✕</button>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: textStyle }}>Set Delivery Location</h3>

            <button onClick={handleGetCurrentLocation} disabled={isLoadingLocation} style={{ width: '100%', padding: '10px', backgroundColor: bgStyle, border: '1px solid #FF6B1A', color: '#FF6B1A', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '16px' }}>
              🎯 {isLoadingLocation ? 'Detecting...' : 'Use Current GPS Location'}
            </button>

            <div style={{ position: 'relative', marginBottom: '16px' }}>
              <input type="text" placeholder="Search city, area..." value={searchQuery} onChange={handleSearchAddress} style={{ width: '100%', padding: '10px', border: `1px solid ${borderStyle}`, borderRadius: '8px', backgroundColor: darkMode ? '#0F172A' : '#FFF', color: textStyle }} />
              {searchResults.length > 0 && (
                <div style={{ position: 'absolute', top: '42px', left: 0, right: 0, backgroundColor: bgStyle, border: `1px solid ${borderStyle}`, borderRadius: '8px', maxHeight: '150px', overflowY: 'auto', zIndex: 2100 }}>
                  {searchResults.map((res, index) => (
                    <div key={index} onClick={() => handleSelectSearchResult(res)} style={{ padding: '10px', fontSize: '12px', cursor: 'pointer', borderBottom: `1px solid ${borderStyle}` }}>
                      📍 {res.display_name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '16px', borderTop: `1px dashed ${borderStyle}`, paddingTop: '16px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input type="text" placeholder="House 12, Dhanmondi" value={customAddressInput} onChange={(e) => setCustomAddressInput(e.target.value)} style={{ flexGrow: 1, padding: '8px 12px', border: `1px solid ${borderStyle}`, borderRadius: '8px', backgroundColor: darkMode ? '#0F172A' : '#FFF', color: textStyle }} />
                <button onClick={handleSetCustomAddress} style={{ backgroundColor: '#FF6B1A', color: '#FFF', border: 'none', padding: '8px 14px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Save</button>
              </div>
            </div>

            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '160px', marginBottom: '16px' }}>
              <iframe title="Map" width="100%" height="100%" frameBorder="0" src={`https://maps.google.com/maps?q=${mapCenter.lat},${mapCenter.lng}&z=15&output=embed`}></iframe>
            </div>

            <button onClick={() => setIsLocationModalOpen(false)} style={{ width: '100%', backgroundColor: '#FF6B1A', color: '#FFF', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const menuItemStyle = { padding: '8px 16px', textDecoration: 'none', fontSize: '13px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' };

export default Navbar;