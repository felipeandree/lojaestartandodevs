import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Cart from "../pages/Cart";


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route>Contato</Route>
      <Route path='/carrinho' element={<Cart/>}/>
    </Routes>
  );
};

export default Router;
