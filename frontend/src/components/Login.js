import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../api';
import './Signup.css';

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: '', 
    password: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // পাসওয়ার্ড টগল করার জন্য নতুন স্টেট

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(apiUrl('/api/auth/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // পেজ রিফ্রেশ দিয়ে সরাসরি হোমপেজে নেভিগেট
        window.location.href = '/';
      } else {
        setError(data.message || 'Invalid Email/Phone or Password!');
      }
    } catch (err) {
      setError('Server error, please try again later.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Login to your FoodVerse account</p>

        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="identifier" 
            placeholder="Email or Phone Number" 
            value={formData.identifier} 
            onChange={handleChange} 
            required 
          />

          {/* জিমেইল স্টাইল পাসওয়ার্ড ফিল্ড এবং আইকন */}
          <div style={{ position: 'relative', width: '100%', marginBottom: '15px' }}>
            <input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', paddingRight: '40px', boxSizing: 'border-box' }}
            />
            <span 
              onClick={() => setShowPassword(!showPassword)}
              style={{ 
                position: 'absolute', 
                right: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                color: '#666'
              }}
            >
              {showPassword ? (
                /* চোখ খোলা আইকন (Gmail style) */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              ) : (
                /* চোখ বন্ধ বা কাটা আইকন (Gmail style) */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              )}
            </span>
          </div>

          <div style={{ textAlign: 'right', marginBottom: '15px' }}>
            <button
              type="button"
              onClick={() => setError('Password reset is not available yet. Please contact support.')}
              style={{ fontSize: '13px', color: '#e55322', textDecoration: 'none', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;