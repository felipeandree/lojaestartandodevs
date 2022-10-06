import React, {useContext} from "react";
import { PageWrapper, PageContent } from "./styles";
import { CartContext } from "../../contexts/cart";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = ({ children }) => {
  
  const { cartItems } = useContext(CartContext);

  return (
    <PageWrapper>
      <Header countCartItems={cartItems.length} />
      <PageContent>{children}</PageContent>
      <Footer />
    </PageWrapper>
  );
};
export default Layout;