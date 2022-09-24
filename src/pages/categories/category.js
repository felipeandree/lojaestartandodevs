import React, {useState} from "react";
import { Header } from "../../components/Header/Header";
import { SlidesComponent } from "../../components/Slider/Slider";
import { slides } from "../../mocks/slides";
import { MenuMobile } from "../../components/MenuMobile/MenuMobile.js";

const Category = () => {
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
     
    </>
  );
};

export default Category;
