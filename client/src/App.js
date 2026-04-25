import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import FilterDropdown from "./components/FilterDropdown";
import ProductList from "./components/ProductList";
import { getProducts } from "./services/api";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch products when search/filter changes
  useEffect(() => {
    fetchProducts();
  }, [search, category]);

  const fetchProducts = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await getProducts({ search, category });
      setProducts(res.data);
    } catch (err) {
      setError("Something went wrong ❌");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Search & Filter App</h2>

      {/* Controls */}
      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterDropdown category={category} setCategory={setCategory} />
      </div>

      {/* Loading */}
      {loading && <p className="loading">Loading...</p>}

      {/* Error */}
      {error && <p className="error">{error}</p>}

      {/* Product List */}
      {!loading && !error && <ProductList products={products} />}
    </div>
  );
}

export default App;