import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const TrackOrder = () => {
  const [searchParams] = useSearchParams();
  const [orderId, setOrderId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');

  const track = (id) => {
    const cleaned = (id || '').trim();
    if (!cleaned) {
      setError('Please enter an Order ID.');
      setIsSearching(false);
      setOrder(null);
      return;
    }

    setError('');
    setIsSearching(true);

    try {
      const lastOrder = JSON.parse(localStorage.getItem('lastOrder') || 'null');
      if (lastOrder && String(lastOrder.orderId).toLowerCase() === cleaned.toLowerCase()) {
        setOrder(lastOrder);
      } else {
        setOrder({
          orderId: cleaned,
          status: 'On The Way',
          paymentMethod: 'cod',
          deliveryAddress: localStorage.getItem('userLocation') || 'Dhaka, Bangladesh'
        });
      }
    } catch {
      setOrder({ orderId: cleaned, status: 'On The Way' });
    }
  };

  useEffect(() => {
    const fromQuery = searchParams.get('orderId');
    if (fromQuery) {
      setOrderId(fromQuery);
      track(fromQuery);
    }
  }, [searchParams]);

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#FAFAFA', minHeight: '90vh', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#FFF', padding: '32px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', margin: 0 }}>📍 Track Your Live Order</h2>
        <p style={{ color: '#6B7280', fontSize: '13px', margin: '8px 0 24px 0' }}>Enter your Order ID to check real-time delivery status</p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
          <input 
            type="text" 
            placeholder="e.g. FV-12345678" 
            value={orderId} 
            onChange={(e) => setOrderId(e.target.value)}
            style={{ flexGrow: 1, padding: '12px 16px', borderRadius: '10px', border: '1px solid #E5E7EB', outline: 'none', fontSize: '14px' }}
          />
          <button 
            onClick={() => track(orderId)}
            style={{ backgroundColor: '#FF6B1A', color: '#FFF', border: 'none', padding: '12px 24px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Track Order
          </button>
        </div>

        {error && <p style={{ color: '#DC2626', fontSize: '13px', marginBottom: '16px' }}>{error}</p>}

        {isSearching && order && (
          <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '24px', textAlign: 'left' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#111827' }}>
              Order <span style={{ color: '#6B7280' }}>#{order.orderId}</span>
            </h4>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '15px', color: '#111827' }}>
              Order Status: <span style={{ color: '#FF6B1A' }}>{order.status || 'On The Way'} 🛵</span>
            </h4>
            {order.deliveryAddress && (
              <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '16px' }}>
                Delivering to: {order.deliveryAddress}
              </p>
            )}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '10px', borderLeft: '2px solid #FF6B1A' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#111827' }}>✅ Order Placed</div>
                <div style={{ fontSize: '11px', color: '#9CA3AF' }}>Confirmed</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#111827' }}>✅ Preparing Food</div>
                <div style={{ fontSize: '11px', color: '#9CA3AF' }}>Restaurant is cooking</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#FF6B1A' }}>🛵 Out for Delivery</div>
                <div style={{ fontSize: '11px', color: '#9CA3AF' }}>Delivery Rider is on the way</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
