import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiUrl } from '../api';
import './Signup.css';

const Signup = () => {
  const [role, setRole] = useState('customer');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Password and Confirm Password do not match!');
      return;
    }
    setError('');

    try {
      const { confirmPassword, ...signupData } = formData;
      const response = await fetch(apiUrl('/api/auth/signup'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...signupData, role })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration Successful!');
        navigate('/login');
      } else {
        setError(data.message || 'Signup failed!');
      }
    } catch (err) {
      setError('Server error, please try again later.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join FoodVerse today</p>

        {/* Role Selector Tabs */}
        <div className="role-tabs">
          <button 
            type="button"
            className={role === 'customer' ? 'active' : ''} 
            onClick={() => setRole('customer')}
          >
            Customer
          </button>
          <button 
            type="button"
            className={role === 'restaurant_owner' ? 'active' : ''} 
            onClick={() => setRole('restaurant_owner')}
          >
            Restaurant Owner
          </button>
          <button 
            type="button"
            className={role === 'admin' ? 'active' : ''} 
            onClick={() => setRole('admin')}
          >
            Admin
          </button>
        </div>

        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
            />
          </div>

          <input 
            type="text" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />

          <button type="submit" className="auth-btn">Sign Up as {role.replace('_', ' ')}</button>
        </form>

        <p className="auth-footer">
          Already Have Account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;