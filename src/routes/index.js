import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Cart from "../pages/Cart";


export const mainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contato'>Contato</Route>
      <Route path='/carrinho' element={<Cart />} />
    </Routes>
  );
};

export default mainRouter;
