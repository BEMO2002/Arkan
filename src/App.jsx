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
import TeamMembers from "./AdminDashboard/TeamMembers";
import RoleProtectedRoute from "./components/RoleProtectedRoute";
import Unauthorized from "./components/Unauthorized";
import SalesDashboard from "./AdminDashboard/SalesDashboard";
import { useAuth } from "./context/AuthContext";
import NotFound from "./NotFound";

function App() {
  const { roles, loading } = useAuth();

  const AdminRedirect = () => {
    if (loading) return null;
    if (roles && roles.includes("Admin")) {
      window.location.replace("/admin/projects");
      return null;
    } else if (roles && roles.includes("Sales")) {
      window.location.replace("/admin/sales-dashboard");
      return null;
    } else {
      window.location.replace("/unauthorized");
      return null;
    }
  };

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
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <RoleProtectedRoute allowedRoles={["Admin", "Sales"]}>
              <LayoutDashboard />
            </RoleProtectedRoute>
          }
        >
          <Route
            path="projects"
            element={
              <RoleProtectedRoute allowedRoles={["Admin"]}>
                <ProjectsDashboard />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="add-category"
            element={
              <RoleProtectedRoute allowedRoles={["Admin"]}>
                <AddCategory />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="contact-form"
            element={
              <RoleProtectedRoute allowedRoles={["Admin"]}>
                <ContactForm />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="team-members"
            element={
              <RoleProtectedRoute allowedRoles={["Admin"]}>
                <TeamMembers />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="creat-services"
            element={
              <RoleProtectedRoute allowedRoles={["Admin", "Sales"]}>
                <CreatServices />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="sales-dashboard"
            element={
              <RoleProtectedRoute allowedRoles={["Sales"]}>
                <SalesDashboard />
              </RoleProtectedRoute>
            }
          />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
