const express = require('express');
const cors = require('cors');

const restaurantRoutes = require('./routes/restaurantRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, mode: 'hardcoded' });
});

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
