import React, { useContext } from "react";
import { Outlet } from 'react-router-dom';
import { PageWrapper, PageContent } from "./styles";
import { CartContext } from "../../contexts/cart";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = () => {
  
  const { cartItems } = useContext(CartContext);

  return (
    <PageWrapper>
      <Header countCartItems={cartItems.length} />
      <PageContent><Outlet /></PageContent>
      <Footer />
    </PageWrapper>
  );
};
export default Layout;