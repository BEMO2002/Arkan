import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/home/logo(arkan).png";
import icon from "../assets/home/icon.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // تغيير الاتجاه بناءً على اللغة
  document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // NavLink component for consistent styling
  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`relative group px-[16px] py-[8px] text-[16px] font-[400] leading-[26px] ${
        isActive(to)
          ? "text-primary"
          : "text-base hover:text-primary duration-300"
      }`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-3 h-[4px] bg-primary transition-all duration-300 ${
          isActive(to) ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );

  // دالة تبديل اللغة
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav
      className="bg-white"
      style={{ boxShadow: "0px 4px 4px rgba(250, 221, 184, 0.8)" }}
    >
      <div className="max-w-[1350px] mx-auto md:px-[120px] px-4 py-1 gap-[32px] sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt={t("navHome")} className="w-[71.72px]" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/">{t("navHome")}</NavLink>
            <NavLink to="/about">{t("navAbout")}</NavLink>
            <NavLink to="/services">{t("navServices")}</NavLink>
            <NavLink to="/portfolio">{t("navPortfolio")}</NavLink>
            <NavLink to="/team">{t("navTeam")}</NavLink>
            <NavLink to="/contact">{t("navContact")}</NavLink>

            <div
              className={`relative inline-flex items-center h-[32px] w-[64px] bg-gray-200 rounded-full p-1 cursor-pointer language-switcher ${
                i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
              }`}
              onClick={toggleLanguage}
            >
              <div
                className={`absolute h-[24px] w-[24px] bg-primary rounded-full transition-transform duration-300 ${
                  i18n.language === "en"
                    ? "translate-x-0"
                    : "translate-x-[32px] rtl:-translate-x-[32px]"
                }`}
              ></div>
              <span
                className={`w-1/2 text-center text-[14px] font-[400] ${
                  i18n.language === "en" ? "text-white" : "text-base"
                }`}
              >
                EN
              </span>
              <span
                className={`w-1/2 text-center text-[14px] font-[400] ${
                  i18n.language === "ar" ? "text-white" : "text-base"
                }`}
              >
                AR
              </span>
            </div>
          </div>

          {/* CTA Button - hidden on mobile */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="relative w-[347px] h-[48px] inline-flex items-center justify-center gap-2 px-[16px] py-[8px] font-[700] border border-transparent text-[16px] leading-[26px] rounded-[8px] text-white bg-primary hover:bg-second focus:outline-none transition-colors duration-300"
            >
              <img src={icon} alt="" />
              {t("heroButton")}
            </Link>
          </div>

          {/* Mobile menu button - shown on mobile and tablet */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - shown when menu is open */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center w-full py-4">
            <div className="w-full flex flex-col items-center space-y-4">
              <NavLink to="/">{t("navHome")}</NavLink>
              <NavLink to="/about">{t("navAbout")}</NavLink>
              <NavLink to="/services">{t("navServices")}</NavLink>
              <NavLink to="/portfolio">{t("navPortfolio")}</NavLink>
              <NavLink to="/team">{t("navTeam")}</NavLink>
              <NavLink to="/contact">{t("navContact")}</NavLink>
              {/* زر Toggle تغيير اللغة في الموبايل */}
              <div
                className={`relative inline-flex items-center h-[32px] w-[64px] bg-gray-200 rounded-full p-1 cursor-pointer language-switcher ${
                  i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
                }`}
                onClick={toggleLanguage}
              >
                <div
                  className={`absolute h-[24px] w-[24px] bg-primary rounded-full transition-transform duration-300 ${
                    i18n.language === "en"
                      ? "translate-x-0"
                      : "translate-x-[32px] rtl:-translate-x-[32px]"
                  }`}
                ></div>
                <span
                  className={`w-1/2 text-center text-[14px] font-[400] ${
                    i18n.language === "en" ? "text-white" : "text-base"
                  }`}
                >
                  EN
                </span>
                <span
                  className={`w-1/2 text-center text-[14px] font-[400] ${
                    i18n.language === "ar" ? "text-white" : "text-base"
                  }`}
                >
                  AR
                </span>
              </div>
            </div>

            <div className="w-full  px-4 pt-6">
              <Link
                to="/contact"
                className="w-[347PX] h-[48px] flex justify-center items-center gap-2 px-4 py-3 font-[700] border border-transparent text-[16px] leading-[26px] rounded-[8px] text-white bg-primary hover:bg-second transition-colors duration-300"
              >
                <img src={icon} alt="" />
                {t("heroButton")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
