// import useSWR from "swr"
import "./home.css";
import { Header } from "../../components/Header/Header";
import { SlidesComponent } from "../../components/Slider/Slider";
import { slides } from "../../mocks/slides";
import { Offers } from "../../components/Offers/Offers";
import { Navbar } from "../../components/Navbar/index";
import { Featured } from "../../components/Featured/Featured";
import {Categories} from "../../components/Categories/Categories"

const Home = () => {
  const containerStyles = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };

  return (
    <>
      <Header />
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
