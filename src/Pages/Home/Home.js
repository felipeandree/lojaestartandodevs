<<<<<<< HEAD:src/pages/Home/Home.js
import "./Home.css";
import { Header } from "../../components/Header/Header";
import BannerComponent from "../../components/Banner/Banner";
=======
import "./styles.css";
import { Header } from "../../components/Header/index";
import BannerComponent from "../../components/Banner/";
import { Ofertas } from "../../components/Ofertas/index";
>>>>>>> 8f4d522b9ba8778624d5f45faefeebee9a1334cd:src/Pages/Home/Home.js

const Home = () => {
  const slides = [
    {
      url: "http://localhost:3000/img/banner-camisa.png",
      title: "Slide-1",
    },
    {
      url: "http://localhost:3000/img/banner-canecas.png",
      title: "Slide-2",
    },
    {
      url: "http://localhost:3000/img/banner-almofadas.png",
      title: "Slide-3",
    },
  ];

  const containerStyles = {
    width: "100%",
    height: "520px",
    margin: "0 auto",
  };

  return (
    <>
      <Header />
      <div style={containerStyles}>
        <BannerComponent slides={slides} />
      </div>
      <Ofertas/>
    </>
  );
};

export default Home;
