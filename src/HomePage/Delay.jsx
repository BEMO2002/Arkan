import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/home/icon.svg";
import { useTranslation } from "react-i18next";

const Delay = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto pb-20 p-4">
      <h2 className="text-center text-[20px] md:text-[40px] text-base font-[700]">
        {t("delay.heading.part1")}
        <span className="text-primary"> {t("delay.heading.part2")}</span>
        {t("delay.heading.part3")}
      </h2>
      <Link
        to="/contact"
        className="mx-auto mt-8 w-full md:w-[520px] h-[48px] flex items-center justify-center gap-2 px-[16px] py-[8px] font-[700] border border-transparent text-[16px] leading-[26px] rounded-[8px] text-white bg-primary hover:bg-second focus:outline-none transition-colors duration-300"
      >
        <img src={icon} alt={t("common.iconAlt")} />
        {t("heroButton")}
      </Link>
    </div>
  );
};

export default Delay;
