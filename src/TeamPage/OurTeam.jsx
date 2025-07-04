/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import star from "../assets/home/Star 2.png";
import Rectangle from "../assets/Poertfolio/Ellipse 4.png";
import Right from "../assets/Poertfolio/right.png";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";

const OurTeam = () => {
  const { t, i18n } = useTranslation();
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch("https://arkan2.runasp.net/api/Team");
        const data = await response.json();
        if (data.statusCode === 200 && Array.isArray(data.data)) {
          setTeamMembers(data.data);
        } else {
          setError(t("common.fetchError"));
        }
      } catch {
        setError(t("common.fetchError"));
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, [t]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[120px] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src={star}
              alt={t("common.decorationStarAlt")}
              className="animate-pulse"
            />
            <h3 className="text-baseTwo text-2xl md:text-3xl font-bold leading-[36px]">
              {t("teamMember.title")}
            </h3>
          </div>
        </motion.div>

        {/* Background Decorations */}
        <motion.img
          src={Rectangle}
          alt={t("commonMember.decorationEllipseAlt")}
          className={`absolute opacity-50 lg:opacity-100 bottom-[40%] -z-10 ${
            i18n.language === "ar"
              ? "right-0 scale-x-[-1] translate-y-[55%]"
              : "left-0"
          }`}
          animate={{
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={Right}
          alt={t("commonMember.decorationRightAlt")}
          className={`absolute opacity-50 lg:opacity-100 bottom-[10%] -z-10 ${
            i18n.language === "ar"
              ? "left-0 scale-x-[-1] translate-y-[55%]"
              : "right-0"
          }`}
          animate={{
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <ClipLoader color="#D88317" size={50} />
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10 text-lg">
              {error}
            </div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-20"
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="overflow-hidden rounded-lg ">
                    <img
                      src={member.attachment}
                      alt={member.name}
                      className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div
                    className="absolute top-[80%] left-0 bg-white p-4 rounded-lg w-full text-center transition-all duration-300 group-hover:shadow-xl"
                    style={{
                      boxShadow: "0px 4px 20px 0px rgba(240, 146, 25, 0.15)",
                    }}
                  >
                    <h2 className="text-lg font-bold text-gray-800 mb-1">
                      {member.name}
                    </h2>
                    <p className="text-baseTwo  font-medium">
                      {member.position}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
