import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useState } from "react";
import Topbar from "../../components/Dashboard/Topbar/Topbar";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  const handleOpenSidebar = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="overflow-hidden">
      <div
        className={` ${
          open ? "-left-full" : "left-0"
        } absolute w-[300px]  h-screen duration-200`}
      >
        <Sidebar />
      </div>
      <div
        className={`${
          open ? "ml-0" : "ml-[300px]"
        } overflow-hidden duration-200 bg-slate-100`}
      >
        <div>
          <Topbar onclick={handleOpenSidebar} />
        </div>
        <div className=" h-[calc(100vh-150px)] overflow-hidden overflow-y-auto">
          <Outlet />
        </div>
        <div className=" py-4 bg-teal-100">footer</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
