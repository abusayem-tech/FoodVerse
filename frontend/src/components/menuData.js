export const restaurantData = {
  // 1. Biryani & Kacchi
  1: {
    id: 1,
    name: "Hazi Nanna Biriyani",
    cuisine: "Kacchi Biryani, Beef Biryani, Borhani",
    rating: "4.7",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000",
    menu: [
      { id: 101, name: "Kacchi Biryani", price: "Tk 350", category: "Biryani", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500", description: "Traditional Old Dhaka mutton kacchi biryani." },
      { id: 102, name: "Beef Biryani", price: "Tk 280", category: "Biryani", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=500", description: "Aromatic rice cooked with tender beef chunks." },
      { id: 103, name: "Borhani", price: "Tk 80", category: "Drinks", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=500", description: "Traditional spicy curd drink." }
    ]
  },
  2: {
    id: 2,
    name: "Roohani-Gulshan",
    cuisine: "Kacchi, Chicken & Beef Biryani",
    rating: "4.6",
    deliveryTime: "30-40 min",
    bannerImg: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000",
    menu: [
      { id: 201, name: "Kacchi Biryani", price: "Tk 420", category: "Biryani", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500", description: "Premium mutton kacchi served with potato." },
      { id: 202, name: "Chicken Biryani", price: "Tk 320", category: "Biryani", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=500", description: "Flavorful biryani rice with juicy chicken." },
      { id: 203, name: "Beef Biryani", price: "Tk 350", category: "Biryani", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=500", description: "Richly spiced beef biryani." }
    ]
  },
  3: {
    id: 3,
    name: "Sultan’s Dine",
    cuisine: "Kacchi, Morog Polao, Roast, Kebabs",
    rating: "4.8",
    deliveryTime: "30-45 min",
    bannerImg: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000",
    menu: [
      { id: 301, name: "Kacchi Biryani", price: "Tk 450", category: "Biryani", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500", description: "Special mutton kacchi with salad and potato." },
      { id: 302, name: "Chicken Biryani", price: "Tk 360", category: "Biryani", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=500", description: "Delicious chicken biryani cooked with ghee." },
      { id: 303, name: "Morog Polao", price: "Tk 380", category: "Polao", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500", description: "Traditional Bengali chicken polao with egg." },
      { id: 304, name: "Chicken Roast", price: "Tk 160", category: "Sides", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500", description: "Rich gravy chicken roast." },
      { id: 305, name: "Chicken Chap", price: "Tk 180", category: "Kebab", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500", description: "Fried spicy chicken chap." },
      { id: 306, name: "Seekh Kebab", price: "Tk 200", category: "Kebab", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500", description: "Smoky beef seekh kebab." },
      { id: 307, name: "Kebab Platter", price: "Tk 750", category: "Kebab", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500", description: "Assorted kebabs platter for two." }
    ]
  },
  4: {
    id: 4,
    name: "Kacchi Bhai",
    cuisine: "Kacchi, Morog Polao, Roast, Kebabs",
    rating: "4.7",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000",
    menu: [
      { id: 401, name: "Kacchi Biryani", price: "Tk 420", category: "Biryani", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500", description: "Basmati rice mutton kacchi." },
      { id: 402, name: "Morog Polao", price: "Tk 350", category: "Polao", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500", description: "Shahi morog polao." },
      { id: 403, name: "Chicken Roast", price: "Tk 150", category: "Sides", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500", description: "Traditional roasted chicken piece." },
      { id: 404, name: "Chicken Chap", price: "Tk 170", category: "Kebab", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500", description: "Spicy pan-fried chicken chap." },
      { id: 405, name: "Beef Seekh Kebab", price: "Tk 190", category: "Kebab", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500", description: "Grilled beef seekh kebab." },
      { id: 406, name: "Chicken Tikka", price: "Tk 180", category: "Kebab", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500", description: "Charcoal grilled chicken tikka." }
    ]
  },
  5: {
    id: 5,
    name: "Fakhruddin",
    cuisine: "Kacchi, Beef Tehari, Chicken Roast",
    rating: "4.5",
    deliveryTime: "30-40 min",
    bannerImg: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000",
    menu: [
      { id: 501, name: "Kacchi Biryani", price: "Tk 440", category: "Biryani", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500", description: "Classic Fakhruddin kacchi biryani." },
      { id: 502, name: "Beef Tehari", price: "Tk 300", category: "Tehari", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=500", description: "Old Dhaka style mustard oil beef tehari." },
      { id: 503, name: "Chicken Roast", price: "Tk 160", category: "Sides", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500", description: "Rich gravy chicken roast." }
    ]
  },

  // 2. Bengali Meals
  6: {
    id: 6,
    name: "Nawab Chatga",
    cuisine: "Rice, Fish Curry, Bhorta, Shutki, Beef",
    rating: "4.6",
    deliveryTime: "30-40 min",
    bannerImg: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000",
    menu: [
      { id: 601, name: "Steamed Rice", price: "Tk 50", category: "Rice", img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=500", description: "Plain steamed rice." },
      { id: 602, name: "Fish Curry", price: "Tk 250", category: "Curry", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=500", description: "Fresh river fish cooked in spicy curry." },
      { id: 603, name: "Assorted Bhorta", price: "Tk 120", category: "Bhorta", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=500", description: "Platter of 3 types of traditional bhorta." },
      { id: 604, name: "Shutki Bhuna", price: "Tk 160", category: "Bhorta", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=500", description: "Spicy dried fish bhuna." },
      { id: 605, name: "Chittagong Beef Kala Bhuna", price: "Tk 380", category: "Meat", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500", description: "Authentic Chittagong style dark beef dish." }
    ]
  },
  7: {
    id: 7,
    name: "Terracotta Tales",
    cuisine: "Bengali Meals, Bhorta, Fish, Meat",
    rating: "4.5",
    deliveryTime: "35-45 min",
    bannerImg: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000",
    menu: [
      { id: 701, name: "Bengali Rice Meal", price: "Tk 350", category: "Platter", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=500", description: "Rice, dal, 2 bhortas, and choice of meat/fish." },
      { id: 702, name: "Special Bhorta Platter", price: "Tk 180", category: "Bhorta", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=500", description: "Mixed traditional bhortas." },
      { id: 703, name: "Ilish Fish Curry", price: "Tk 450", category: "Fish", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=500", description: "Hilsa fish cooked in mustard gravy." },
      { id: 704, name: "Beef Curry", price: "Tk 320", category: "Meat", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500", description: "Spicy home-style beef curry." }
    ]
  },
  8: {
    id: 8,
    name: "Paturi Banani",
    cuisine: "Paturi, Fish Dishes, Bhorta, Rice Meals",
    rating: "4.6",
    deliveryTime: "30-40 min",
    bannerImg: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1000",
    menu: [
      { id: 801, name: "Ilish Paturi", price: "Tk 480", category: "Paturi", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=500", description: "Hilsa marinated in mustard paste wrapped in banana leaf." },
      { id: 802, name: "Bhetki Paturi", price: "Tk 420", category: "Paturi", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=500", description: "Bhetki fish fillet baked in leaf." },
      { id: 803, name: "Fish Curry", price: "Tk 280", category: "Fish", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=500", description: "Traditional Bengali fish curry." },
      { id: 804, name: "Bhorta Thali", price: "Tk 200", category: "Bhorta", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=500", description: "Rice with 4 types of bhorta and dal." }
    ]
  },
  9: {
    id: 9,
    name: "Star Kabab & Restaurant",
    cuisine: "Beef Bhuna, Chicken Curry, Kebabs, Paratha",
    rating: "4.7",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000",
    menu: [
      { id: 901, name: "Beef Bhuna", price: "Tk 220", category: "Curry", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500", description: "Famous Star Kabab thick gravy beef bhuna." },
      { id: 902, name: "Chicken Curry", price: "Tk 180", category: "Curry", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500", description: "Home-style spicy chicken curry." },
      { id: 903, name: "Special Paratha", price: "Tk 30", category: "Bread", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=500", description: "Crispy layered paratha." },
      { id: 904, name: "Thick Dal", price: "Tk 60", category: "Sides", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=500", description: "Tarka dal cooked with butter." },
      { id: 905, name: "Beef Seekh Kebab", price: "Tk 160", category: "Kebab", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500", description: "Charcoal roasted beef seekh." },
      { id: 906, name: "Chicken Tikka", price: "Tk 170", category: "Kebab", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500", description: "Spicy grilled chicken tikka." },
      { id: 907, name: "Chicken Chap", price: "Tk 160", category: "Kebab", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500", description: "Deep fried chicken chap." }
    ]
  },
  10: {
    id: 10,
    name: "Khana’s",
    cuisine: "Rice Meals, Beef & Chicken Curry, Bhorta",
    rating: "4.5",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000",
    menu: [
      { id: 1001, name: "Khana's Rice Bowl", price: "Tk 220", category: "Rice Bowl", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500", description: "Rice served with choice of meat curry." },
      { id: 1002, name: "Beef Curry", price: "Tk 260", category: "Curry", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500", description: "Rich Bangladeshi beef curry." },
      { id: 1003, name: "Chicken Curry", price: "Tk 200", category: "Curry", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500", description: "Spicy chicken gravy dish." },
      { id: 1004, name: "Assorted Bhorta", price: "Tk 90", category: "Bhorta", img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=500", description: "Mixed vegetables mashed bhorta." }
    ]
  },

  // 3. Burger & Fast Food
  11: {
    id: 11,
    name: "Chillox",
    cuisine: "Burgers, Loaded Fries, Chicken Wings",
    rating: "4.8",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000",
    menu: [
      { id: 1101, name: "Beef Cheeseburger", price: "Tk 260", category: "Burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500", description: "Juicy beef patty with melted cheese." },
      { id: 1102, name: "Crispy Chicken Burger", price: "Tk 230", category: "Burgers", img: "https://images.unsplash.com/photo-1525164286253-04e68b9d94c3?q=80&w=500", description: "Deep fried chicken fillet with special sauce." },
      { id: 1103, name: "Loaded Fries", price: "Tk 220", category: "Sides", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500", description: "Fries topped with melted cheese & chicken bits." },
      { id: 1104, name: "BBQ Chicken Wings (6 pcs)", price: "Tk 240", category: "Sides", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=500", description: "Smoky barbecue glazed wings." }
    ]
  },
  12: {
    id: 12,
    name: "Madchef",
    cuisine: "Gourmet Burgers, Fries, Wings",
    rating: "4.7",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000",
    menu: [
      { id: 1201, name: "Dhaka City Beef Burger", price: "Tk 320", category: "Burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500", description: "Signature spicy beef burger with naga sauce." },
      { id: 1202, name: "Chicken Monster Burger", price: "Tk 290", category: "Burgers", img: "https://images.unsplash.com/photo-1525164286253-04e68b9d94c3?q=80&w=500", description: "Double chicken patty with extra cheese." },
      { id: 1203, name: "Naga Wings", price: "Tk 250", category: "Sides", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=500", description: "Extremely spicy naga wings." },
      { id: 1204, name: "French Fries", price: "Tk 130", category: "Sides", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500", description: "Crispy salted French fries." }
    ]
  },
  13: {
    id: 13,
    name: "Takeout",
    cuisine: "Burgers, Wraps, Wings, Sandwiches",
    rating: "4.7",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000",
    menu: [
      { id: 1301, name: "Takeout Special Burger", price: "Tk 280", category: "Burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500", description: "Classic juicy beef patty burger." },
      { id: 1302, name: "Chicken Wings (6 pcs)", price: "Tk 220", category: "Sides", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=500", description: "Spicy fried wings." },
      { id: 1303, name: "Club Sandwich", price: "Tk 210", category: "Sandwich", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=500", description: "Tripled layered chicken sandwich." },
      { id: 1304, name: "French Fries", price: "Tk 120", category: "Sides", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500", description: "Crispy golden fries." },
      { id: 1305, name: "Chicken Wrap", price: "Tk 220", category: "Wraps", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Grilled chicken wrap with mayo." },
      { id: 1306, name: "Beef Wrap", price: "Tk 250", category: "Wraps", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Juicy beef strips wrap." }
    ]
  },
  14: {
    id: 14,
    name: "Burger Lab",
    cuisine: "Classic Beef, Cheese & Chicken Burgers",
    rating: "4.6",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000",
    menu: [
      { id: 1401, name: "Classic Beef Burger", price: "Tk 270", category: "Burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500", description: "Original smash beef burger." },
      { id: 1402, name: "Double Cheese Burger", price: "Tk 340", category: "Burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500", description: "Double patty topped with double cheese." },
      { id: 1403, name: "Crispy Chicken Burger", price: "Tk 240", category: "Burgers", img: "https://images.unsplash.com/photo-1525164286253-04e68b9d94c3?q=80&w=500", description: "Spicy fried chicken burger." }
    ]
  },
  15: {
    id: 15,
    name: "BFC",
    cuisine: "Fried Chicken, Chicken Burgers, Nuggets",
    rating: "4.4",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1000",
    menu: [
      { id: 1501, name: "Fried Chicken (2 pcs)", price: "Tk 220", category: "Chicken", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=500", description: "Crispy crunchy fried chicken." },
      { id: 1502, name: "BFC Chicken Burger", price: "Tk 190", category: "Burgers", img: "https://images.unsplash.com/photo-1525164286253-04e68b9d94c3?q=80&w=500", description: "Crispy chicken patty burger." },
      { id: 1503, name: "Chicken Nuggets (6 pcs)", price: "Tk 180", category: "Sides", img: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500", description: "Golden fried chicken nuggets." },
      { id: 1504, name: "French Fries", price: "Tk 110", category: "Sides", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500", description: "Classic fries." }
    ]
  },

  // 4. Pizza & Pasta
  16: {
    id: 16,
    name: "PizzaBurg Bashundhara",
    cuisine: "Pizza, Pasta, Burger, BBQ Pizza",
    rating: "4.8",
    deliveryTime: "30-40 min",
    bannerImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000",
    menu: [
      { id: 1601, name: "Chicken Pizza (9 inch)", price: "Tk 380", category: "Pizza", img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=500", description: "Cheesy chicken loaded pizza." },
      { id: 1602, name: "Beef Pizza (9 inch)", price: "Tk 420", category: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500", description: "Spicy beef minced pizza." },
      { id: 1603, name: "BBQ Chicken Pizza", price: "Tk 450", category: "Pizza", img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=500", description: "Pizza topped with smoky BBQ chicken." },
      { id: 1604, name: "Oven Baked Pasta", price: "Tk 290", category: "Pasta", img: "https://images.unsplash.com/photo-1555949258-eb67b280806a?q=80&w=500", description: "Cheesy baked pasta with chicken." },
      { id: 1605, name: "Pizzaburg Special Burger", price: "Tk 220", category: "Burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500", description: "Juicy chicken patty burger." }
    ]
  },
  17: {
    id: 17,
    name: "Pizzaburg Gulshan",
    cuisine: "Pizza, Pasta, Burger, Fries",
    rating: "4.7",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000",
    menu: [
      { id: 1701, name: "Supreme Pizza", price: "Tk 490", category: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500", description: "Loaded with all meat toppings & vegetables." },
      { id: 1702, name: "White Sauce Pasta", price: "Tk 310", category: "Pasta", img: "https://images.unsplash.com/photo-1555949258-eb67b280806a?q=80&w=500", description: "Creamy white sauce penne pasta." },
      { id: 1703, name: "Cheese Burger", price: "Tk 230", category: "Burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500", description: "Classic beef cheeseburger." },
      { id: 1704, name: "French Fries", price: "Tk 130", category: "Sides", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500", description: "Crispy salted fries." }
    ]
  },
  18: {
    id: 18,
    name: "Pizza Hut",
    cuisine: "Pizza, Pasta, Garlic Bread, Desserts",
    rating: "4.6",
    deliveryTime: "30-45 min",
    bannerImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000",
    menu: [
      { id: 1801, name: "Chicken Supreme Pizza", price: "Tk 650", category: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500", description: "Chicken, mushrooms, capsicum & mozzarella." },
      { id: 1802, name: "Beef Pepperoni Pizza", price: "Tk 690", category: "Pizza", img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=500", description: "Classic beef pepperoni with cheese crust." },
      { id: 1803, name: "Margherita Pizza", price: "Tk 450", category: "Pizza", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500", description: "Classic tomato sauce and mozzarella cheese." },
      { id: 1804, name: "Spaghetti Bolognese", price: "Tk 380", category: "Pasta", img: "https://images.unsplash.com/photo-1555949258-eb67b280806a?q=80&w=500", description: "Spaghetti in minced beef tomato sauce." }
    ]
  },
  19: {
    id: 19,
    name: "Domino’s Pizza",
    cuisine: "Pizza, Garlic Bread, Choco Lava",
    rating: "4.7",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000",
    menu: [
      { id: 1901, name: "Chicken Dominator Pizza", price: "Tk 590", category: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500", description: "Loaded with double chicken toppings." },
      { id: 1902, name: "Beef Pepperoni Pizza", price: "Tk 620", category: "Pizza", img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=500", description: "Beef pepperoni slices on mozzarella." },
      { id: 1903, name: "Double Cheese Margherita", price: "Tk 420", category: "Pizza", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500", description: "Extra cheese Margherita pizza." },
      { id: 1904, name: "Stuffed Garlic Bread", price: "Tk 190", category: "Sides", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500", description: "Garlic bread stuffed with cheese and jalapeño." }
    ]
  },
  20: {
    id: 20,
    name: "Cheez",
    cuisine: "Pizza, Pasta, Lasagna, Burger",
    rating: "4.8",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1555949258-eb67b280806a?q=80&w=1000",
    menu: [
      { id: 2001, name: "Cheez Special Pizza", price: "Tk 520", category: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500", description: "Triple cheese infused chicken pizza." },
      { id: 2002, name: "Creamy Chicken Pasta", price: "Tk 340", category: "Pasta", img: "https://images.unsplash.com/photo-1555949258-eb67b280806a?q=80&w=500", description: "Rich white cream sauce pasta." },
      { id: 2003, name: "Beef Lasagna", price: "Tk 390", category: "Lasagna", img: "https://images.unsplash.com/photo-1555949258-eb67b280806a?q=80&w=500", description: "Layered pasta with minced beef & cheese." },
      { id: 2004, name: "Juicy Patty Burger", price: "Tk 250", category: "Burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500", description: "Cheese melted beef burger." }
    ]
  },

  // 5. Chinese & Thai
  21: {
    id: 21,
    name: "Boomers Café",
    cuisine: "Fried Rice, Chow Mein, Chilli Chicken, Soup",
    rating: "4.5",
    deliveryTime: "30-40 min",
    bannerImg: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000",
    menu: [
      { id: 2101, name: "Chicken Fried Rice", price: "Tk 250", category: "Rice", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=500", description: "Egg and chicken fried rice." },
      { id: 2102, name: "Chicken Chow Mein", price: "Tk 260", category: "Noodles", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500", description: "Stir-fried noodles with chicken & veggies." },
      { id: 2103, name: "Chicken Chilli Onion", price: "Tk 320", category: "Main", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=500", description: "Spicy gravy chicken with onions." },
      { id: 2104, name: "Thai Clear Soup", price: "Tk 220", category: "Soup", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500", description: "Lemongrass hot & sour clear soup." },
      { id: 2105, name: "Fried Wonton (6 pcs)", price: "Tk 200", category: "Sides", img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=500", description: "Crispy fried chicken wontons." }
    ]
  },
  22: {
    id: 22,
    name: "Grand Prince Thai & Chinese",
    cuisine: "Fried Rice, Noodles, Thai Soup, Chilli Chicken",
    rating: "4.6",
    deliveryTime: "30-45 min",
    bannerImg: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000",
    menu: [
      { id: 2201, name: "Special Fried Rice", price: "Tk 290", category: "Rice", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=500", description: "Fried rice with chicken, prawn & cashewnuts." },
      { id: 2202, name: "Hakka Noodles", price: "Tk 280", category: "Noodles", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500", description: "Chinese style stir fried noodles." },
      { id: 2203, name: "Thick Thai Soup", price: "Tk 260", category: "Soup", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500", description: "Traditional thick Thai chicken soup." },
      { id: 2204, name: "Dry Chicken Chilli", price: "Tk 350", category: "Main", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=500", description: "Spicy dry fried chicken with capsicum." }
    ]
  },
  23: {
    id: 23,
    name: "Laughing Buddha",
    cuisine: "Thai Curry, Pad Thai, Thai Soup, Seafood",
    rating: "4.7",
    deliveryTime: "35-45 min",
    bannerImg: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000",
    menu: [
      { id: 2301, name: "Thai Red Curry", price: "Tk 420", category: "Curry", img: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=500", description: "Coconut milk red curry with chicken." },
      { id: 2302, name: "Chicken Pad Thai", price: "Tk 380", category: "Noodles", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500", description: "Flat rice noodles stir fried with peanuts & egg." },
      { id: 2303, name: "Tom Yum Soup", price: "Tk 320", category: "Soup", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500", description: "Hot & sour prawn soup." },
      { id: 2304, name: "Butter Garlic Prawn", price: "Tk 550", category: "Seafood", img: "https://images.unsplash.com/photo-1535400255456-984241443b29?q=80&w=500", description: "Prawns sautéed in garlic butter." }
    ]
  },
  24: {
    id: 24,
    name: "Sukumvit Thai Restaurant",
    cuisine: "Authentic Thai Soup, Curry, Fried Rice",
    rating: "4.8",
    deliveryTime: "30-40 min",
    bannerImg: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000",
    menu: [
      { id: 2401, name: "Authentic Tom Yum Soup", price: "Tk 350", category: "Soup", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500", description: "Original Thai spicy prawn soup." },
      { id: 2402, name: "Thai Green Curry", price: "Tk 450", category: "Curry", img: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=500", description: "Green curry paste cooked with chicken and eggplant." },
      { id: 2403, name: "Thai Basil Fried Rice", price: "Tk 320", category: "Rice", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=500", description: "Spicy fried rice with fresh Thai basil leaves." },
      { id: 2404, name: "Stir Fried Glass Noodles", price: "Tk 360", category: "Noodles", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500", description: "Glass noodles with mixed seafood." }
    ]
  },
  25: {
    id: 25,
    name: "Mainland China",
    cuisine: "Chow Mein, Manchurian, Sweet & Sour Chicken",
    rating: "4.8",
    deliveryTime: "35-50 min",
    bannerImg: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1000",
    menu: [
      { id: 2501, name: "Yangzhou Fried Rice", price: "Tk 380", category: "Rice", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=500", description: "Classic Chinese style fried rice." },
      { id: 2502, name: "Chicken Chow Mein", price: "Tk 360", category: "Noodles", img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500", description: "Traditional Chinese pan fried noodles." },
      { id: 2503, name: "Chicken Manchurian", price: "Tk 420", category: "Main", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=500", description: "Deep fried chicken balls in coriander soy gravy." },
      { id: 2504, name: "Sweet & Sour Chicken", price: "Tk 440", category: "Main", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=500", description: "Crispy chicken in pineapple sweet sour sauce." }
    ]
  },

  // 6. Kebab & Grill
  26: {
    id: 26,
    name: "Peshawari Kitchen",
    cuisine: "Seekh Kebab, Chicken Tikka, Naan, Grill",
    rating: "4.7",
    deliveryTime: "30-40 min",
    bannerImg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000",
    menu: [
      { id: 2601, name: "Beef Seekh Kebab", price: "Tk 240", category: "Kebab", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500", description: "Juicy Peshawar beef seekh." },
      { id: 2602, name: "Chicken Tikka (4 pcs)", price: "Tk 260", category: "Kebab", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500", description: "Spicy marinated grilled chicken." },
      { id: 2603, name: "Grilled Chicken (Quarter)", price: "Tk 180", category: "Grill", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500", description: "Charcoal smoky grilled chicken." },
      { id: 2604, name: "Butter Naan", price: "Tk 50", category: "Bread", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=500", description: "Soft clay oven baked butter flatbread." }
    ]
  },
  27: {
    id: 27,
    name: "Kabab Factory",
    cuisine: "Beef Kebab, Tandoori Chicken, Naan",
    rating: "4.6",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000",
    menu: [
      { id: 2701, name: "Reshmi Kebab", price: "Tk 280", category: "Kebab", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500", description: "Melt in mouth chicken reshmi kebab." },
      { id: 2702, name: "Special Beef Kebab", price: "Tk 250", category: "Kebab", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500", description: "Minced spicy beef kebab." },
      { id: 2703, name: "Tandoori Chicken", price: "Tk 190", category: "Grill", img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=500", description: "Traditional tandoor baked chicken." },
      { id: 2704, name: "Garlic Naan", price: "Tk 60", category: "Bread", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=500", description: "Naan topped with garlic butter." }
    ]
  },

  // 7. Shawarma & Wraps
  28: {
    id: 28,
    name: "Shawarma Damasco (Uttara)",
    cuisine: "Chicken & Beef Shawarma, Arabic Wrap",
    rating: "4.8",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1000",
    menu: [
      { id: 2801, name: "Chicken Shawarma", price: "Tk 180", category: "Shawarma", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Middle Eastern chicken wrapped in pita." },
      { id: 2802, name: "Beef Shawarma", price: "Tk 210", category: "Shawarma", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Slow roasted beef pita wrap." },
      { id: 2803, name: "Arabic Shawarma Platter", price: "Tk 320", category: "Platter", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Sliced shawarma with garlic sauce & fries." }
    ]
  },
  29: {
    id: 29,
    name: "Shawarma Damasco (Bashundhara)",
    cuisine: "Shawarma, Wraps, Garlic Platter",
    rating: "4.8",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1000",
    menu: [
      { id: 2901, name: "Chicken Shawarma", price: "Tk 180", category: "Shawarma", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Classic Syrian chicken wrap." },
      { id: 2902, name: "Beef Shawarma", price: "Tk 210", category: "Shawarma", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Juicy beef pita roll." },
      { id: 2903, name: "Shawarma Platter", price: "Tk 340", category: "Platter", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Shawarma cut pieces served with toum sauce." }
    ]
  },
  30: {
    id: 30,
    name: "Shawarma House",
    cuisine: "Shawarma, Wraps, Dips",
    rating: "4.5",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1000",
    menu: [
      { id: 3001, name: "Classic Chicken Shawarma", price: "Tk 160", category: "Shawarma", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Chicken slices with garlic mayo in bread." },
      { id: 3002, name: "Beef Wrap", price: "Tk 190", category: "Wraps", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Tortilla wrap filled with roasted beef." }
    ]
  },
  31: {
    id: 31,
    name: "Herfy",
    cuisine: "Burgers, Chicken & Beef Wraps",
    rating: "4.5",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000",
    menu: [
      { id: 3101, name: "Chicken Tortilla Wrap", price: "Tk 260", category: "Wraps", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Crispy chicken wrap." },
      { id: 3102, name: "Beef Wrap", price: "Tk 290", category: "Wraps", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Grilled beef wrap with veggies." },
      { id: 3103, name: "Super Herfy Burger", price: "Tk 320", category: "Burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500", description: "Large double beef patty burger." }
    ]
  },

  // 8. Desserts & Bakery
  32: {
    id: 32,
    name: "Cooper's Gulshan 2",
    cuisine: "Cakes, Pastries, Cookies",
    rating: "4.7",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000",
    menu: [
      { id: 3201, name: "Chocolate Cake Slice", price: "Tk 140", category: "Cake", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500", description: "Rich fudge chocolate slice." },
      { id: 3202, name: "Black Forest Pastry", price: "Tk 130", category: "Pastry", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500", description: "Whipped cream & cherry chocolate pastry." },
      { id: 3203, name: "Butter Cookies Box", price: "Tk 250", category: "Cookies", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=500", description: "Freshly baked butter cookies." }
    ]
  },
  33: {
    id: 33,
    name: "The Flourist",
    cuisine: "Specialty Cakes, Pastries, Dessert",
    rating: "4.8",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000",
    menu: [
      { id: 3301, name: "Red Velvet Cake Slice", price: "Tk 220", category: "Cake", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500", description: "Cream cheese frosted red velvet slice." },
      { id: 3302, name: "Eclair Pastry", price: "Tk 150", category: "Pastry", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500", description: "Custard filled chocolate eclair." },
      { id: 3303, name: "Chocolate Choco Chip Cookies", price: "Tk 180", category: "Cookies", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=500", description: "Chewy chocolate chip cookies." }
    ]
  },
  34: {
    id: 34,
    name: "Secret Recipe",
    cuisine: "Cheesecake, Chocolate Cake, Brownies",
    rating: "4.7",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1000",
    menu: [
      { id: 3401, name: "New York Cheesecake", price: "Tk 320", category: "Cheesecake", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500", description: "Classic rich baked cheesecake." },
      { id: 3402, name: "Indulgent Fudge Cake", price: "Tk 280", category: "Cake", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500", description: "Layered dark chocolate cake." },
      { id: 3403, name: "Fudge Brownie", price: "Tk 160", category: "Dessert", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500", description: "Fudgy walnut chocolate brownie." }
    ]
  },
  35: {
    id: 35,
    name: "Tabaq Coffee",
    cuisine: "Coffee, Waffle, Cheesecake, Brownie",
    rating: "4.8",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000",
    menu: [
      { id: 3501, name: "Nutella Waffle", price: "Tk 260", category: "Waffle", img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=500", description: "Warm waffle topped with Nutella." },
      { id: 3502, name: "Blueberry Cheesecake", price: "Tk 310", category: "Dessert", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500", description: "Cheesecake with blueberry compote." },
      { id: 3503, name: "Sizzling Brownie", price: "Tk 240", category: "Dessert", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500", description: "Hot brownie served with chocolate sauce." }
    ]
  },
  36: {
    id: 36,
    name: "The White Canary Café",
    cuisine: "Cake, Waffles, Specialty Dessert, Coffee",
    rating: "4.7",
    deliveryTime: "25-35 min",
    bannerImg: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000",
    menu: [
      { id: 3601, name: "Belgian Waffle", price: "Tk 290", category: "Waffle", img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=500", description: "Classic Belgian waffle with syrup." },
      { id: 3602, name: "Salted Caramel Cake Slice", price: "Tk 260", category: "Cake", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500", description: "Moist caramel slice with sea salt glaze." }
    ]
  },

  // 9. Drinks & Beverages
  37: {
    id: 37,
    name: "Singapore Juice & Coffee Bar",
    cuisine: "Fresh Juice, Milkshake, Cold Coffee",
    rating: "4.6",
    deliveryTime: "15-25 min",
    bannerImg: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000",
    menu: [
      { id: 3701, name: "Fresh Mango Juice", price: "Tk 120", category: "Juice", img: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=500", description: "100% natural mango juice." },
      { id: 3702, name: "Chocolate Milkshake", price: "Tk 160", category: "Milkshake", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=500", description: "Thick creamy chocolate shake." },
      { id: 3703, name: "Iced Cold Coffee", price: "Tk 140", category: "Coffee", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500", description: "Refreshing sweet cold coffee." }
    ]
  },
  38: {
    id: 38,
    name: "Shahi Juice Bar",
    cuisine: "Fresh Juice, Lemonade, Shakes",
    rating: "4.5",
    deliveryTime: "15-25 min",
    bannerImg: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000",
    menu: [
      { id: 3801, name: "Special Orange Juice", price: "Tk 130", category: "Juice", img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=500", description: "Freshly squeezed orange juice." },
      { id: 3802, name: "Mint Lemonade", price: "Tk 90", category: "Juice", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500", description: "Chilled lemon juice infused with mint." },
      { id: 3803, name: "Oreo Milkshake", price: "Tk 170", category: "Milkshake", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=500", description: "Blended Oreo cookies milkshake." }
    ]
  },
  39: {
    id: 39,
    name: "North End Coffee Roasters",
    cuisine: "Specialty Coffee, Cold Brew, Iced Drinks",
    rating: "4.9",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000",
    menu: [
      { id: 3901, name: "Americano", price: "Tk 160", category: "Coffee", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500", description: "Double shot espresso over hot water." },
      { id: 3902, name: "Iced Latte", price: "Tk 230", category: "Iced Coffee", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500", description: "Espresso with chilled milk over ice." },
      { id: 3903, name: "Cold Brew Coffee", price: "Tk 250", category: "Iced Coffee", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500", description: "Steeped smooth cold coffee." }
    ]
  },
  40: {
    id: 40,
    name: "Gloria Jean’s Coffees",
    cuisine: "Coffee, Smoothies, Chilled Drinks",
    rating: "4.7",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000",
    menu: [
      { id: 4001, name: "Cappuccino", price: "Tk 240", category: "Coffee", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500", description: "Espresso topped with steamed milk froth." },
      { id: 4002, name: "Mango Smoothie", price: "Tk 280", category: "Smoothie", img: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=500", description: "Creamy mango blended smoothie." },
      { id: 4003, name: "Iced Caramel Macchiato", price: "Tk 290", category: "Iced Drinks", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500", description: "Iced espresso drizzled with caramel sauce." }
    ]
  },
  41: {
    id: 41,
    name: "Cha Time",
    cuisine: "Bubble Tea, Milk Tea, Fruit Tea",
    rating: "4.7",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1558857563-b371033873b8?q=80&w=1000",
    menu: [
      { id: 4101, name: "Pearl Milk Tea", price: "Tk 220", category: "Milk Tea", img: "https://images.unsplash.com/photo-1558857563-b371033873b8?q=80&w=500", description: "Classic milk tea with tapioca boba pearls." },
      { id: 4102, name: "Taro Milk Tea", price: "Tk 240", category: "Milk Tea", img: "https://images.unsplash.com/photo-1558857563-b371033873b8?q=80&w=500", description: "Sweet taro flavored milk tea." },
      { id: 4103, name: "Passion Fruit Tea", price: "Tk 210", category: "Fruit Tea", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500", description: "Refreshing brewed black tea with passionfruit." }
    ]
  },

  // 10. Street Food
  42: {
    id: 42,
    name: "Paribagh Street Food Zone",
    cuisine: "Fuchka, Chotpoti, Jhalmuri, Fried Snacks",
    rating: "4.6",
    deliveryTime: "15-25 min",
    bannerImg: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    menu: [
      { id: 4201, name: "Special Crispy Fuchka", price: "Tk 80", category: "Street Food", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500", description: "Crispy fuchka shells filled with spicy potato & sour tamarind water." },
      { id: 4202, name: "Special Chotpoti", price: "Tk 80", category: "Street Food", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500", description: "Spicy chickpea stew topped with grated egg." },
      { id: 4203, name: "Special Jhalmuri", price: "Tk 40", category: "Street Food", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500", description: "Puffed rice mixed with mustard oil & spices." }
    ]
  },
  43: {
    id: 43,
    name: "TSC Street Food Area",
    cuisine: "Fuchka, Chotpoti, Jhalmuri, Singara",
    rating: "4.7",
    deliveryTime: "15-25 min",
    bannerImg: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    menu: [
      { id: 4301, name: "Naga Fuchka", price: "Tk 90", category: "Street Food", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500", description: "Extremely spicy naga tamarind fuchka." },
      { id: 4302, name: "Doi Fuchka", price: "Tk 120", category: "Street Food", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500", description: "Fuchka topped with sweet yogurt and sev." },
      { id: 4303, name: "Beef Singara (4 pcs)", price: "Tk 60", category: "Snacks", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500", description: "Deep fried pastry filled with spiced beef." }
    ]
  },
  44: {
    id: 44,
    name: "Dhanmondi Lake Street Food Area",
    cuisine: "Fuchka, Chotpoti, Grilled Corn",
    rating: "4.7",
    deliveryTime: "15-25 min",
    bannerImg: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    menu: [
      { id: 4401, name: "Dhanmondi Special Fuchka", price: "Tk 100", category: "Street Food", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500", description: "Lake side special spicy fuchka." },
      { id: 4402, name: "Masala Grilled Corn", price: "Tk 60", category: "Snacks", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500", description: "Charcoal roasted corn with lemon chili butter." },
      { id: 4403, name: "Doi Chotpoti", price: "Tk 110", category: "Street Food", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500", description: "Chotpoti mixed with sweet yogurt sauce." }
    ]
  },
  45: {
    id: 45,
    name: "Old Dhaka Street Food Area",
    cuisine: "Chotpoti, Mughlai Paratha, Bakarkhani",
    rating: "4.8",
    deliveryTime: "20-30 min",
    bannerImg: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    menu: [
      { id: 4501, name: "Special Mughlai Paratha", price: "Tk 140", category: "Street Food", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=500", description: "Deep fried dough stuffed with minced egg & onion." },
      { id: 4502, name: "Old Dhaka Bakarkhani (1 pc)", price: "Tk 30", category: "Snacks", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=500", description: "Crispy traditional Old Dhaka biscuit bread." },
      { id: 4503, name: "Shahi Chotpoti", price: "Tk 90", category: "Street Food", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500", description: "Rich spicy Old Dhaka chotpoti." }
    ]
  },
  46: {
    id: 46,
    name: "Bailey Road Street Food Area",
    cuisine: "Fuchka, Chotpoti, Rolls, Fried Snacks",
    rating: "4.6",
    deliveryTime: "15-25 min",
    bannerImg: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
    menu: [
      { id: 4601, name: "Bailey Road Fuchka", price: "Tk 90", category: "Street Food", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500", description: "Popular Bailey Road spicy fuchka." },
      { id: 4602, name: "Chicken Egg Roll", price: "Tk 120", category: "Rolls", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Paratha wrapped with fried egg & spiced chicken." },
      { id: 4603, name: "Beef Egg Roll", price: "Tk 150", category: "Rolls", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500", description: "Paratha wrap filled with juicy beef." }
    ]
  }
};