import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import marketingImage from "../assets/home/home.png";
import icon from "../assets/home/icon.svg";
import star from "../assets/home/Star 1 (1).png";
import Ellipse from "../assets/home/Ellipse 1.png";
import Rectangle from "../assets/home/Rectangle 1.png";
import { Link } from "react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const spinVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="pt-[132px] pb-[50px] px-4 sm:px-6 lg:px-8 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.img
        src={star}
        alt={t("starAlt", "Star decoration")}
        className={`absolute top-5 -z-10 opacity-50 lg:opacity-100 ${
          i18n.language === "ar" ? "left-10" : "right-10"
        }`}
        variants={spinVariants}
        animate="animate"
      />
      <motion.img
        src={Ellipse}
        alt={t("ellipseAlt", "Ellipse decoration")}
        className={`absolute hidden md:block md:bottom-7 -bottom-0 -z-10 opacity-50 lg:opacity-100  ${
          i18n.language === "ar" ? "md:left-50 left-20" : "md:right-50 right-20"
        }`}
      />
      <motion.img
        src={Rectangle}
        alt=""
        className="absolute hidden lg:block right-0 bottom-[50%] translate-y-[52%] -z-10"
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          {/* Left side - Image */}
          <motion.div
            className="w-full hidden md:block md:w-1/2"
            variants={imageVariants}
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={marketingImage}
                alt={t("heroDescription")}
                className=""
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-start mb-30"
            variants={containerVariants}
          >
            <motion.span
              className="inline-block text-baseTwo text-[14px] md:text-[16px] font-[700] leading-[26px] mb-4"
              variants={itemVariants}
            >
              {t("heroSubtitle")}
            </motion.span>

            <motion.h2
              className="text-[28px] lg:text-[40px] font-[700] text-primary mb-1 leading-[52px]"
              variants={itemVariants}
            >
              {t("heroTitle")} <br />
              <span className="text-base">{t("heroTitleFrom")}</span>
            </motion.h2>
            <motion.p
              className="text-[17px] text-base mt-[16px] lg:w-[410px] w-[350px] mx-auto md:mx-0"
              variants={itemVariants}
            >
              {t("heroDescription")}
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.div transition={{ duration: 0.2 }}>
                <Link
                  to="/contact"
                  className="relative mt-4 w-[265px] h-[48px] inline-flex items-center justify-center gap-2 px-[16px] py-[8px] font-[700] border border-transparent text-[16px] leading-[26px] rounded-[8px] text-white bg-primary hover:bg-second focus:outline-none transition-colors duration-300"
                >
                  <motion.img
                    src={icon}
                    alt=""
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {t("heroButton")}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
