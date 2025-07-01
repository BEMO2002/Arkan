import React from "react";
import { useTranslation } from "react-i18next";
import icon1 from "../assets/home/presention-chart.svg";
import icon2 from "../assets/home/chart.svg";
import icon3 from "../assets/home/mirroring-screen.svg";
import star from "../assets/home/Star 2.png";
import Ellipse from "../assets/home/Ellipse 4.png";
import { Link } from "react-router-dom";
import arrow from "../assets/home/arrow-right.svg";
const Digital = () => {
  const { t } = useTranslation();
  return (
    <section className="py-[120px]   px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center space-x-2  mb-10">
          <img src={star} alt="" />
          <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
            {t("DigitalHeader")}
          </h3>
        </div>
        <h2 className="flex items-center justify-center mb-15 text-[20px] md:text-[32px] font-[700] leading-[44px]">
          {t("DigitalHeader2")}
        </h2>
        <img
          src={Ellipse}
          alt=""
          className="absolute hidden lg:block -bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        />
        <div className="max-w-7xl max-h-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* البوكس الأول */}
            <div
              className="bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
            >
              <img src={icon1} alt="" className="mb-[16px]" />
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  {t("DigitalHeadOne")}
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px]">
                  {t("DigitalParagraphOne")}
                </p>
              </div>
            </div>

            {/* البوكس الثاني */}
            <div
              className="bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col lg:translate-y-15"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
            >
              <img src={icon2} alt="" className="mb-[16px]" />
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  {" "}
                  {t("DigitalHeadTwo")}
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px]">
                  {t("DigitalParagraphTwo")}
                </p>
              </div>
            </div>

            {/* البوكس الثالث */}
            <div
              className="bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col "
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
            >
              <img src={icon3} alt="" className="mb-[16px]" />
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  {t("DigitalHeadThree")}
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px]">
                  {t("DigitalParagraphThree")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/contact"
          className=" mx-auto lg:mt-50 mt-10  w-[347px] h-[48px] flex items-center justify-center gap-2 px-[16px] py-[8px] font-[700] border border-transparent text-[16px] leading-[26px] rounded-[8px] text-white bg-primary hover:bg-second focus:outline-none transition-colors duration-300"
        >
          <img src={arrow} alt="" />
          {t("DigitalButton")}
        </Link>
      </div>
    </section>
  );
};

export default Digital;
