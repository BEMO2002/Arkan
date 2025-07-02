import React from "react";
import { Link } from "react-router-dom";
import Header from "../assets/services/header.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Head = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-1 relative">
      <img
        src={Header}
        alt={t("services.header.imageAlt")}
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-base md:text-[40px] text-[35px] font-[700] leading-[52px]">
          {t("services.header.title")}
        </h1>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Link to="/" className="text-baseTwo text-[14px] font-[400]">
            {t("breadServices.home")}
          </Link>
          <MdKeyboardArrowRight size={23} />
          <p className="text-[14px] font-[400] text-base">
            {t("breadServices.Services")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Head;
