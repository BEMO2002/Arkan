import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import logo from "../assets/home/logo(arkan).png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-foot text-gray-800 pt-12 pb-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <img
            src={logo}
            alt={t("common.logoAlt")}
            className="w-[334px] mx-auto"
          />
          <p className="mb-4 font-[400] text-[#000] text-[16px] w-[380px]  mx-auto">
            {t("footer.about.description.part1")}
          </p>
        </div>

        {/* Contacts Section */}
        <div className="space-y-10 mt-6">
          <h3 className="text-[32px] font-[700] mb-4">
            {t("footer.contacts.title")}
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-primary" />
              <span className="text-[16px]">
                {t("footer.contacts.address")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-primary" />
              <span className="text-[16px] font-[400]">
                {t("footer.contacts.email")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="mt-1 text-primary" />
              <span className="text-[16px] font-[400]">
                {t("footer.contacts.hours")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-primary" />
              <span className="text-[16px] font-[400]">
                {t("footer.contacts.phone")}
              </span>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="space-y-10 mt-5">
          <h3 className="text-[32px] font-[700] mb-4">
            {t("footer.services.title")}
          </h3>
          <ul className="space-y-2 text-primary text-[16px] font-[400]">
            {t("footer.services.list", { returnObjects: true }).map(
              (service, index) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>
        </div>
      </div>
      <p className="text-sm text-center text-gray-600 mt-6 cursor-pointer ">
        {t("footer.copyright.part1")}
        <span className="text-primary font-bold">Arkan – Marketing Agency</span>
        {t("footer.copyright.part2")}
      </p>
    </footer>
  );
};

export default Footer;
