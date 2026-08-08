const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    deliveryTime: { type: String, required: true },
    menuItems: [{
        itemName: String,
        price: Number,
        description: String,
        image: String
    }]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);