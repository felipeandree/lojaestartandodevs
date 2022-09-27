import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";



export const RouterProducts = () => {
    return (
      <Routes>
        <Route path='/produtos/:productName' element={< Shop />} />
      </Routes>
    );
  };
  
  export default RouterProducts;



