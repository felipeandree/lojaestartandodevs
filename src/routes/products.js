import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";



export const RouterProducts = () => {
    return (
      <Routes>
        <Route path='/products/:productName' element={< Products />} />
      
      </Routes>
    );
  };
  
  export default RouterProducts;



