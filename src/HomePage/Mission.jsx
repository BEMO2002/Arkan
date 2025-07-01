import React from "react";
import { useTranslation } from "react-i18next";
import MissionImage from "../assets/home/mission.png";
import Rectangle from "../assets/home/Rectangle 1.png";
import Led from "../assets/home/led.png";
const Mission = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className=" py-[110px] px-4 sm:px-6 lg:px-8 relative t">
      <div className="max-w-7xl mx-auto">
        <img
          src={Rectangle}
          alt=""
          className={`absolute opacity-50 lg:opacity-100  bottom-[50%] translate-y-[10%] -z-10 ${
            i18n.language === "ar"
              ? " left-0 scale-x-[-1] translate-y-[55%]"
              : "right-0"
          }`}
        />
        <div className="flex flex-col md:flex-row items-center gap-10 ">
          {/* Left side - Image */}
          <div className="w-full  md:w-1/2">
            <div className="relative overflow-hidden flex items-center flex-col justify-center ">
              <img src={MissionImage} alt={t("heroDescription")} className="" />
              <img
                src={Led}
                alt={t("heroDescription")}
                className="hidden md:block "
              />
            </div>
          </div>
          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 text-center lg:text-start  ">
            <div>
              <h2 className="text-base text-[24px] font-[700] leading-[36px] mb-2 ">
                {t("MissionTitleOne")}
              </h2>
              <p className="lg:w-[540px]  text-[16px] font-[400] leading-[26px]">
                {t("MissionParaOne")} <br /> <br />
                {t("MissionParaOne2")}
              </p>
            </div>
            <div className="md:pt-15 pt-8">
              <h2 className="text-base text-[24px] font-[700] leading-[36px] mb-2 ">
                {t("MissionTitleTwo")}
              </h2>
              <p className="lg:w-[540px]  text-[16px] font-[400] leading-[26px]">
                {t("MissionParaTwo")}
                <br /> <br />
                {t("MissionParaOne3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
