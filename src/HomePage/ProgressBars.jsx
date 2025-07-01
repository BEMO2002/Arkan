import React, { useState, useEffect } from "react";
import star from "../assets/home/Star 2.png";
import { useTranslation } from "react-i18next";
import Ellipse from "../assets/home/Ellipse 2.png";
const CircularProgress = ({ percentage, titleKey }) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const radius = 125;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressFraction = Math.min(elapsed / duration, 1);
      const currentProgress = Math.floor(progressFraction * percentage);

      setProgress(currentProgress);

      if (progressFraction < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [percentage]);

  return (
    <div className="flex flex-col items-center relative">
      <svg className="w-72 h-72 transform -rotate-90">
        <circle
          className="text-third"
          strokeWidth="14"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
        <circle
          className="text-primary"
          strokeWidth="14"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
      </svg>

      <div className="absolute flex flex-col items-center justify-center w-72 h-72">
        <span className="text-[40px] font-[700] text-base">{progress}%</span>
        <span className="text-[23px] font-[400] text-base">{t(titleKey)}</span>
      </div>
    </div>
  );
};

const ProgressDashboard = () => {
  const { t } = useTranslation();
  const [startAnimation, setStartAnimation] = useState(false);
  const progressData = [
    { titleKey: "progress.seoMarketing", percentage: 75 },
    { titleKey: "progress.keywordsResults", percentage: 43 },
    { titleKey: "progress.googleAnalytics", percentage: 66 },
    { titleKey: "progress.offPageSeo", percentage: 15 },
  ];

  // Intersection Observer to trigger animation when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("progress-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="progress-section" className="p-8 relative">
      <img
        src={Ellipse}
        alt=""
        className="absolute top-0 left-60 hidden lg:block -z-10 opacity-50 lg:opacity-100"
      />
      <img
        src={Ellipse}
        alt=""
        className="absolute -top-20 right-60 hidden lg:block -z-10 opacity-50 lg:opacity-100"
      />
      <div className="flex items-center justify-center space-x-2 mb-10 mt-10">
        <img src={star} alt="" />
        <h3 className="text-baseTwo text-[24px] mb-2 font-[700] leading-[36px]">
          {t("ProgressHeader")}
        </h3>
      </div>
      <h2 className="lg:text-[32px] text-[22px] font-[700] mb-12 text-gray-800 text-center">
        <span className="text-primary">100%</span>
        {t("progress.digitalMarketingSolutions")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 max-w-7xl mx-auto">
        {progressData.map((item, index) => (
          <div key={index} className="flex justify-center">
            {startAnimation ? (
              <CircularProgress
                titleKey={item.titleKey}
                percentage={item.percentage}
              />
            ) : (
              <CircularProgress titleKey={item.titleKey} percentage={0} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressDashboard;
