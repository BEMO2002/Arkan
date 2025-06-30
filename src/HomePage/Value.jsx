import React from "react";
import { useTranslation } from "react-i18next";
import icon1 from "../assets/home/setting-2.svg";
import icon2 from "../assets/home/global.svg";
import icon3 from "../assets/home/status-up.svg";
import star from "../assets/home/Star 2.png";
import icon4 from "../assets/home/star.svg";
import Ellipse from "../assets/home/Ellipse 2.png";

const Value = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="py-[120px]   px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center space-x-2 mb-20">
          <img src={star} alt="" />
          <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
            {t("ValueHeader")}
          </h3>
        </div>

        <img
          src={Ellipse}
          alt=""
          className={`absolute top-30 hidden lg:block -z-10 opacity-50 lg:opacity-100
  ${i18n.language === "ar" ? "left-[400px]" : "right-[400px]"}`}
        />

        <div className="max-w-7xl max-h-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* البوكس الأول */}
            <div
              className="bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
            >
              <img src={icon1} alt="" className="mb-[16px]" />
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  {t("valueHeadOne")}
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px]">
                  {t("valueParagraphOne")}
                </p>
              </div>
            </div>

            {/* البوكس الثاني */}
            <div
              className="bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col lg:translate-y-7"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
            >
              <img src={icon2} alt="" className="mb-[16px]" />
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  {" "}
                  {t("valueHeadTwo")}
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px]">
                  {t("valueParagraphTwo")}
                </p>
              </div>
            </div>

            {/* البوكس الثالث */}
            <div
              className="bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col lg:translate-y-15"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
            >
              <img src={icon3} alt="" className="mb-[16px]" />
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  {t("valueHeadThree")}
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px]">
                  {t("valueParagraphThree")}
                </p>
              </div>
            </div>

            {/* البوكس الرابع */}
            <div
              className="bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col lg:translate-y-28"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
            >
              <img src={icon4} alt="" className="mb-[16px]" />
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  {t("valueHeadFour")}
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px]">
                  {t("valueParagraphFour")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
