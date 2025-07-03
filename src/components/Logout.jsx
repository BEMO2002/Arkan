import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    // Use the logout function from AuthContext
    logout();

    toast.success("Logged out successfully", {
      theme: "colored",
    });
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white flex items-center gap-2 p-2 mx-auto bg-red-600  px-7 py-3 rounded-md text-[17px] font-medium"
    >
      Logout
      <FaSignOutAlt />
    </button>
  );
};

export default Logout;
