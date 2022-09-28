import { Routes, Route } from "react-router-dom";
import Shop from "../pages/Shop";
import ProductsCategoryList from "../components/ProductsCategoryList";


export const RouterProducts = () => {
  return (

    <Routes>
      <Route path='/produtos' element={< Shop />} />
      <Route exact path='/produtos/:productCategory' element={<ProductsCategoryList />} />
      {/* <Route exact path='/:productId' element={<ProductList />} /> */}

    </Routes>
  );
};

export default RouterProducts;