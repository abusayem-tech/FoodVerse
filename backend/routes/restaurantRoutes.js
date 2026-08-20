const express = require('express');
const router = express.Router();
const { restaurants } = require('../data/hardcodedStore');

router.get('/', (_req, res) => {
  res.json(restaurants);
});

router.get('/:id', (req, res) => {
  const restaurant = restaurants.find((item) => String(item._id) === String(req.params.id));
  if (!restaurant) {
    return res.status(404).json({ message: 'Restaurant not found' });
  }
  res.json(restaurant);
});

module.exports = router;
