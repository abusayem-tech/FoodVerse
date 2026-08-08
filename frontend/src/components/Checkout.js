import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = ({ darkMode, showToast }) => {
  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const navigate = useNavigate();
  
  const deliveryCharge = 60; 

  const loadCart = () => {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
      savedCart = [];
    }
    setCart(savedCart);

    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      setDeliveryAddress(savedLocation);
    }
  };

  useEffect(() => {
    loadCart();
    window.addEventListener('cartUpdated', loadCart);
    return () => window.removeEventListener('cartUpdated', loadCart);
  }, []);

  const updateQuantity = (id, delta) => {
    let updatedCart = cart.map((item) => {
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

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const priceNum = parseInt(String(item.price).replace(/[^0-9]/g, '')) || 0;
      return total + priceNum * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const grandTotal = subtotal > 0 ? subtotal + deliveryCharge : 0;

  const handlePlaceOrder = () => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      if (showToast) showToast('অর্ডার করতে হলে প্রথমে লগইন করুন!');
      setTimeout(() => navigate('/login'), 1500);
      return;
    }

    if (cart.length === 0) {
      if (showToast) showToast('Your cart is empty!');
      return;
    }

    const orderId = `FV-${Date.now().toString().slice(-8)}`;
    const order = {
      orderId,
      paymentMethod,
      deliveryAddress: deliveryAddress || 'Dhaka, Bangladesh',
      items: cart,
      total: grandTotal,
      createdAt: new Date().toISOString(),
      status: 'On The Way'
    };
    localStorage.setItem('lastOrder', JSON.stringify(order));

    if (showToast) {
      showToast(`Order Placed Successfully using ${paymentMethod.toUpperCase()}!`);
    }
    
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartUpdated'));
    setTimeout(() => navigate(`/track-order?orderId=${orderId}`), 1800);
  };

  const paymentOptions = [
    { id: 'cod', name: 'Cash on Delivery', subtitle: 'Pay with cash upon delivery', logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23059669"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm8 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>' },
    { id: 'bkash', name: 'bKash', subtitle: 'Fast mobile payment', logo: 'https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg' },
    { id: 'nagad', name: 'Nagad', subtitle: 'Postal network digital banking', logo: 'https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png' },
    { id: 'rocket', name: 'Rocket', subtitle: 'Dutch-Bangla Mobile Banking', logo: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png' },
    { id: 'bank', name: 'Card / Net Banking', subtitle: 'Visa, MasterCard or Internet Banking', logo: 'https://cdn-icons-png.flaticon.com/512/893/893081.png' }
  ];

  const cardBg = darkMode ? '#1E293B' : '#FFF';
  const textColor = darkMode ? '#F8FAFC' : '#111827';
  const borderColor = darkMode ? '#334155' : '#E5E7EB';

  return (
    <div style={{ padding: '40px 60px', backgroundColor: darkMode ? '#0F172A' : '#FAFAFA', minHeight: '90vh' }}>
      <h2 style={{ fontSize: '26px', fontWeight: '800', color: textColor, marginBottom: '24px' }}>
        🛒 Checkout
      </h2>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: cardBg, borderRadius: '16px', border: `1px solid ${borderColor}` }}>
          <h3 style={{ color: textColor }}>Your cart is empty!</h3>
          <p style={{ color: '#6B7280' }}>Add items from your favorite restaurant to checkout.</p>
          <Link to="/restaurants" style={{ textDecoration: 'none', color: '#FF6B1A', fontWeight: 'bold' }}>
            Explore Restaurants →
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '30px' }}>
          <div>
            <div style={{ backgroundColor: cardBg, padding: '20px', borderRadius: '16px', border: `1px solid ${borderColor}`, marginBottom: '24px' }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: textColor }}>Order Items</h3>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${borderColor}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                    <div>
                      <div style={{ fontWeight: '600', color: textColor }}>{item.name}</div>
                      <div style={{ fontSize: '13px', color: '#FF6B1A', fontWeight: 'bold' }}>{item.price}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: `1px solid ${borderColor}`, borderRadius: '6px', padding: '4px 8px' }}>
                    <button onClick={() => updateQuantity(item.id, -1)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold', color: textColor }}>-</button>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: textColor }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold', color: '#FF6B1A' }}>+</button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: cardBg, padding: '20px', borderRadius: '16px', border: `1px solid ${borderColor}` }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: textColor }}>Select Payment Method</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {paymentOptions.map((option) => (
                  <label 
                    key={option.id} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      padding: '14px 18px', 
                      border: paymentMethod === option.id ? '2px solid #FF6B1A' : `1px solid ${borderColor}`, 
                      backgroundColor: paymentMethod === option.id ? (darkMode ? '#334155' : '#FFFBF8') : cardBg,
                      borderRadius: '12px', 
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <input 
                        type="radio" 
                        name="payment" 
                        value={option.id} 
                        checked={paymentMethod === option.id} 
                        onChange={(e) => setPaymentMethod(e.target.value)} 
                        style={{ accentColor: '#FF6B1A' }}
                      />
                      <div>
                        <div style={{ fontWeight: '700', fontSize: '15px', color: textColor }}>{option.name}</div>
                        <div style={{ fontSize: '12px', color: '#6B7280' }}>{option.subtitle}</div>
                      </div>
                    </div>

                    <img src={option.logo} alt={option.name} style={{ height: '32px', width: '50px', objectFit: 'contain' }} />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: cardBg, padding: '24px', borderRadius: '16px', border: `1px solid ${borderColor}`, height: 'fit-content' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: textColor }}>Payment Summary</h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#9CA3AF', fontSize: '14px' }}>
              <span>Subtotal</span>
              <span>৳{subtotal}</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#9CA3AF', fontSize: '14px' }}>
              <span>Delivery Fee</span>
              <span style={{ color: '#059669', fontWeight: '600' }}>৳{deliveryCharge}</span>
            </div>

            <div style={{ borderTop: `1px dashed ${borderColor}`, margin: '14px 0' }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontWeight: '800', fontSize: '20px', color: textColor }}>
              <span>Total Pay</span>
              <span style={{ color: '#FF6B1A' }}>৳{grandTotal}</span>
            </div>

            <div style={{ marginBottom: '20px', backgroundColor: darkMode ? '#0F172A' : '#FAFAFA', padding: '12px', borderRadius: '10px', border: `1px solid ${borderColor}` }}>
              <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 'bold', display: 'block' }}>Delivery Location:</span>
              <span style={{ fontSize: '13px', color: textColor, fontWeight: '500' }}>📍 {deliveryAddress || 'Dhaka, Bangladesh'}</span>
            </div>

            <button 
              onClick={handlePlaceOrder}
              style={{
                width: '100%',
                backgroundColor: '#FF6B1A',
                color: '#FFF',
                border: 'none',
                padding: '14px',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '15px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(255,107,26,0.25)'
              }}
            >
              Confirm Order (৳{grandTotal})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;