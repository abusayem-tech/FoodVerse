const JWT_SECRET = 'foodverse_hardcoded_jwt_secret_2026';

const users = [
  {
    _id: 'demo-customer-001',
    firstName: 'Demo',
    lastName: 'Customer',
    phone: '01711111111',
    email: 'customer@foodverse.com',
    password: '$2b$10$GpfEQmyWCoEgF9pCFouQ/u.FGw.b8T3w7GL3OWlEPuAjEstmUQSj6',
    role: 'customer'
  },
  {
    _id: 'demo-owner-001',
    firstName: 'Demo',
    lastName: 'Owner',
    phone: '01722222222',
    email: 'owner@foodverse.com',
    password: '$2b$10$MBmN/hWZU8KoWY51g7a.S.9d2CFyDCaZhpVaStAP8GYtUdHTagFnu',
    role: 'restaurant_owner'
  },
  {
    _id: 'demo-admin-001',
    firstName: 'Demo',
    lastName: 'Admin',
    phone: '01733333333',
    email: 'admin@foodverse.com',
    password: '$2b$10$Duj2bMJw3hgExgceMlcPaukVdA4yrHNBKW4tJSqQg7eGU4pQdzaKm',
    role: 'admin'
  }
];

const restaurants = [
  {
    _id: 'rest-001',
    name: 'Burger Xpress - Banani',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    rating: 4.5,
    deliveryTime: '20-30 min',
    menuItems: [
      {
        itemName: 'Chicken Cheese Burger',
        price: 219,
        description: 'Juicy chicken patty topped with melted cheese and fresh lettuce.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200'
      },
      {
        itemName: 'Beef Cheese Burger',
        price: 249,
        description: 'Classic beef patty with cheddar cheese and special sauce.',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200'
      }
    ]
  },
  {
    _id: 'rest-002',
    name: 'Asian Delight - Gulshan',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500',
    rating: 4.8,
    deliveryTime: '15-25 min',
    menuItems: [
      {
        itemName: 'Chicken Chowmein',
        price: 243,
        description: 'Stir-fried noodles with shredded chicken and veggies.',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200'
      },
      {
        itemName: 'Rice Bowl with Crispy Chicken',
        price: 232,
        description: 'Hot egg fried rice served with crispy fried chicken bites.',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200'
      }
    ]
  }
];

function publicUser(user) {
  return {
    _id: user._id,
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    role: user.role
  };
}

module.exports = {
  JWT_SECRET,
  users,
  restaurants,
  publicUser
};
