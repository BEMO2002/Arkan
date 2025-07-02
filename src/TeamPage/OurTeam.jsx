import React from "react";
import { useTranslation } from "react-i18next";
import member1 from "../assets/team/Rectangle 6 (1).png";
import member2 from "../assets/team/Rectangle 6 (2).png";
import member3 from "../assets/team/Rectangle 6.png";
import star from "../assets/home/Star 2.png";
import Rectangle from "../assets/Poertfolio/Ellipse 4.png";
import Right from "../assets/Poertfolio/right.png";

const OurTeam = () => {
  const { t, i18n } = useTranslation();

  const teamMembers = [
    { id: 1, image: member1 },
    { id: 2, image: member2 },
    { id: 3, image: member3 },
    { id: 4, image: member1 }, // Reusing member1 image for the 4th member
  ];

  return (
    <section className="py-[120px] px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center space-x-2 mb-10 mt-10">
          <img src={star} alt={t("common.decorationStarAlt")} />
          <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
            {t("teamMember.title")}
          </h3>
        </div>

        <div className="max-w-7xl max-h-7xl mx-auto">
          <img
            src={Rectangle}
            alt={t("commonMember.decorationEllipseAlt")}
            className={`absolute opacity-50 lg:opacity-100 bottom-[40%] translate-y-[10%] -z-10 ${
              i18n.language === "ar"
                ? "right-0 scale-x-[-1] translate-y-[55%]"
                : "left-0"
            }`}
          />
          <img
            src={Right}
            alt={t("commonMember.decorationRightAlt")}
            className={`absolute opacity-50 lg:opacity-100 bottom-[10%] translate-y-[10%] -z-10 ${
              i18n.language === "ar"
                ? "left-0 scale-x-[-1] translate-y-[55%]"
                : "right-0"
            }`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="relative">
                <img
                  src={member.image}
                  alt={t("teamMember.memberAlt", { number: member.id })}
                  className="mb-[16px] w-full"
                />
                <div
                  className="absolute top-[80%] left-1/2 -translate-x-1/2 bg-white p-3 rounded-[12px] w-[80%] text-center"
                  style={{
                    boxShadow: "0px 4px 4px 0px #FDEFDD",
                  }}
                >
                  <h2 className="text-[22px] font-[700] leading-[36px] mb-2">
                    {t("teamMember.memberName")}
                  </h2>
                  <p className="text-baseTwo text-[16px] font-[400] leading-[28px]">
                    {t("teamMember.memberPosition")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
