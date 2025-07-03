import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const ContactForm = () => {
  const businessFields = [
    "SEO Optimization",
    "Graphic Design",
    "Web Development",
    "Video Editing",
    "Advertising Strategies",
    "Creative Content Creation",
    "Social Media Campaigns",
    "Motion Graphic",
    "App Development",
  ];

  const [formData, setFormData] = useState({
    Name: "",
    PhoneNumber: "",
    BusinessField: "",
    Message: "",
    Email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "fullName" ? "Name" : id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Name.trim()) {
      newErrors.Name = "Name is required.";
    }
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.Email)) {
        newErrors.Email = "Please enter a valid email address.";
      }
    }
    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "Phone Number is required.";
    } else {
      const phoneRegex = /^\d{9,15}$/;
      if (!phoneRegex.test(formData.PhoneNumber)) {
        newErrors.PhoneNumber = "Phone Number must be 9-15 digits.";
      }
    }
    if (!formData.BusinessField) {
      newErrors.BusinessField = "Business Field is required.";
    }
    if (!formData.Message.trim()) {
      newErrors.Message = "Message is required.";
    } else if (formData.Message.trim().length < 10) {
      newErrors.Message = "Message must be at least 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    } else {
      setErrors({});
    }

    setIsLoading(true);
    const formPayload = new FormData();
    formPayload.append("Name", formData.Name);
    formPayload.append("PhoneNumber", formData.PhoneNumber);
    formPayload.append("BusinessField", formData.BusinessField);
    formPayload.append("Message", formData.Message);
    console.log("Submitting payload:", Object.fromEntries(formPayload)); // Debugging log

    try {
      const response = await axios.post(
        "https://arkan2.runasp.net/api/ContactForm",
        formPayload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        setFormData({
          Name: "",
          PhoneNumber: "",
          BusinessField: "",
          Message: "",
          Email: "",
        });
      }
    } catch (error) {
      console.error("API error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8  ">
      <div
        className="max-w-6xl mx-auto rounded-[30px] bg-white shadow-md p-2 sm:p-4 "
        style={{
          boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.20)",
        }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Contact Information - Hidden on mobile */}
          <div className="hidden lg:block lg:w-1/2 bg-[rgba(240,146,25,0.38)] rounded-[30px] p-4 sm:p-6 text-base">
            <h2 className="text-3xl sm:text-[40px] font-bold text-center mt-6 mb-6">
              Contact Information
            </h2>
            <div className="mt-40">
              <div className="mb-8 flex items-center justify-start ml-20 gap-3">
                <FaEnvelope className="text-xl" />
                <p className="text-base sm:text-lg font-semibold">
                  arkancompany995@gmail.com
                </p>
              </div>

              <div className="mb-8 flex items-center justify-start ml-20 gap-3">
                <FaMapMarkerAlt className="text-xl" />
                <p className="text-base md:text-[17px] font-semibold">
                  15 Mostafa El-Nahas Street, 8th District, Nasr City, Cairo,
                  Egypt
                </p>
              </div>
            </div>

            <div className="flex items-center w-fit mx-auto mt-30 justify-center   p-3 bg-[#FEF4E8] rounded-[16px] space-x-4">
              <Link to="https://www.facebook.com/share/1BnqRzJ4zh/">
                <CiFacebook className="w-6 h-6 hover:text-gray-600 cursor-pointer" />
              </Link>
              <Link to="https://www.instagram.com/arkan220a/">
                <FaInstagram className="w-5 h-5 hover:text-gray-600 cursor-pointer" />
              </Link>
              <Link to="https://x.com/Arkan227286">
                <FaXTwitter className="w-5 h-5 hover:text-gray-600 cursor-pointer" />
              </Link>
              <Link to="https://www.linkedin.com/company/arkan-company22">
                <FiLinkedin className="w-5 h-5 hover:text-gray-600 cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.Name}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border-1 rounded border-gray-300 focus:ring-0 focus:outline-0 bg-transparent text-sm sm:text-base"
                  required
                />
                {errors.Name && (
                  <p className="text-red-500 text-xs mt-1">{errors.Name}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border-1 rounded  border-gray-300 focus:ring-0 focus:outline-0 bg-transparent text-sm sm:text-base"
                />
                {errors.Email && (
                  <p className="text-red-500 text-xs mt-1">{errors.Email}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <div className="flex items-center">
                  <span className="px-3  py-3 border-1 border-r-0 rounded-tr-none rounded-br-none rounded border-gray-300 text-sm sm:text-base">
                    +20
                  </span>
                  <input
                    type="tel"
                    id="PhoneNumber"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                    className="flex-1 px-3 py-3 border-1 rounded rounded-tl-none rounded-bl-none border-gray-300 focus:ring-0 focus:outline-0 bg-transparent text-sm sm:text-base"
                    required
                  />
                </div>
                {errors.PhoneNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.PhoneNumber}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="businessField"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Business Field
                </label>
                <select
                  id="BusinessField"
                  value={formData.BusinessField}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border-1 rounded border-gray-300 focus:ring-0 focus:outline-0 bg-transparent text-sm sm:text-base"
                  required
                >
                  <option value="">Select a field</option>
                  {businessFields.map((field, index) => (
                    <option key={index} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
                {errors.BusinessField && (
                  <p className="text-red-500 text-xs mt-1">{errors.BusinessField}</p>
                )}
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="Message"
                  rows="4"
                  value={formData.Message}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border-1 rounded border-gray-300 focus:ring-0 focus:outline-0 bg-transparent text-sm sm:text-base"
                  required
                ></textarea>
                {errors.Message && (
                  <p className="text-red-500 text-xs mt-1">{errors.Message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-second font-medium py-2 px-4 rounded-md transition duration-300 flex items-center justify-center text-sm"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span>Loading...</span>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
