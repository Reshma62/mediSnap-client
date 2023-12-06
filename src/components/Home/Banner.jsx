import bannerBg from "../../assets/category-background.webp";
import bannerImg from "../../assets/Baby Care.webp";
import Button from "../Shared/Button";
import Container from "../Shared/Container";
const Banner = () => {
  return (
    <Container>
      <div className="mt-20">
        <div
          className="flex justify-between items-center rounded-lg"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <div className="basis-1/3">
            <img src={bannerImg} alt="" />
          </div>
          <h2 className="text-teal-950 font-black text-6xl basis-1/3">
            Baby care
          </h2>
          <div className="mr-10">
            <Button text={"shop now"} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
