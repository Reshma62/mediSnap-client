import { Outlet } from "react-router-dom";

import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";

const RootLayout = () => {
  return (
    <div className="font-roboto">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
