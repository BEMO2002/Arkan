import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import MissionImage from "../assets/home/mission.png";
import Rectangle from "../assets/home/Rectangle 1.png";
import Led from "../assets/home/led.png";
const Mission = () => {
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
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
      className=" py-[110px] px-4 sm:px-6 lg:px-8 relative t"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.img
          src={Rectangle}
          alt=""
          className={`absolute opacity-50 lg:opacity-100  bottom-[50%] translate-y-[10%] -z-10 ${
            i18n.language === "ar"
              ? " left-0 scale-x-[-1] translate-y-[55%]"
              : "right-0"
          }`}
          variants={floatingVariants}
          animate="animate"
        />
        <div className="flex flex-col md:flex-row items-center gap-10 ">
          {/* Left side - Image */}
          <motion.div
            className="w-full  md:w-1/2"
            variants={imageVariants}
          >
            <div className="relative overflow-hidden flex items-center flex-col justify-center ">
              <motion.img
                src={MissionImage}
                alt={t("heroDescription")}
                className=""
                variants={imageVariants}
              />
              <motion.img
                src={Led}
                alt={t("heroDescription")}
                className="hidden md:block "
                variants={imageVariants}
              />
            </div>
          </motion.div>
          {/* Right side - Text content */}
          <motion.div
            className="w-full md:w-1/2 text-center lg:text-start  "
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-base text-[24px] font-[700] leading-[36px] mb-2 ">
                {t("MissionTitleOne")}
              </h2>
              <p className="lg:w-[540px]  text-[16px] font-[400] leading-[26px]">
                {t("MissionParaOne")} <br /> <br />
                {t("MissionParaOne2")}
              </p>
            </motion.div>
            <motion.div className="md:pt-15 pt-8" variants={itemVariants}>
              <h2 className="text-base text-[24px] font-[700] leading-[36px] mb-2 ">
                {t("MissionTitleTwo")}
              </h2>
              <p className="lg:w-[540px]  text-[16px] font-[400] leading-[26px]">
                {t("MissionParaTwo")}
                <br /> <br />
                {t("MissionParaOne3")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Mission;
