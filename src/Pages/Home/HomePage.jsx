import SliderTop from "../../Components/SliderTop";
import Navbar from "../../Components/Navbar";
import CardProperti from "../../Components/CardProperti";
import CategoryProperti from "../../Components/CategoryProperti";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <SliderTop />
      <CategoryProperti />
      <CardProperti />
    </>
  );
};

export default HomePage;
