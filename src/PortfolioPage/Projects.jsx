import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import star from "../assets/home/Star 2.png";
import Rectangle from "../assets/Poertfolio/Ellipse 4.png";
import Right from "../assets/Poertfolio/right.png";
// import { TfiArrowTopRight } from "react-icons/tfi";
import { ClipLoader } from "react-spinners";
import { LuEye } from "react-icons/lu";
const Projects = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map API category names to filter types
  const categoryToTypeMap = {
    "Web Development": "development",
    "mobile Application": "mobile",
    "Social Media Post": "design",
    "Graphic Design": "design",
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://arkan2.runasp.net/api/Service");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();

        // Transform API data to match our expected format
        const transformedProjects = data.data.items.map((item) => ({
          id: item.id,
          title: item.name,
          type: categoryToTypeMap[item.categoryName] || "all",
          category: item.categoryName,
          image: item.attachment,
          link: item.projectLink,
        }));

        setProjects(transformedProjects);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <ClipLoader color="#D88317" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        Error: {error}
        <button
          onClick={() => window.location.reload()}
          className="ml-4 px-4 py-2 bg-primary text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <section className="py-[90px] px-4 sm:px-6 lg:px-8 relative">
      <div className="flex items-center justify-center space-x-2 mb-10">
        <img
          src={star}
          alt={t("common.decorationStarAlt")}
          className="w-6 h-6"
        />
        <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
          {t("portfolioTwo.sectionTitle")}
        </h3>
      </div>
      <h2 className="text-base text-center md:text-[32px] text-[25px] font-[700] leading-[44px] mb-8">
        {t("portfolioTwo.mainTitle.line1")} <br />
        <span>{t("portfolioTwo.mainTitle.line2")}</span>
      </h2>
      {/* Filter tabs with underline */}
      <div className="flex justify-center  gap-5 my-12 flex-wrap">
        {["all", "design", "development", "mobile"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative pb-2 px-1 text-lg font-medium min-w-[100px] ${
              activeFilter === filter ? "text-primary" : "text-gray-600"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
            {activeFilter === filter && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </button>
        ))}
      </div>

      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <img
            src={Rectangle}
            alt=""
            className={`absolute opacity-50 lg:opacity-100 bottom-[50%] translate-y-[10%] -z-10 ${
              i18n.language === "ar"
                ? " right-0 scale-x-[-1] translate-y-[55%]"
                : "left-0"
            }`}
          />
          <img
            src={Right}
            alt=""
            className={`absolute opacity-50 lg:opacity-100 bottom-[10%] translate-y-[10%] -z-10 ${
              i18n.language === "ar"
                ? " left-0 scale-x-[-1] translate-y-[55%]"
                : "right-0"
            }`}
          />

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No projects found in this category
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-5 place-items-center">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-full max-w-[384px] h-[500px] rounded-[26px] flex flex-col relative overflow-hidden group"
                  style={{
                    backgroundColor: "rgba(104, 104, 104, 0.20)",
                    backdropFilter: "blur(6.92307710647583px)",
                  }}
                >
                  <div className="w-15 h-15 md:w-20 md:h-20 bg-[#45474B] rounded-full absolute bottom-0 right-2 flex items-center justify-center shadow z-10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-extrabold justify-center text-white"
                    >
                      <LuEye size={25} className="" />
                    </a>
                  </div>

                  <div className="text-center p-6 flex-shrink-0 cursor-pointer ">
                    <h2 className="text-[20px] font-[700] leading-[30px] text-primary mb-[4px] line-clamp-1">
                      {project.category}
                    </h2>
                    <p className="text-[#fff] text-[32px] font-[700] leading-[44px] line-clamp-2">
                      {project.title}
                    </p>
                  </div>

                  <div className="flex-grow relative overflow-hidden cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full  h-full object-cover absolute inset-0 transition-transform duration-300  group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0  bg-black/30 hover:bg-transparent bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
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

export default Projects;
