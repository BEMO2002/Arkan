import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SocialLinks />
      <Footer />
    </>
  );
};

export default Layout;
