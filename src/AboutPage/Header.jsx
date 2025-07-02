import React from "react";
import { Link } from "react-router-dom";
import Head from "../assets/About/تصميم بدون عنوان (18) 1.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-1 relative">
      <img
        src={Head}
        alt={t("about.header.imageAlt")}
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-base md:text-[40px] text-[35px] font-[700] leading-[52px]">
          {t("about.header.title")}
        </h1>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Link to="/" className="text-baseTwo text-[14px] font-[400]">
            {t("breadcrumbs.home")}
          </Link>
          <MdKeyboardArrowRight size={23} />
          <p className="text-[14px] font-[400] text-base">
            {t("breadcrumbs.about")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
