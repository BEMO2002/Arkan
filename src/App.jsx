import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage/base";
import ServicesPage from "./ServicesPage/Source";
import PortfolioMain from "./PortfolioPage/PotfolioMain";
import MainTeam from "./TeamPage/MainTeam";
import MainContact from "./ContactPage/MainContact";
import MainDashboard from "./AdminDashboard/MainDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<AboutPage />} />
        </Route>
        <Route path="/services" element={<Layout />}>
          <Route index element={<ServicesPage />} />
        </Route>
        <Route path="/portfolio" element={<Layout />}>
          <Route index element={<PortfolioMain />} />
        </Route>
        <Route path="/team" element={<Layout />}>
          <Route index element={<MainTeam />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<MainContact />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<MainDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
