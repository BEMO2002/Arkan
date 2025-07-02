import React from "react";
import star from "../assets/home/Star 2.png";
import { useTranslation } from "react-i18next";
import WhyImage from "../assets/About/why.png";
import ball from "../assets/About/circle.png";

const Why = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="py-[70px] px-4 sm:px-6 lg:px-8 relative">
      <div className="flex items-center justify-center space-x-2">
        <img src={star} alt={t("why.starAlt")} />
        <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
          {t("why.title")}
        </h3>
      </div>

      <div className="max-w-7xl mx-auto">
        <img
          src={ball}
          alt={t("why.ballAlt")}
          className={`absolute opacity-50 lg:opacity-100 bottom-[20%] translate-y-[50%] -z-10 ${
            i18n.language === "ar"
              ? "right-0 scale-x-[-1] translate-y-[55%]"
              : "left-0"
          }`}
        />

        <div className="flex flex-col md:flex-row items-center md:gap-80 gap-8">
          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 text-center md:text-start">
            <h2 className="text-[25px] lg:text-[32px] font-[700] text-base mb-1 leading-[44px]">
              {t("why.heading.line1")}
              <br />
              <span className="text-base">{t("why.heading.line2")}</span>
            </h2>
            <p className="md:text-[24px] text-[20px] text-baseTwo font-[400] leading-[36px] mt-[10px] lg:w-[600px] w-[370px] mx-auto md:mx-0">
              {t("why.description")}
            </p>
          </div>
          {/* Left side - Image */}
          <div className="w-full  md:w-1/2">
            <div className="relative overflow-hidden">
              <img src={WhyImage} alt={t("why.imageAlt")} className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
