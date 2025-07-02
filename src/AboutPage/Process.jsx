import React from "react";
import { useTranslation } from "react-i18next";
import bro from "../assets/About/bro.svg";
import cuate from "../assets/About/cuate.svg";
import search from "../assets/About/search.svg";
import star from "../assets/home/Star 2.png";
import Rectangle from "../assets/home/Rectangle 1.png";

const Process = () => {
  const { t, i18n } = useTranslation();

  const processSteps = [
    {
      id: 1,
      icon: search,
      stepKey: "process.step1",
      number: 1,
    },
    {
      id: 2,
      icon: cuate,
      stepKey: "process.step2",
      number: 2,
      extraClass: "w-[320px]",
    },
    {
      id: 3,
      icon: bro,
      stepKey: "process.step3",
      number: 3,
    },
  ];

  return (
    <section className="py-[90px] px-4 sm:px-6 lg:px-8 relative">
      <div className="flex items-center justify-center space-x-2 mb-10">
        <img src={star} alt={t("about.process.starAlt")} />
        <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
          {t("process.title")}
        </h3>
      </div>

      <div className="container mx-auto">
        <div className="max-w-7xl max-h-7xl mx-auto">
          <img
            src={Rectangle}
            alt={t("process.decorationAlt")}
            className={`absolute opacity-50 lg:opacity-100 bottom-[20%] translate-y-[10%] -z-10 ${
              i18n.language === "ar"
                ? "left-0 scale-x-[-1] translate-y-[55%]"
                : "right-0"
            }`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col relative"
                style={{
                  boxShadow: "0px 0px 24px 0px rgba(240, 146, 25, 0.50)",
                }}
              >
                <span className="absolute top-5 right-5 w-10 text-lg h-10 flex items-center justify-center bg-primary text-white rounded-full">
                  {step.number}
                </span>

                <img
                  src={step.icon}
                  alt={t(`about.process.step${step.id}.iconAlt`)}
                />

                <div className="text-center">
                  <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[4px] mt-2">
                    {t(`process.step${step.id}.title1`)}
                  </h2>
                  <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                    {t(`process.step${step.id}.title2`)}
                  </h2>
                  <p
                    className={`text-base text-[12px] font-[400] leading-[18px] ${
                      step.extraClass || ""
                    }`}
                  >
                    {t(`process.step${step.id}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
