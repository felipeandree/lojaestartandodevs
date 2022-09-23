import React, {useState} from "react";
import "./home.css";
import { Header } from "../../components/Header/Header";
import { SlidesComponent } from "../../components/Slider/Slider";
import { slides } from "../../mocks/slides";
import { Offers } from "../../components/Offers/Offers";
import { Navbar } from "../../components/Navbar/index";
import { Featured } from "../../components/Featured/Featured";
import { Categories } from "../../components/Categories/Categories"
import { MenuMobile} from "../../components/MenuMobile/MenuMobile.js"

const Home = () => {
  const containerStyles = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };

   const[menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <MenuMobile
          menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}/>
      <Header setMenuIsVisible={setMenuIsVisible} />
      
      <div style={containerStyles}>
        <SlidesComponent slides={slides} />
      </div>
      <Offers />
      <Featured />
      <Categories/>
      <Navbar />
    </>
  );
};

export default Home;
