import { Routes, Route } from "react-router-dom";
import { ShippingForm } from "../pages/Forms";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import ProductsCategory from "../pages/ProductsCategory";
import Layout from "../components/Layout";

const mainRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato">Contato</Route>
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/produtos" element={<Shop />} />
        <Route path="/produtos/:productCategory"
          element={<ProductsCategory />}
        />
        <Route path="/formulario" element={<ShippingForm />} />
      </Routes>
    </Layout>
  );
};

export default mainRouter;