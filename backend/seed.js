const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/cravebox')
  .then(() => console.log("MongoDB Connected for Seeding"))
  .catch(err => console.log(err));

const sampleRestaurants = [
    {
        name: "Burger Xpress - Banani",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        rating: 4.5,
        deliveryTime: "20-30 min",
        menuItems: [
            {
                itemName: "Chicken Cheese Burger",
                price: 219,
                description: "Juicy chicken patty topped with melted cheese and fresh lettuce.",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200"
            },
            {
                itemName: "Beef Cheese Burger",
                price: 249,
                description: "Classic beef patty with cheddar cheese and special sauce.",
                image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200"
            }
        ]
    },
    {
        name: "Asian Delight - Gulshan",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
        rating: 4.8,
        deliveryTime: "15-25 min",
        menuItems: [
            {
                itemName: "Chicken Chowmein",
                price: 243,
                description: "Stir-fried noodles with shredded chicken and veggies.",
                image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200"
            },
            {
                itemName: "Rice Bowl with Crispy Chicken",
                price: 232,
                description: "Hot egg fried rice served with crispy fried chicken bites.",
                image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200"
            }
        ]
    }
];

const seedData = async () => {
    try {
        await Restaurant.deleteMany({});
        await Restaurant.insertMany(sampleRestaurants);
        console.log("Database Seeded Successfully!");

        await User.deleteMany({ email: "test@gmail.com" });
        const hashedPassword = await bcrypt.hash('123456', 10);
        await User.create({
            firstName: "Test",
            lastName: "User",
            phone: "01700000000",
            email: "test@gmail.com",
            password: hashedPassword,
            role: "customer"
        });
        console.log("Test User Created Successfully!");

    } catch (err) {
        console.error("Seeding Error:", err);
    } finally {
        mongoose.connection.close();
    }
};

seedData();