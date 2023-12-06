import { Link } from "react-router-dom";
import cart from "../../assets/cart.svg";
import Button from "./Button";
import Profile from "./Profile";
import Logo from "../../assets/logo.svg";
import useAuthContext from "../../Hooks/useAuthContext";
const Topbar = () => {
  const { user } = useAuthContext();
  return (
    <div className="border-b border-solid border-teal-500 py-2">
      <div className="flex justify-between items-center container-class">
        <div>
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="w-[500px]">
          <input
            type="text"
            className="border-slate-300 border-solid border outline-0 rounded-lg py-2 w-full px-6"
            placeholder="Search medicine here..."
          />
        </div>
        <div className="flex items-center gap-3">
          <Link to={"/cart"} className="flex items-center gap-3">
            <Link to={"/cart"} className="relative ">
              <img src={cart} alt="" />
              <span className="absolute bg-slate-800 w-5 h-5 rounded-full flex justify-center items-center text-white -top-2 -right-2">
                0
              </span>
            </Link>
            <p className="font-medium text-slate-800 capitalize"> cart</p>
          </Link>
          <div className=" border-l-2 border-solid border-teal-600 pl-5">
            {user ? (
              <Profile userImg={user} />
            ) : (
              <Button href={"/login"} text={"Login"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
