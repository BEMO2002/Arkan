import React from "react";
import {
  FaUsers,
  FaProjectDiagram,
  FaEnvelope,
  FaPlus,   
  FaUser,
} from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import logo from "../assets/home/logo(arkan).png";
import Logout from "./Logout";
import { useAuth } from "../context/AuthContext";

const navLinks = [
  { name: "All Projects", icon: <FaProjectDiagram />, href: "/admin/projects" },
  { name: "Add Category", icon: <FaUsers />, href: "/admin/add-category" },
  {
    name: "Contact Form Data  ",
    icon: <FaEnvelope />,
    href: "/admin/contact-form",
  },
  { name: "Creat Services", icon: <FaPlus />, href: "/admin/creat-services" },
  { name: "Team Members", icon: <AiOutlineTeam />, href: "/admin/team-members" },
  
];

const SideBarDashboard = () => {
  const { user, roles } = useAuth();

  // تحديد الروابط حسب الدور
  let filteredLinks = navLinks;
  if (roles && roles.length > 0) {
    if (roles.includes("Sales") && !roles.includes("Admin")) {
      filteredLinks = navLinks.filter(link => link.name === "Creat Services");
    }
  }

  return (
    <aside className="h-screen w-64 bg-white flex flex-col justify-between shadow-lg fixed left-0 top-0 z-40">
      {/* Top: Logo */}
      <div>
        <div className="flex items-center justify-center py-8">
          <img src={logo} alt="Logo" className="w-30 h-auto" />
        </div>

        {/* User Info */}
        {user && (
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-base rounded-full flex items-center justify-center">
                <FaUser className="text-primary text-sm" />{" "}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {user.displayName}
                </p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
        )}

        {/* Nav Links */}
        <nav className="mt-8 flex flex-col gap-8 px-4">
          {filteredLinks.map((link) => {
            const isActive = window.location.pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base hover:text-white hover:bg-second transition-colors duration-200 text-lg font-medium group ${isActive ? "bg-second text-white" : ""}`}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </span>
                {link.name}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Logout */}
      <div className="p-4 border-t border-gray-200">
        <Logout />
      </div>
    </aside>
  );
};

export default SideBarDashboard;
