import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import icon1 from "../assets/home/setting-2.svg";
import icon2 from "../assets/home/global.svg";
import icon3 from "../assets/home/status-up.svg";
import star from "../assets/home/Star 2.png";
import icon4 from "../assets/home/star.svg";
import Ellipse from "../assets/home/Ellipse 2.png";

const Value = () => {
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

  return (
    <motion.section
      className="py-[120px]   px-4 sm:px-6 lg:px-8 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <motion.div
          className="flex items-center justify-center space-x-2 mb-10 mt-10"
          variants={containerVariants}
        >
          <img src={star} alt="" />
          <motion.h3
            className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]"
            variants={itemVariants}
          >
            {t("ValueHeader")}
          </motion.h3>
        </motion.div>

        <motion.img
          src={Ellipse}
          alt=""
          className={`absolute top-30 hidden lg:block -z-10 opacity-50 lg:opacity-100
  ${i18n.language === "ar" ? "left-[400px]" : "right-[400px]"}`}
          variants={floatingVariants}
          animate="animate"
        />

        <div className="max-w-7xl max-h-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10"
            variants={containerVariants}
          >
            {/* البوكس الأول */}
            <motion.div
              className="group bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
              variants={itemVariants}
            >
              <div className="relative flex items-center justify-center w-[64px] h-[64px] mb-[16px]">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#F09219] to-[#FBFBFB] rounded-full z-0 transition-all duration-500 group-hover:h-full"></div>
                <img src={icon1} alt="" className="relative z-10" />
              </div>
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  {t("valueHeadOne")}
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px]">
                  {t("valueParagraphOne")}
                </p>
              </div>
            </motion.div>

            {/* البوكس الثاني */}
            <motion.div
              className="group bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col lg:translate-y-7"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
              variants={itemVariants}
            >
              <div className="relative flex items-center justify-center w-[64px] h-[64px] mb-[16px]">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#F09219] to-[#FBFBFB] rounded-full z-0 transition-all duration-500 group-hover:h-full"></div>
                <img src={icon2} alt="" className="relative z-10" />
              </div>
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  {t("valueHeadTwo")}
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px]">
                  {t("valueParagraphTwo")}
                </p>
              </div>
            </motion.div>

            {/* البوكس الثالث */}
            <motion.div
              className="group bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col lg:translate-y-15"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
              variants={itemVariants}
            >
              <div className="relative flex items-center justify-center w-[64px] h-[64px] mb-[16px]">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#F09219] to-[#FBFBFB] rounded-full z-0 transition-all duration-500 group-hover:h-full"></div>
                <img src={icon3} alt="" className="relative z-10" />
              </div>
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  {t("valueHeadThree")}
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px]">
                  {t("valueParagraphThree")}
                </p>
              </div>
            </motion.div>

            {/* البوكس الرابع */}
            <motion.div
              className="group bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col lg:translate-y-28"
              style={{ boxShadow: "0px 0px 28px 0px rgba(240, 146, 25, 0.50)" }}
              variants={itemVariants}
            >
              <div className="relative flex items-center justify-center w-[64px] h-[64px] mb-[16px]">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#F09219] to-[#FBFBFB] rounded-full z-0 transition-all duration-500 group-hover:h-full"></div>
                <img src={icon4} alt="" className="relative z-10" />
              </div>
              <div className="text-center">
                <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                  {t("valueHeadFour")}
                </h2>
                <p className="text-base text-[12px] font-[400] leading-[18px]">
                  {t("valueParagraphFour")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Value;
