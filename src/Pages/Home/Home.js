import "./styles.css";
import { Header } from "../../components/Header/index";
import BannerComponent from "../../components/Banner/";
import { Ofertas } from "../../components/Ofertas/index";

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
