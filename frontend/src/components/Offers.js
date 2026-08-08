import React from 'react';

const Offers = () => {
  const offersList = [
    { id: 1, title: 'FLAT 50% OFF', code: 'FOOD50', desc: 'Get 50% discount on all Burger King items', bg: 'linear-gradient(135deg, #FF6B1A, #FF8E53)' },
    { id: 2, title: '20% OFF on Kacchi', code: 'KACCHI20', desc: 'Valid on Sultan Dine & Kacchi Bhai orders', bg: 'linear-gradient(135deg, #10B981, #059669)' },
    { id: 3, title: 'Buy 1 Get 1 Free', code: 'PIZZABOGO', desc: 'Buy any Large Pizza & get 1 Medium Pizza Free', bg: 'linear-gradient(135deg, #6366F1, #4F46E5)' }
  ];

  return (
    <div style={{ padding: '40px 60px', backgroundColor: '#FAFAFA', minHeight: '90vh' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#111827', marginBottom: '20px' }}>🔥 Exclusive Hot Offers</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {offersList.map(offer => (
          <div key={offer.id} style={{ background: offer.bg, color: '#FFF', padding: '24px', borderRadius: '16px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}>
            <h1 style={{ margin: 0, fontSize: '28px', fontWeight: '900' }}>{offer.title}</h1>
            <p style={{ margin: '10px 0 16px 0', fontSize: '13px', opacity: 0.9 }}>{offer.desc}</p>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '8px 12px', borderRadius: '8px', display: 'inline-block', fontWeight: 'bold', fontSize: '12px', border: '1px dashed #FFF' }}>
              Use Code: {offer.code}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;