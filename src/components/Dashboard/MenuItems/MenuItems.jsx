import { Link, NavLink } from "react-router-dom";

const MenuItems = ({ label, href }) => {
  return (
    <li className="mx-5 font-roboto font-bold ">
      <NavLink
        className={({ isActive }) =>
          ` ${
            isActive ? "bg-teal-800 text-white" : "bg-gray-100 text-teal-900"
          }  px-5 py-2 w-full block rounded-lg`
        }
        to={href}
        end
      >
        {label}
      </NavLink>
    </li>
  );
};

export default MenuItems;
