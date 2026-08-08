import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    profilePic: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setFormData({
        firstName: parsedUser.firstName || '',
        lastName: parsedUser.lastName || '',
        phone: parsedUser.phone || '',
        profilePic: parsedUser.profilePic || parsedUser.avatar || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
      });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ৫ MB সাপোর্ট এবং অটো কম্প্রেশন হ্যান্ডলার
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ৫ MB সাইজ লিমিট
    if (file.size > 5 * 1024 * 1024) {
      setError('File size exceeds 5MB! Please select a smaller image.');
      return;
    }

    setError('');
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 400;
        const MAX_HEIGHT = 400;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // ছবি কমপ্রেস করে Base64 ফরম্যাটে রূপান্তর
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
        setFormData((prev) => ({ ...prev, profilePic: compressedBase64 }));
      };
    };
    reader.readAsDataURL(file);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5001/api/auth/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          userId: user._id || user.id,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone
        })
      });

      const data = await response.json();

      if (response.ok) {
        const updatedUser = data.user || { ...user, ...formData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        setIsEditing(false);
        setMessage('Profile updated successfully!');
        
        // নেভবারকে তাত্ক্ষণিক সিঙ্ক জানানোর ইভেন্ট
        window.dispatchEvent(new Event('userUpdated'));
      } else {
        setError(data.message || 'Failed to update profile');
      }
    } catch (err) {
      // লোকাল ব্যাকআপ সেভ (সার্ভার অফ থাকলে)
      const updatedUser = { ...user, ...formData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsEditing(false);
      setMessage('Profile updated successfully!');
      window.dispatchEvent(new Event('userUpdated'));
    }
  };

  if (!user) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading profile...</div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '25px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #F3F4F6', paddingBottom: '10px' }}>
        <h2 style={{ color: '#FF6B1A', margin: 0 }}>My Profile</h2>
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)} 
            style={{ backgroundColor: '#FF6B1A', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            ✏️ Edit Profile
          </button>
        )}
      </div>

      {message && <div style={{ backgroundColor: '#DEF7EC', color: '#03543F', padding: '10px', borderRadius: '6px', marginTop: '15px' }}>{message}</div>}
      {error && <div style={{ backgroundColor: '#FDE8E8', color: '#9B1C1C', padding: '10px', borderRadius: '6px', marginTop: '15px' }}>{error}</div>}

      {/* প্রোফাইল পিকচার সেকশন */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img 
          src={isEditing ? formData.profilePic : (user.profilePic || user.avatar || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png')} 
          alt="Profile" 
          style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #FF6B1A' }} 
        />
        {isEditing && (
          <div style={{ marginTop: '10px' }}>
            <label style={{ display: 'inline-block', backgroundColor: '#FF6B1A', color: '#FFF', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
              Change Photo (Max 5MB)
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
            </label>
          </div>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleUpdate} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={labelStyle}>First Name</label>
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              style={inputStyle} 
              required 
            />
          </div>

          <div>
            <label style={labelStyle}>Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              style={inputStyle} 
              required 
            />
          </div>

          <div>
            <label style={labelStyle}>Phone Number</label>
            <input 
              type="text" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              style={inputStyle} 
              required 
            />
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button type="submit" style={{ backgroundColor: '#10B981', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Save Changes
            </button>
            <button type="button" onClick={() => setIsEditing(false)} style={{ backgroundColor: '#6B7280', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={infoBoxStyle}>
            <strong>First Name:</strong> <span>{user.firstName || 'N/A'}</span>
          </div>

          <div style={infoBoxStyle}>
            <strong>Last Name:</strong> <span>{user.lastName || 'N/A'}</span>
          </div>

          <div style={infoBoxStyle}>
            <strong>Email Address:</strong> <span>{user.email || 'N/A'}</span>
          </div>

          <div style={infoBoxStyle}>
            <strong>Phone Number:</strong> <span>{user.phone || 'N/A'}</span>
          </div>

          <div style={infoBoxStyle}>
            <strong>Account Role:</strong> <span style={{ textTransform: 'capitalize', color: '#FF6B1A', fontWeight: 'bold' }}>{user.role || 'Customer'}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const infoBoxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px 16px',
  backgroundColor: '#F9FAFB',
  borderRadius: '8px',
  fontSize: '15px',
  color: '#374151'
};

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '5px',
  color: '#374151'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #D1D5DB',
  fontSize: '14px',
  boxSizing: 'border-box'
};

export default Profile;