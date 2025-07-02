import React from "react";
import star from "../assets/home/Star 2.png";
import { useTranslation } from "react-i18next";
import icon from "../assets/home/icon.svg";
import logo from "../assets/home/logo(arkan).png";
import AboutImage from "../assets/home/About.png";
import { Link } from "react-router-dom";

const Who = () => {
  const { t } = useTranslation();

  return (
    <section className="py-[70px] px-4 sm:px-6 lg:px-8 relative">
      <div className="flex items-center justify-center space-x-2">
        <img src={star} alt={t("common.decorationStarAlt")} />
        <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
          {t("who.title")}
        </h3>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left side - Image */}
          <div className="w-full hidden md:block md:w-1/2">
            <div className="relative overflow-hidden">
              <img
                src={AboutImage}
                alt={t("who.imageAlt")}
                className="w-[487px]"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 text-center md:text-start">
            <h2 className="text-[25px] lg:text-[32px] font-[700] text-base mb-1 leading-[44px]">
              <span className="text-primary">{t("who.agencyName")}</span>{" "}
              {t("who.agencyTitle")}
            </h2>

            <div className="flex items-center flex-col md:flex-row gap-2 mt-5">
              <img
                src={logo}
                alt={t("commonWho.logoAlt")}
                className="w-[71.72px]"
              />
              <p className="md:text-[20px] text-[20px] text-base font-[400] leading-[30px] lg:w-[449px] w-[390px] mx-auto md:mx-0">
                {t("who.description1")}
              </p>
            </div>

            <p className="md:text-[16px] text-[16px] text-base font-[400] leading-[26px] mt-[10px] lg:w-[523px] w-[390px] mx-auto md:mx-0">
              {t("who.description2")}
            </p>
            <Link
              to="/contact"
              className="relative mt-7 w-[347px] h-[48px] inline-flex items-center justify-center gap-2 px-[16px] py-[8px] font-[700] border border-transparent text-[16px] leading-[26px] rounded-[8px] text-white bg-primary hover:bg-second focus:outline-none transition-colors duration-300"
            >
              <img src={icon} alt={t("commonWho.buttonIconAlt")} />
              {t("who.buttonText")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
