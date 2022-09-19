import "./Home.css";
import { Header } from "../../components/Header/Header";
import { slides, BannerComponent } from "../../components/Banner/Banner";
import { Slider } from "../../components/Slider"

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
        <BannerComponent slides={slides} />
      </div>
      <Slider />
    </>
  );
};

export default Home;
