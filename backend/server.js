const app = require('./app');

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`FoodVerse Server is running on port ${PORT}`);
});
