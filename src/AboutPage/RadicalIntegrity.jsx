import React from "react";
import { useTranslation } from "react-i18next";
import vector5 from "../assets/About/Vector 5.png";
import vector6 from "../assets/About/Vector 6.png";
import vector7 from "../assets/About/Vector 7.png";

const RadicalIntegrity = () => {
  const { t } = useTranslation();

  const boxes = [
    {
      id: 1,
      vector: vector5,
      vectorPosition: "right-0 top-0",
      titleKey: "values.box1.title",
      textKey: "values.box1.description",
      altKey: "values.box1.vectorAlt",
    },
    {
      id: 2,
      vector: vector6,
      vectorPosition: "left-0 bottom-0",
      titleKey: "values.box2.title",
      textKey: "values.box2.description",
      altKey: "values.box2.vectorAlt",
      extraClass: "lg:translate-y-15",
    },
    {
      id: 3,
      vector: vector7,
      vectorPosition: "left-0 top-0",
      titleKey: "values.box3.title",
      textKey: "values.box3.description",
      altKey: "values.box3.vectorAlt",
    },
  ];

  return (
    <section className="py-[90px] px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-7xl max-h-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {boxes.map((box) => (
              <div
                key={box.id}
                className={`bg-[#FBFBFB] p-[32px] rounded-[12px] flex items-center justify-center flex-col relative ${
                  box.extraClass || ""
                }`}
                style={{
                  boxShadow: "0px 0px 24px 0px rgba(240, 146, 25, 0.50)",
                }}
              >
                <img
                  src={box.vector}
                  alt={t(box.altKey)}
                  className={`absolute ${box.vectorPosition}`}
                />
                <div className="text-center">
                  <h2 className="text-[16px] font-[700] leading-[26px] text-base mb-[16px]">
                    {t(box.titleKey)}
                  </h2>
                  <p className="text-base text-[12px] font-[400] leading-[18px]">
                    {t(box.textKey)}
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

export default RadicalIntegrity;
