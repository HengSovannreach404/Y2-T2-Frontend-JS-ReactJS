import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { staticProducts } from "./data";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

function ClientLayout() {
  return (
    <div className="min-h-screen bg-blue-50">
      <nav className="p-4 bg-blue-600 text-white flex gap-4">
        <Link to="/">Store</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}

function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="p-4 bg-black text-white flex gap-4">
        <Link to="/admin">Dashboard</Link>
        <Link to="/">Back to Store</Link>
      </nav>
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}

function AdminDashboard() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("app_products")) || []
  );

  const injectNewProduct = () => {
    const newItem = {
      id: Date.now(),
      name: "New Test Item",
      price: 99,
      description: "Added via Admin Test Button",
    };

    const updated = [...list, newItem];

    setList(updated);
    localStorage.setItem("app_products", JSON.stringify(updated));
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded">
      <h3 className="text-xl font-bold">Admin Inventory Manager</h3>

      <button
        onClick={injectNewProduct}
        className="bg-green-500 p-2 mt-4 rounded"
      >
        + Inject Random Product
      </button>

      <p className="mt-2 text-sm text-gray-300">
        Items in DB: {list.length}
      </p>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    if (!localStorage.getItem("app_products")) {
      localStorage.setItem("app_products", JSON.stringify(staticProducts));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* CLIENT SECTION */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>

        {/* ADMIN SECTION */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}