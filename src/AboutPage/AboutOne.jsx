import React from "react";
import star from "../assets/home/Star 2.png";
import { useTranslation } from "react-i18next";
import AboutImage from "../assets/About/A.png";
import logo from "../assets/home/logo(arkan).png";
import ball from "../assets/About/ball.png";

const AboutOne = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="py-[70px] px-4 sm:px-6 lg:px-8 relative">
      <div className="flex items-center justify-center space-x-2">
        <img src={star} alt={t("commonOne.decorationStarAlt")} />
        <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
          {t("aboutOne.section1.title")}
        </h3>
      </div>

      <div className="max-w-7xl mx-auto">
        <img
          src={ball}
          alt={t("common.decorationBallAlt")}
          className={`absolute opacity-50 lg:opacity-100 bottom-[20%] translate-y-[50%] -z-10 ${
            i18n.language === "ar"
              ? "left-0 scale-x-[-1] translate-y-[55%]"
              : "right-0"
          }`}
        />

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left side - Image */}
          <div className="w-full hidden md:block md:w-1/2">
            <div className="relative overflow-hidden">
              <img
                src={AboutImage}
                alt={t("aboutOne.section1.imageAlt")}
                className=""
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 text-center md:text-start">
            <h2 className="text-[25px] lg:text-[32px] font-[700] text-base mb-1 leading-[44px]">
              {t("aboutOne.section1.heading.line1")}
              <br />
              <span className="text-base">
                {t("aboutOne.section1.heading.line2")}
              </span>
            </h2>

            <div className="flex items-center flex-col md:flex-row gap-2 mt-5">
              <img
                src={logo}
                alt={t("commonOne.logoAlt")}
                className="w-[71.72px]"
              />
              <p className="md:text-[20px] text-[20px] text-base font-[400] leading-[30px] lg:w-[449px] w-[390px] mx-auto md:mx-0">
                {t("aboutOne.section1.description1")}
              </p>
            </div>

            <p className="md:text-[16px] text-[16px] text-base font-[400] leading-[26px] mt-[10px] lg:w-[523px] w-[390px] mx-auto md:mx-0">
              {t("aboutOne.section1.description2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
