// src/pages/ClientShop.jsx
import { useState } from "react";

export default function ClientShop() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("app_products")) || []
  );

  const addNewItem = () => {
    const newItem = {
      id: Date.now(),
      name: "Headphones",
      price: 120,
    };

    // GAP 1: Create a new array including the old items and the new item
    const newList = [...products, newItem];

    // GAP 2: Update state and LocalStorage
    setProducts(newList);
    localStorage.setItem("app_products", JSON.stringify(newList));
  };

  return (
    <div className="p-5 bg-blue-500">
      <button
        onClick={addNewItem}
        className="bg-green-600 text-white p-2"
      >
        + Suggest New Product
      </button>

      {/* Map through products here */}
      <div className="mt-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-2 mb-2">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}