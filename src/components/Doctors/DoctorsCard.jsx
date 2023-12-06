import Heading from "../Shared/Heading";
import SingleCard from "./SingleCard";

const DoctorsCard = () => {
  return (
    <section className="flex flex-col items-center bg-gray-200 py-20 font-poppins dark:bg-gray-900 ">
      <Heading>
        <h2>Our Online Constault</h2>
      </Heading>
      <SingleCard />
    </section>
  );
};

export default DoctorsCard;
