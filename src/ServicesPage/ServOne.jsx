import React from "react";
import { useTranslation } from "react-i18next";
import icon1 from "../assets/home/presention-chart.svg";
import icon2 from "../assets/home/chart.svg";
import icon3 from "../assets/home/mirroring-screen.svg";
import icon4 from "../assets/services/picture-frame.svg";
import icon5 from "../assets/services/frame.svg";
import icon6 from "../assets/services/video-play.svg";
import icon7 from "../assets/services/send-sqaure-2.svg";
import icon8 from "../assets/services/devices.svg";
import icon9 from "../assets/services/mobile-programming.svg";
import star from "../assets/home/Star 2.png";
import Ellipse from "../assets/home/Ellipse 4.png";

const ServOne = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: icon1,
      iconAlt: "servicesOne.advertising.iconAlt",
      titleKey: "servicesOne.advertising.title",
      descKey: "servicesOne.advertising.description",
    },
    {
      id: 2,
      icon: icon2,
      iconAlt: "servicesOne.content.iconAlt",
      titleKey: "servicesOne.content.title",
      descKey: "servicesOne.content.description",
      extraClass: "lg:translate-y-15",
    },
    {
      id: 3,
      icon: icon3,
      iconAlt: "servicesOne.social.iconAlt",
      titleKey: "servicesOne.social.title",
      descKey: "servicesOne.social.description",
    },
    {
      id: 4,
      icon: icon4,
      iconAlt: "servicesOne.design.iconAlt",
      titleKey: "servicesOne.design.title",
      descKey: "servicesOne.design.description",
    },
    {
      id: 5,
      icon: icon5,
      iconAlt: "servicesOne.motion.iconAlt",
      titleKey: "servicesOne.motion.title",
      descKey: "servicesOne.motion.description",
      extraClass: "lg:translate-y-15",
    },
    {
      id: 6,
      icon: icon6,
      iconAlt: "servicesOne.video.iconAlt",
      titleKey: "servicesOne.video.title",
      descKey: "servicesOne.video.description",
    },
    {
      id: 7,
      icon: icon7,
      iconAlt: "servicesOne.seo.iconAlt",
      titleKey: "servicesOne.seo.title",
      descKey: "servicesOne.seo.description",
    },
    {
      id: 8,
      icon: icon8,
      iconAlt: "servicesOne.web.iconAlt",
      titleKey: "servicesOne.web.title",
      descKey: "servicesOne.web.description",
      extraClass: "lg:translate-y-15",
    },
    {
      id: 9,
      icon: icon9,
      iconAlt: "servicesOne.app.iconAlt",
      titleKey: "servicesOne.app.title",
      descKey: "servicesOne.app.description",
    },
  ];

  return (
    <section className="py-[120px] px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center space-x-2 mb-10">
          <img src={star} alt={t("common.decorationStarAlt")} />
          <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
            {t("servicesOne.title")}
          </h3>
        </div>
        <h2 className="flex items-center justify-center mb-15 text-[20px] md:text-[32px] font-[700] leading-[44px]">
          {t("servicesOne.subtitle")}
        </h2>
        <img
          src={Ellipse}
          alt={t("common.decorationEllipseAlt")}
          className="absolute hidden lg:block left-1/2 -translate-x-1/2 -translate-y-40 -z-10"
        />
        <div className="max-w-7xl max-h-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col ${
                  service.extraClass || ""
                }`}
                style={{
                  boxShadow: "0px 0px 24px 0px rgba(240, 146, 25, 0.50)",
                }}
              >
                <img
                  src={service.icon}
                  alt={t(service.iconAlt)}
                  className="mb-[16px]"
                />
                <div className="text-center">
                  <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                    {t(service.titleKey)}
                  </h2>
                  <p className="text-base text-[12px] font-[400] leading-[18px]">
                    {t(service.descKey)}
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

export default ServOne;
