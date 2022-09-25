import { Routes, Route } from "react-router-dom";
import Mousepads from "../pages/Products/Mousepads";
import Pillows from "../pages/Products/Pillows";
import Keychains from "../pages/Products/Keychains";
import Caps from "../pages/Products/Caps";
import Mugs from "../pages/Products/Mugs";
import Shirts from "../pages/Products/Shirts";


export const RouterProducts = () => {
    return (
      <Routes>
        <Route path='/mousepads' element={<Mousepads />} />
        <Route path='/almofadas' element={<Pillows />} />
        <Route path='/chaveiros' element={<Keychains />} />
        <Route path='/bones' element={<Caps />} />
        <Route path='/canecas' element={<Mugs />} />
        <Route path='/camisas' element={<Shirts/>} />
      </Routes>
    );
  };
  
  export default RouterProducts;



