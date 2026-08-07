import React, { useState } from 'react';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#FAFAFA', minHeight: '90vh', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#FFF', padding: '32px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', margin: 0 }}>📍 Track Your Live Order</h2>
        <p style={{ color: '#6B7280', fontSize: '13px', margin: '8px 0 24px 0' }}>Enter your Order ID to check real-time delivery status</p>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          <input 
            type="text" 
            placeholder="e.g. ORD-584920" 
            value={orderId} 
            onChange={(e) => setOrderId(e.target.value)}
            style={{ flexGrow: 1, padding: '12px 16px', borderRadius: '10px', border: '1px solid #E5E7EB', outline: 'none', fontSize: '14px' }}
          />
          <button 
            onClick={() => setIsSearching(true)}
            style={{ backgroundColor: '#FF6B1A', color: '#FFF', border: 'none', padding: '12px 24px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Track Order
          </button>
        </div>

        {isSearching && (
          <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '24px', textAlign: 'left' }}>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '15px', color: '#111827' }}>Order Status: <span style={{ color: '#FF6B1A' }}>On The Way 🛵</span></h4>
            
            {/* Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '10px', borderLeft: '2px solid #FF6B1A' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#111827' }}>✅ Order Placed</div>
                <div style={{ fontSize: '11px', color: '#9CA3AF' }}>12:30 PM</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#111827' }}>✅ Preparing Food</div>
                <div style={{ fontSize: '11px', color: '#9CA3AF' }}>12:35 PM</div>
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