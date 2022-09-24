import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/home";
import Category from "../pages/categories/category";

export const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/category' element={<Category />} />
    </Routes>
  );
};

export default Router;
