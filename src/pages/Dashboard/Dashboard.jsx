import { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar/Topbar";
import AdminHome from "./Admin/AdminHome";

const Dashboard = () => {
  return (
    <section className="">
      <AdminHome />
    </section>
  );
};

export default Dashboard;
