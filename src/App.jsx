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
import LayoutDashboard from "./LayoutDashboard";
import ProjectsDashboard from "./AdminDashboard/ProjectsDashboard";
import AddCategory from "./AdminDashboard/AddCategory";
import ContactForm from "./AdminDashboard/ContactForm";
import CreatServices from "./AdminDashboard/CreatServices";
import Login from "./LoginPage/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
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
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <LayoutDashboard />
          </ProtectedRoute>
        }>
          <Route index element={<ProjectsDashboard />} />
          <Route path="/admin/projects" element={<ProjectsDashboard />} />
          <Route path="/admin/add-category" element={<AddCategory />} />
          <Route path="/admin/contact-form" element={<ContactForm />} />
          <Route path="/admin/creat-services" element={<CreatServices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
