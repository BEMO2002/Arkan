import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import SocialLinks from "./components/SocialLinks";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SocialLinks />
    </>
  );
};

export default Layout;
