import Rating from "react-rating";
import Button from "./Button";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductsCard = ({ product }) => {
  const { _id, name, productImage, price, category } = product || {};
  return (
    <div>
      <div className="bg-slate-100 p-5 shadow-lg rounded-lg space-y-4 relative">
        <img
          src="https://cdn.osudpotro.com/thumb/products/Bashundhara-Diapant-L---34-Pcs-1606208670957.webp?w=256"
          alt=""
          className="mx-auto w-[200px] h-[200px]"
        />
        <div>
          <p className="absolute top-3 left-5 bg-teal-700 text-white p-3 rounded-full l w-10 h-10 flex justify-center items-center font-bold">
            4%
          </p>
        </div>
        <div className="flex justify-between ">
          <h3 className="text-slate-800 text-xl font-bold">Product Name</h3>
          <p>
            <Rating
              initialRating={3}
              readonly
              fullSymbol={<BsStarFill />}
              emptySymbol={<BsStar />}
            />
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-lg text-teal-800 font-black ">250 tk</p>
          <p className="line-through text-gray-400 font-bold italic">280 tk</p>
        </div>
        <div className="flex gap-5">
          <Button text={"add to cart"} />

          <Button text={"Details "} href={"/product/id"} />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
