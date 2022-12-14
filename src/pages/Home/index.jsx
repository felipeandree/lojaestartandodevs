import { SlidesComponent } from "../../components/Slider";
import { slides } from "../../mocks/slides";
import { OffersBox } from "../../components/OffersBox";
import { Navbar } from "../../components/Navbar/index";
import { FeaturedBox } from "../../components/FeaturedBox";
import { CategoriesBox } from "../../components/CategoriesBox";

const Home = () => {
  const containerStyles = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
  };


  return (
    <>
      <div style={containerStyles}>
        <SlidesComponent slides={slides} />
      </div>
      <OffersBox />
      <FeaturedBox />
      <CategoriesBox />
      <Navbar />
    </>
  );
};

export default Home;
