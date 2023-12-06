import { Link } from "react-router-dom";
import MenuItems from "./MenuItems/MenuItems";

import Logo from "../../assets/logo.svg";
const Sidebar = () => {
  return (
    <div>
      <div className="flex items-center w-full px-4 pt-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <Link to={"/"}>
          <img className="w-[200px]" src={Logo} alt="" />
        </Link>
      </div>
      <div>
        <div className="overflow-hidden ">
          <img
            src="https://i.postimg.cc/K8Rq5BCD/pexels-pavel-danilyuk-8381916.jpg"
            alt=""
            className="object-cover object-top w-full h-32"
          />
        </div>
        <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
          <img
            src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg"
            alt=""
            className="object-cover object-top w-full h-32 "
          />
        </div>
        {/* author info */}
        <div className="flex justify-center ">
          <div className="text-center">
            <h2 className="text-xl font-semibold dark:text-gray-300 ">
              John Doe
            </h2>
            <span className="text-sm font-medium text-gray-600">
              john@gmail.com
            </span>
          </div>
        </div>
        {/* Menu items */}

        <div className="mt-10">
          <ul className="flex flex-col justify-between mt-auto min-h-full">
            <div className="flex flex-col gap-2">
              <MenuItems label={"Dashboard"} href={"/dashboard"} />
              <MenuItems label={"Add product"} href={"add-product"} />
              <MenuItems label={"Category"} href={"add-category"} />
            </div>
            <div>
              <MenuItems label={"Profile"} href={"/profile"} />
              <MenuItems label={"Logout"} href={"/logout"} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
