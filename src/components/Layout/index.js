import React from "react";
import { PageWrapper, PageContent } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";
const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <PageContent>{children}</PageContent>
      <Footer />
    </PageWrapper>
  );
};
export default Layout;
