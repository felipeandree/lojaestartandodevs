import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Mousepads from "../pages/Mousepads";
import Pillows from "../pages/Pillows";
import Keychains from "../pages/Keychains";
import Caps from "../pages/Caps";
import Mugs from "../pages/Mugs";
import Shirts from "../pages/Shirts";


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mousepads' element={<Mousepads />} />
      <Route path='/almofadas' element={<Pillows />} />
      <Route path='/chaveiros' element={<Keychains />} />
      <Route path='/bones' element={<Caps />} />
      <Route path='/canecas' element={<Mugs />} />
      <Route path='/camisas' element={<Shirts/>}/>
    </Routes>
  );
};

export default Router;
