import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]); // useState hook for managing products
  const [loading, setLoading] = React.useState(true); // Loading state
  const [error, setError] = React.useState(null); // Error state

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Could not fetch products."); // Set error message
        setLoading(false); // Set loading to false on error
      });
  }, []);

  // Render loading state
  if (loading) {
    return <div>Loading products...</div>;
  }

  // Render error state
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id || product.name}>{product.name}</li> // Fallback on name if id is not unique
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
