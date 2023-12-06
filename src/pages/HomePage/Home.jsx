import DoctorsCard from "../../components/Doctors/DoctorsCard";
import Banner from "../../components/Home/Banner";
import FeaturedCategory from "../../components/Home/FeaturedCategory";
import ProductSlider from "../../components/Home/ProductSlider";
import ShopByCategory from "../../components/Home/ShopByCategory";
import Slider from "../../components/Home/Slider";
import Testiomonial from "../../components/Home/Testiomonial";

const Home = () => {
  const products = [...Array(10).keys()];
  return (
    <>
      <Slider />

      <FeaturedCategory />
      <ShopByCategory />
      <DoctorsCard />
      <Banner />
      <ProductSlider heading={"Best selling Products"} products={products} />
      <Testiomonial />
    </>
  );
};

export default Home;
