import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import project1 from "../assets/Poertfolio/Rectangle 7.png";
import project2 from "../assets/Poertfolio/Rectangle 7 (1).png";
import project3 from "../assets/Poertfolio/Rectangle 7 (1).png";
import star from "../assets/home/Star 2.png";
import Rectangle from "../assets/Poertfolio/Ellipse 4.png";
import { TfiArrowTopRight } from "react-icons/tfi";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample project data with types
  const projects = [
    {
      id: 1,
      title: "Zomex",
      type: "design",
      category: "Social Media Post",
      image: project1,
    },
    {
      id: 2,
      title: "E-commerce",
      type: "development",
      category: "Web Development",
      image: project2,
    },
    {
      id: 3,
      title: "Rento Cars",
      type: "mobile",
      category: "mobile Application",
      image: project3,
    },
    // Add more projects as needed
  ];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section className="py-[90px] px-4 sm:px-6 lg:px-8 relative">
      <div className="flex items-center justify-center space-x-2 mb-10">
        <img src={star} alt={t("why.starAlt")} />
        <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
          our projects
        </h3>
      </div>
      <h2 className="text-base text-center md:text-[32px] text-[25px] font-[700] leading-[44px] ">
        View Some of Our Works <br />
        <span> and Case Studies for Clients</span>
      </h2>

      {/* Filter tabs with underline */}
      <div className="flex justify-center gap-8 my-12">
        <button
          onClick={() => setActiveFilter("all")}
          className={`relative pb-2 text-lg font-medium ${
            activeFilter === "all" ? "text-primary" : "text-gray-600"
          }`}
        >
          All
          {activeFilter === "all" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
        <button
          onClick={() => setActiveFilter("design")}
          className={`relative pb-2 text-lg font-medium ${
            activeFilter === "design" ? "text-primary" : "text-gray-600"
          }`}
        >
          Design
          {activeFilter === "design" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
        <button
          onClick={() => setActiveFilter("development")}
          className={`relative pb-2 text-lg font-medium ${
            activeFilter === "development" ? "text-primary" : "text-gray-600"
          }`}
        >
          Development
          {activeFilter === "development" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
        <button
          onClick={() => setActiveFilter("mobile")}
          className={`relative pb-2 text-lg font-medium ${
            activeFilter === "mobile" ? "text-primary" : "text-gray-600"
          }`}
        >
          Mobile
          {activeFilter === "mobile" && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </button>
      </div>

      <div className="container mx-auto">
        <div className="max-w-7xl max-h-7xl mx-auto">
          <img
            src={Rectangle}
            alt=""
            className={`absolute opacity-50 lg:opacity-100  bottom-[20%] translate-y-[10%] -z-10 ${
              i18n.language === "ar"
                ? " right-0 scale-x-[-1] translate-y-[55%]"
                : "left-0"
            }`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-5 ">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="w-[384px] rounded-[26px] flex items-center justify-center flex-col relative"
                style={{
                  backgroundColor: "rgba(104, 104, 104, 0.20)",
                  backdropFilter: "blur(6.92307710647583px)",
                }}
              >
                <div className="w-20 h-20 bg-[#45474B] rounded-full absolute bottom-0 right-0 flex items-center justify-center shadow">
                  <span className="flex items-center font-extrabold justify-center text-white">
                    <TfiArrowTopRight size={35} className="mt-2" />
                  </span>
                </div>

                <div className="text-center p-5">
                  <h2 className="text-[20px] font-[700] leading-[30px] text-primary mb-[4px] mt-2">
                    {project.category}
                  </h2>
                  <p className="text-[#fff] text-[32px] font-[700] leading-[44px]">
                    {project.title}
                  </p>
                </div>
                <img src={project.image} alt={project.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
