import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About Us",
      link: "/about",
    },
    {
      id: 3,
      name: "Medicine corner",
      link: "/medicine-corner",
    },
  ];
  return (
    <nav className="bg-primaryColor">
      <div className="container-class">
        <ul className="flex justify-center gap-6 py-2.5 text-white font-bold text-base">
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.id}
              className=""
            >
              <NavLink
                to={`${menuItem.link}`}
                className={({ isActive }) => (isActive ? "text-red-200" : "")}
              >
                {menuItem.name}
              </NavLink>
            </li>
          ))}
          <li className="">
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) => (isActive ? "text-red-200" : "")}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
