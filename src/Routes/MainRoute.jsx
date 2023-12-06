import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/HomePage/Home";
import Category from "../pages/Category/Category";
import MedicinCorner from "../pages/MedicinCorner/MedicinCorner";
import DashboradLayout from "../pages/Dashboard/DashboradLayout";
import AddToProduct from "../pages/Dashboard/AddToProduct/AddToProduct";
import Login from "../pages/Login/Login";
import Registation from "../pages/Registation/Registation";
import DoctorDetails from "../components/Doctors/DoctorDetails";
import ProductDetails from "../pages/Products/ProductDetails";
import Cart from "../pages/User/Cart";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddCategory from "../pages/Dashboard/AddCategory/AddCategory";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "categrory",
        element: <Category />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "medicine-corner",
        element: <MedicinCorner />,
      },
      {
        path: "medicine-corner",
        element: <MedicinCorner />,
      },
      {
        path: "doctor/:id",
        element: <DoctorDetails />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <p>heloo about</p>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registation />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboradLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "add-product",
        element: <AddToProduct />,
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
    ],
  },
]);

export default MainRoute;
