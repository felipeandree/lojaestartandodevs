import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Mousepads from "../pages/categories/Mousepads";
import Pillows from "../pages/categories/Pillows";
import Keychains from "../pages/categories/Keychains";
import Caps from "../pages/categories/Caps";
import Mugs from "../pages/categories/Mugs";
import Shirts from "../pages/categories/Shirts";


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mousepads' element={<Mousepads />} />
      <Route path='/almofadas' element={<Pillows />} />
      <Route path='/chaveiros' element={<Keychains />} />
      <Route path='/bones' element={<Caps />} />
      <Route path='/canecas' element={<Mugs />} />
      <Route path='/camisas' element={<Shirts/>} />
    </Routes>
  );
};

export default Router;
