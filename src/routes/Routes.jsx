import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import News from "../pages/news_section/News";
import ContactUs from "../pages/contactUs/ContactUs";
import AboutUs from "../pages/aboutUs/AboutUs";
import AllMenus from "../pages/menu/AllMenus";
import MenuDetails from "../pages/menuDetails/MenuDetails";
import News_Details from "../pages/news_section/News_Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-foods",
        element: <AllMenus />,
      },
      {
        path: "/food/:id",
        element: <MenuDetails />,
      },
      {
        path: "/all-foods/food/:id",
        element: <MenuDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "news",
        element: <News></News>
      },
      {
        path: "news-details",
        element: <News_Details></News_Details>
      },
      {
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

export default router;
