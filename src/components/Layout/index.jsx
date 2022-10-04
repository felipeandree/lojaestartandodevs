import React, {useState} from "react";
import { PageWrapper, PageContent } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
const Layout = ({ children }) => {
  
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useState([]);

  return (
    <PageWrapper>
      <Header countCartItems={cartItems.length} />
      <PageContent>{children}</PageContent>
      <Footer />
    </PageWrapper>
  );
};
export default Layout;
