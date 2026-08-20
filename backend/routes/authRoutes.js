const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, users, publicUser } = require('../data/hardcodedStore');

router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, phone, email, password, role } = req.body;

    if (!firstName || !lastName || !phone || !email || !password) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    const existingUser = users.find(
      (user) => user.email === email || user.phone === phone
    );

    if (existingUser) {
      return res.status(400).json({ message: 'User with this email or phone number already exists!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      _id: `user-${Date.now()}`,
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
      role: role || 'customer'
    };

    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error during signup', error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const user = users.find(
      (item) => item.email === identifier || item.phone === identifier
    );

    if (!user) {
      return res.status(400).json({ message: 'Invalid Email/Phone or Password!' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid Email/Phone or Password!' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful!',
      token,
      user: publicUser(user)
    });
  } catch (err) {
    res.status(500).json({ message: 'Server Error during login', error: err.message });
  }
});

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

    const user = users.find((item) => String(item._id) === String(userId));
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;

    res.status(200).json({
      message: 'Profile updated successfully!',
      user: publicUser(user)
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
});

module.exports = router;
