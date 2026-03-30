import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
} from "react-router-dom";

/* ================= CLIENT LAYOUT ================= */
const ClientLayout = () => (
  <div className="bg-blue-50 min-h-screen">
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/admin">Admin Panel</Link>
    </nav>

    <div className="p-8">
      <Outlet />
    </div>
  </div>
);

/* ================= ADMIN LAYOUT ================= */
const AdminLayout = () => (
  <div className="flex min-h-screen bg-gray-900 text-white">
    <aside className="w-64 p-6 bg-black flex flex-col gap-4">
      <Link to="/admin">Dashboard</Link>
      <Link to="/">Back to Store</Link>
    </aside>

    <div className="p-8 flex-1">
      <Outlet />
    </div>
  </div>
);

/* ================= CLIENT SHOP ================= */
const ClientShop = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("app_products")) || []
  );

  const addNewItem = () => {
    const newItem = {
      id: Date.now(),
      name: "Headphones",
      price: 120,
    };

    const newList = [...products, newItem];
    setProducts(newList);
    localStorage.setItem("app_products", JSON.stringify(newList));
  };

  return (
    <div className="p-5 bg-blue-50">
      <h2 className="text-2xl font-bold mb-4">Client Shop</h2>

      <button
        onClick={addNewItem}
        className="bg-green-600 text-white p-2 mb-4"
      >
        + Suggest New Product
      </button>

      <div className="space-y-3">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">{product.name}</h3>
              <p>${product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="text-blue-600 underline"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No products yet.</p>
        )}
      </div>
    </div>
  );
};

/* ================= PRODUCT DETAIL ================= */
const ProductDetail = () => {
  const { id } = useParams();

  const products = JSON.parse(localStorage.getItem("app_products")) || [];
  const product = products.find((item) => String(item.id) === id);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Detail</h2>

      {product ? (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>ID: {product.id}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

/* ================= ADMIN DASHBOARD ================= */
const AdminDashboard = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("app_user")) || {
      name: "Guest",
      role: "User",
    }
  );

  const handleUpdateName = () => {
    const updatedUser = {
      ...user,
      name: "Super_Admin",
    };

    setUser(updatedUser);
    localStorage.setItem("app_user", JSON.stringify(updatedUser));
  };

  return (
    <div className="p-5 bg-gray-800 text-white rounded">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h2>

      <button
        onClick={handleUpdateName}
        className="bg-yellow-500 p-2 text-black"
      >
        Upgrade Permissions
      </button>
    </div>
  );
};

/* ================= APP ================= */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<ClientShop />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}