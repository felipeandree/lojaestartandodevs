import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route>Contato</Route>
      <Route>Carrinho</Route>
    </Routes>
  );
};

export default Router;
