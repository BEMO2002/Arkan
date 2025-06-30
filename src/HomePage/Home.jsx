import React from "react";
import { useTranslation } from "react-i18next";
import marketingImage from "../assets/home/home.png";
import icon from "../assets/home/icon.svg";
import star from "../assets/home/Star 1 (1).png";
import Ellipse from "../assets/home/Ellipse 1.png";
import Rectangle from "../assets/home/Rectangle 1.png";
import { Link } from "react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className=" pt-[132px] pb-[50px] px-4 sm:px-6 lg:px-8 relative">
      <img
        src={star}
        alt={t("starAlt", "Star decoration")}
        className={`absolute top-5 -z-10 opacity-50 lg:opacity-100 ${
          i18n.language === "ar" ? "left-10" : "right-10"
        }`}
      />
      <img
        src={Ellipse}
        alt={t("ellipseAlt", "Ellipse decoration")}
        className={`absolute hidden md:block md:bottom-7 -bottom-0 -z-10 opacity-50 lg:opacity-100 ${
          i18n.language === "ar" ? "md:left-50 left-20" : "md:right-50 right-20"
        }`}
      />
      <img
        src={Rectangle}
        alt=""
        className="absolute hidden lg:block right-0 bottom-[50%] translate-y-[52%] -z-10"
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Left side - Image */}
          <div className="w-full hidden md:block md:w-1/2">
            <div className="relative overflow-hidden">
              <img
                src={marketingImage}
                alt={t("heroDescription")}
                className=""
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 text-center md:text-start mb-30">
            <span className="inline-block text-baseTwo text-[14px] md:text-[16px] font-[700] leading-[26px] mb-4">
              {t("heroSubtitle")}
            </span>

            <h2 className="text-[28px] lg:text-[40px] font-[700] text-primary mb-1 leading-[52px]">
              {t("heroTitle")} <br />
              <span className="text-base">{t("heroTitleFrom")}</span>
            </h2>
            <p className="text-[17px] text-base mt-[16px] lg:w-[410px] w-[350px] mx-auto md:mx-0">
              {t("heroDescription")}
            </p>
            <Link
              to="/contact"
              className="relative mt-4 w-[265px] h-[48px] inline-flex items-center justify-center gap-2 px-[16px] py-[8px] font-[700] border border-transparent text-[16px] leading-[26px] rounded-[8px] text-white bg-primary hover:bg-second focus:outline-none transition-colors duration-300"
            >
              <img src={icon} alt="" />
              {t("heroButton")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
