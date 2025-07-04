import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import star from "../assets/home/Star 2.png";
import Rectangle from "../assets/Poertfolio/Ellipse 4.png";
import Right from "../assets/Poertfolio/right.png";
import { ClipLoader } from "react-spinners";
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
          setError("Failed to load team members");
        }
      } catch {
        setError("Failed to load team members");
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

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

          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <ClipLoader color="#D88317" size={50} />
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
              {teamMembers.map((member) => (
                <div key={member.id} className="relative w-full">
                  <img
                    src={member.attachment}
                    alt={member.name}
                    className="mb-[16px] w-[384px]  h-[320px] object-cover rounded-lg"
                  />
                  <div
                    className="absolute top-[80%] left-0 bg-white p-3 rounded-[12px] w-full text-center"
                    style={{
                      boxShadow: "0px 4px 4px 0px #FDEFDD",
                    }}
                  >
                    <h2 className="text-[20px] font-[700] leading-[36px] mb-2">
                      {member.name}
                    </h2>
                    <p className="text-baseTwo text-[16px] font-[400] leading-[28px]">
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
