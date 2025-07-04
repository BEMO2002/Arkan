import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Rectangle from "../assets/home/Rectangle 2.png";
import AboutImage from "../assets/home/About.png";
import star from "../assets/home/Star 2.png";
const About = () => {
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
      className="py-[50px] px-4 sm:px-6 lg:px-8 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex items-center justify-center space-x-2 ">
        <motion.img
          src={star}
          alt=""
          variants={spinVariants}
          animate="animate"
        />
        <motion.h3
          className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]"
          variants={itemVariants}
        >
          {t("AboutHeader")}
        </motion.h3>
      </div>
      <motion.img
        src={Rectangle}
        alt=""
        className={`absolute opacity-50 lg:opacity-100 left-0 bottom-[50%] translate-y-[50%] -z-10 ${
          i18n.language === "ar"
            ? " right-0 scale-x-[-1] translate-y-[55%]"
            : "left-0"
        }`}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Right side - Text content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-start "
            variants={containerVariants}
          >
            <motion.h2
              className="text-[25px] lg:text-[32px] font-[700] text-base mb-1 leading-[44px]"
              variants={itemVariants}
            >
              {t("AboutTitle")} <br />
              <span className="text-base">{t("AboutTitleTwo")}</span>
            </motion.h2>
            <motion.p
              className="md:text-[24px] text-[20px] text-base font-[400] mt-[16px] md:mb-[40px] lg:w-[600px]  w-[370px] mx-auto md:mx-0"
              variants={itemVariants}
            >
              {t("AboutDescription")}
            </motion.p>
            <motion.p
              className="md:text-[20px] text-[17px] text-baseTwo font-[400] leading-[30px] mt-[10px] lg:w-[600px]   w-[380px] mx-auto md:mx-0"
              variants={itemVariants}
            >
              {t("AboutDescriptionTwo")} <br /> <br />
              <span className="">{t("AboutDescriptionThree")}</span> <br />{" "}
              <br />
              <span className="text-base">{t("AboutDescriptionFour")}</span>
            </motion.p>
          </motion.div>
          {/* Left side - Image */}
          <motion.div
            className="w-full hidden md:block md:w-1/2"
            variants={imageVariants}
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={AboutImage}
                alt={t("heroDescription")}
                className=""
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
