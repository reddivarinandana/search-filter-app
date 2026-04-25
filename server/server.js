const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

// Sample Data
const products = [
  { id: 1, name: "iPhone 14", category: "Mobile", price: 800 },
  { id: 2, name: "Samsung Galaxy", category: "Mobile", price: 700 },
  { id: 3, name: "OnePlus 11", category: "Mobile", price: 650 },
  { id: 4, name: "Samsung TV", category: "Electronics", price: 1200 },
  { id: 5, name: "LG Refrigerator", category: "Electronics", price: 900 },
  { id: 6, name: "Laptop Dell", category: "Electronics", price: 950 },
  { id: 7, name: "Nike Shoes", category: "Fashion", price: 150 },
  { id: 8, name: "Adidas Shoes", category: "Fashion", price: 130 },
  { id: 9, name: "T-Shirt", category: "Fashion", price: 50 },
  { id: 10, name: "Jeans", category: "Fashion", price: 80 },
];

// API with search + filter
app.get("/products", (req, res) => {
  const { search, category } = req.query;

  let result = products;

  if (search) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category && category !== "All") {
    result = result.filter(p => p.category === category);
  }

  res.json(result);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));