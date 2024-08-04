import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";
import './style.scss'
import "semantic-ui-css/semantic.min.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";


const Layout = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
        <Outlet/>
        {/* <Sidebar/> */}
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Layout/>),
    children: [
      {
        path: "/",
        element: (<Home/>)
      },
      {
        path: "/aboutus",
        element: (<AboutUs/>)
      },
      {
        path: "/contactus",
        element: (<ContactUs/>)
      },
      {
        path: "/post/:id",
        element: (<Single/>)
      },
      {
        path: "/write",
        element: (<Write/>)
      }
    ]
  },
  {
    path: "/register",
    element: (<Register/>),
  },
  {
    path: "/login",
    element: (<Login/>),
  },
]);


function App() {

  return (
    <div className="App">
      
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
