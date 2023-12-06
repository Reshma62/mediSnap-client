import { Link } from "react-router-dom";
import pescription from "../../assets/presciptionUploaderBg.png";
import healthCare from "../../assets/healthcare-service-bg.png";
import callToAction from "../../assets/calltoActionBg.png";
import badge from "../../assets/service-offer-batch.png";
import Button from "../Shared/Button";
import Container from "../Shared/Container";
const featuredCategoryItems = [
  {
    id: 1,
    title: "Prescription Medicines",
    badgeImg: badge,
    offerText: "Upto 15% off",
    buttonText: "Shop now",
    image: pescription,
  },
  {
    id: 1,
    title: "Health Care",
    badgeImg: badge,
    offerText: "Upto 25% off",
    buttonText: "Shop now",
    image: healthCare,
  },
  {
    id: 1,
    title: "Helpline",
    badgeImg: badge,
    offerText: "24/7 online",
    buttonText: "Call Now",
    image: callToAction,
  },
];
const FeaturedCategory = () => {
  return (
    <Container>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10  md:-mt-20 !z-50 relative">
        {featuredCategoryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white  shadow-xl relative rounded-lg"
          >
            <img src={item.image} alt="" className="w-full rounded-lg" />
            <p
              className="bg-no-repeat p-3 absolute top-0 left-0 w-full text-white font-medium capitalize"
              style={{ backgroundImage: `url(${item.badgeImg})` }}
            >
              {item.offerText}
            </p>
            <h3 className="absolute top-1/2 left-5 text-xl font-bold text-slate-700">
              {item.title}
            </h3>
            <Link
              to={"/mede"}
              className="absolute rounded-lg bottom-4 left-5 capitalize bg-gradient-to-t from-teal-900 to-teal-600"
            >
              <Button text={item.buttonText} />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedCategory;
