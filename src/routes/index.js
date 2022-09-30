import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop"
import ProductsCategoryList from "../components/ProductsCategoryList";



export const mainRouter = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contato'>Contato</Route>
      <Route path='/carrinho' element={<Cart />} />
      <Route path='/produtos' element={< Shop />} />
      <Route exact path='/produtos/:productCategory' element={<ProductsCategoryList />} />
    </Routes>
  );
};

export default mainRouter;
