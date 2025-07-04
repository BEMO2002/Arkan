import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import { Top } from "./components/Top";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SocialLinks />
      <Whatsapp />
      <Top />
      <Footer />
    </>
  );
};

export default Layout;
