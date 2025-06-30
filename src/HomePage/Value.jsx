import React from "react";
import { useTranslation } from "react-i18next";
import icon1 from "../assets/home/setting-2.svg";
import icon2 from "../assets/home/global.svg";
import icon3 from "../assets/home/status-up.svg";
import star from "../assets/home/Star 2.png";
import icon4 from "../assets/home/star.svg";
import Ellipse from "../assets/home/Ellipse 2.png";
const Value = () => {
  const { t } = useTranslation();
  return (
    <section className=" py-[100px] px-4 sm:px-6  lg:px-8 relative ">
      <div className="container mx-auto">
        <div className="flex items-center justify-center space-x-2 mb-20 ">
          <img src={star} alt="" />
          <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
            {t("ValueHeader")}
          </h3>
        </div>
        <img
          src={Ellipse}
          alt=""
          className="absolute top-20 right-50 -z-10 opacity-50 lg:opacity-100"
        />
        <div className="max-w-7xl max-h-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6  ">
            <div
              className="bg-[#FBFBFB] p-[32px] w-[282px] rounded-[12px]  flex items-center justify-center flex-col"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
            >
              <img src={icon1} alt="" className="mb-[16px]" />
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  All Sizes Business
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px] ">
                  Every business and industry requires an approach.
                </p>
              </div>
            </div>
            <div
              className="bg-[#FBFBFB] p-[32px] w-[282px] rounded-[12px] flex items-center justify-center flex-col "
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
            >
              <img src={icon2} alt="" className="mb-[16px]" />
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  Keep you in the Loop
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px] ">
                  You make sure you know how campaign is performing.
                </p>
              </div>
            </div>
            <div
              className="bg-[#FBFBFB] p-[32px] w-[282px] rounded-[12px]  flex items-center justify-center flex-col"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
            >
              <img src={icon3} alt="" className="mb-[16px]" />
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  Significant ROI
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px] ">
                  To generate highly focused leads ready to purchases.
                </p>
              </div>
            </div>
            <div
              className="bg-[#FBFBFB] p-[32px] w-[282px] rounded-[12px]  flex items-center justify-center flex-col"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
            >
              <img src={icon4} alt="" className="mb-[16px]" />
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  Awesome Results
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px] ">
                  We have seen great successes with everyone companies.
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
