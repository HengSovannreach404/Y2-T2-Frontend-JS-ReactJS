import { Link } from "react-router-dom";

export default function ProductList() {
  const products = JSON.parse(localStorage.getItem("app_products")) || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>

      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-green-600 font-bold">${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="text-blue-500 underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}