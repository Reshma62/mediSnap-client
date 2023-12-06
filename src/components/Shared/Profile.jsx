import { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";

const Profile = ({ userImg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOUtUser } = useAuthContext();
  const handleLogOut = async () => {
    await logOUtUser();
  };
  return (
    <div className="relative ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" border border-solid p-2 border-teal-800 rounded-full cursor-pointer"
      >
        {userImg ? (
          <img
            src={userImg?.photoURL}
            alt="user image"
            className="w-10 h-10 bg-teal-800 rounded-full"
          />
        ) : (
          <BiSolidUser className="text-3xl text-teal-800" />
        )}
      </div>

      <div
        className={`absolute right-0 transition-all w-[150px] duration-500 ${
          isOpen ? " top-16" : "-top-96"
        }  bg-slate-200 rounded-lg z-50 text-teal-700 font-bold shadow-2xl py-2
          }`}
      >
        <ul>
          <li className="py-2 hover:bg-white px-5 hover:shadow-xl cursor-pointer">
            <Link to={"/profile"}>My accout</Link>
          </li>
          <li
            onClick={handleLogOut}
            className="py-2 px-5 hover:bg-white hover:shadow-xl cursor-pointer"
          >
            LogOut
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
