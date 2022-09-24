import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Category from "../pages/categories/category";

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category' element={<Category />} />
    </Routes>
  );
};

export default Router;
