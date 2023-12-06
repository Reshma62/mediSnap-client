import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Topbar = ({ onclick }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="bg-white p-5 flex justify-between items-center">
      <div
        onClick={onclick}
        className="bg-gray-200  p-3 rounded-md cursor-pointer"
      >
        <FaBarsStaggered className="text-xl " />
      </div>
      <div className="pr-10 flex items-center gap-5">
        <div>
          <input type="text" className="border border-solid border-gray-600" />
          <button>Search</button>
        </div>
        <div className="relative">
          <div
            onClick={() => setOpenDropdown(!openDropdown)}
            className="avatar"
          >
            <div className="w-12 border-solid border-2 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          {openDropdown && (
            <ul className="absolute bg-white rounded-md  py-2 top-full shadow-xl right-0">
              <li className="hover:bg-slate-300 px-5 py-2">Logout</li>
              <li className="hover:bg-slate-300 px-5 py-2">Profle</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
