import "./Home.css";
import { Header } from "../../components/Header/Header";
import { Slides, SlidesComponent } from "../../components/Slider/Slider";
import { Offers } from "../../components/Offers/Offers"

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
        <SlidesComponent slides={Slides} />
      </div>
      <Offers />
    </>
  );
};

export default Home;
