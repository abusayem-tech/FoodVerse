const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key_12345';

// ১. সাইনআপ এপিআই (SIGNUP ROUTE)
router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, phone, email, password, role } = req.body;

    if (!firstName || !lastName || !phone || !email || !password) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    // ইমেইল বা ফোন নম্বর দিয়ে চেক করা (আগে থেকে আছে কি না)
    const existingUser = await User.findOne({ 
      $or: [{ email }, { phone }] 
    });
    
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email or phone number already exists!' });
    }

    // পাসওয়ার্ড হ্যাস (Encrypt) করা
    const hashedPassword = await bcrypt.hash(password, 10);

    // নতুন ইউজার ডাটাবেজে সেভ করা
    const newUser = new User({
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
      role: role || 'customer'
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });

  } catch (err) {
    res.status(500).json({ message: 'Server Error during signup', error: err.message });
  }
});

// ২. লগইন এপিআই (LOGIN ROUTE)
router.post('/login', async (req, res) => {
  try {
    const { identifier, password } = req.body; // identifier = Email or Phone Number

    // ইমেইল অথবা ফোন নম্বর দিয়ে ইউজার খোঁজা
    const user = await User.findOne({
      $or: [{ email: identifier }, { phone: identifier }]
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid Email/Phone or Password!' });
    }

    // পাসওয়ার্ড পরীক্ষা করা
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid Email/Phone or Password!' });
    }

    // JWT টোকেন জেনারেট করা
    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful!',
      token,
      user: {
        _id: user._id,
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ message: 'Server Error during login', error: err.message });
  }
});

// ৩. প্রোফাইল আপডেট এপিআই (PROFILE UPDATE ROUTE)
router.put('/update-profile', async (req, res) => {
  const { userId, firstName, lastName, phone } = req.body;
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  try {
    if (!token) {
      return res.status(401).json({ message: 'Authentication required!' });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch {
      return res.status(401).json({ message: 'Invalid or expired token!' });
    }

    if (String(decoded.id) !== String(userId)) {
      return res.status(403).json({ message: 'You can only update your own profile!' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { firstName, lastName, phone },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found!' });
    }

    res.status(200).json({
      message: 'Profile updated successfully!',
      user: {
        _id: updatedUser._id,
        id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        phone: updatedUser.phone,
        role: updatedUser.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
});

module.exports = router;