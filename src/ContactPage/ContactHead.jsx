import React from "react";
import { Link } from "react-router-dom";
import Head from "../assets/contact/تصميم بدون عنوان (27) 1.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

const ContactHead = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="mt-1 relative">
      <img
        src={Head}
        alt={t("contact.header.imageAlt")}
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-base md:text-[40px] text-[35px] font-[700] leading-[52px]">
          {t("contact.header.title")}
        </h1>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Link to="/" className="text-baseTwo text-[14px] font-[400]">
            {t("breadcrumbsContact.home")}
          </Link>
          <MdKeyboardArrowRight
            size={23}
            className={i18n.language === "ar" ? "transform rotate-180" : ""}
          />
          <p className="text-[14px] font-[400] text-base">
            {t("breadcrumbsContact.contact")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHead;
