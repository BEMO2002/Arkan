import React from "react";
import { useTranslation } from "react-i18next";
import Rectangle from "../assets/home/Rectangle 2.png";
import AboutImage from "../assets/home/About.png";
import star from "../assets/home/Star 2.png";
const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className=" py-[50px] px-4 sm:px-6 lg:px-8 relative">
      <div className="flex items-center justify-center space-x-2 ">
        <img src={star} alt="" />
        <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
          {t("AboutHeader")}
        </h3>
      </div>
      <img
        src={Rectangle}
        alt=""
        className={`absolute opacity-50 lg:opacity-100 left-0 bottom-[50%] translate-y-[50%] -z-10 ${
          i18n.language === "ar"
            ? " right-0 scale-x-[-1] translate-y-[55%]"
            : "left-0"
        }`}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 text-center md:text-start ">
            <h2 className="text-[25px] lg:text-[32px] font-[700] text-base mb-1 leading-[44px]">
              {t("AboutTitle")} <br />
              <span className="text-base">{t("AboutTitleTwo")}</span>
            </h2>
            <p className="md:text-[24px] text-[20px] text-base font-[400] mt-[16px] md:mb-[40px] lg:w-[600px]  w-[370px] mx-auto md:mx-0">
              {t("AboutDescription")}
            </p>
            <p className="md:text-[20px] text-[17px] text-baseTwo font-[400] leading-[30px] mt-[10px] lg:w-[600px]   w-[380px] mx-auto md:mx-0">
              {t("AboutDescriptionTwo")} <br /> <br />
              <span className="">{t("AboutDescriptionThree")}</span> <br />{" "}
              <br />
              <span className="text-base">{t("AboutDescriptionFour")}</span>
            </p>
          </div>
          {/* Left side - Image */}
          <div className="w-full hidden md:block md:w-1/2">
            <div className="relative overflow-hidden">
              <img src={AboutImage} alt={t("heroDescription")} className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
