import React, { useState } from "react";
import { Header } from "../../components/Header";
import { SlidesComponent } from "../../components/Slider";
import { slides } from "../../mocks/slides";
import { OffersBox } from "../../components/OffersBox";
import { Navbar } from "../../components/Navbar/index";
import { FeaturedBox } from "../../components/FeaturedBox";
import { CategoriesBox } from "../../components/CategoriesBox"
import { MenuMobile } from "../../components/MenuMobile"
import { Footer } from "../../components/Footer";

const Home = () => {
  const containerStyles = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible} />
      <Header setMenuIsVisible={setMenuIsVisible} />

      <div style={containerStyles}>
        <SlidesComponent slides={slides} />
      </div>
      <OffersBox />
      <FeaturedBox />
      <CategoriesBox />
      <Navbar />
      <Footer />
    </>
  );
};

export default Home;
