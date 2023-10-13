import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Setting from "./pages/Setting";
import Customer from "./pages/Customer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="customer" element={<Customer />} />
      <Route path="setting" element={<Setting />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
