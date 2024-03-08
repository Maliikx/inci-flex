import { useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Specials = () => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, {
    once: true,
    margin: "-80% 0px -20% 0px",
  });
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center px-0 py-10 bg-black select-none h-fit grad sm:p-20 sm:px-0">
      <h1
        className={` text-white text-4xl md:text-3xl lg:text-2xl font-semibold transition-all 
          duration-1000 ease-[cubic-bezier(0.7, -0.03, 0.56, 1)] delay-500 ${
            isInView ? "" : " opacity-0"
          }`}
      >
        {t("Specialization")}
      </h1>
      <div className="w-[80%] h-full flex flex-col xl:flex-row items-center gap-8 px-0 py-10">
        <div
          rel={contentRef}
          className={`bg-white h-80 gap-5 flex flex-col p-5  items-center rounded-lg w-full  md:w-[60%] xl:w-1/3   transition-all 
          duration-1000 ease-[cubic-bezier(0.7, -0.03, 0.56, 1)] delay-0 ${
            isInView ? "" : "translate-y-[-100px] opacity-0"
          }`}
        >
          <div className="bg-black h-1/3 w-[90%] p-10 xl:p-5 rounded-md">
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-base text-white md:text-xl xl:text-2xl">
                {t("Artwork")}
              </h1>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-fuchsa-900  rounded-md w-[90%]">
            <h1 className="text-base md:text-lg lg:text-xl">
              {t("artwork disc")}
            </h1>
          </div>
        </div>
        <div
          ref={contentRef}
          className={`bg-white h-80  gap-5 flex flex-col p-5  items-center rounded-lg w-full md:w-[60%] xl:w-1/3 transition-all 
        duration-1000 ease-[cubic-bezier(0.7, -0.03, 0.56, 1)] delay-100 ${
          isInView ? "" : "translate-y-[-100px] opacity-0"
        }`}
        >
          <div className="bg-black h-1/3 w-[90%] p-10 xl:p-5  rounded-md  ">
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-base text-white md:text-xl lg:text-2xl">
                {t("Branding")}
              </h1>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-fuchsa-900  rounded-md w-[90%]">
            <h1 className="text-base md:text-lg lg:text-xl">
              {t("branding disc")}
            </h1>
          </div>
        </div>
        <div
          rel={contentRef}
          className={`bg-white h-80 gap-5 flex flex-col p-5   items-center rounded-lg  w-full md:w-[60%] xl:w-1/3 transition-all 
          duration-1000 ease-[cubic-bezier(0.7, -0.03, 0.56, 1)] delay-200 ${
            isInView ? "" : "translate-y-[-100px] opacity-0"
          } `}
        >
          <div className="bg-black h-1/3 w-[90%] p-10 xl:p-5 rounded-md  ">
            <div className="flex items-center justify-center w-full h-full">
              <h1 className="text-base text-white md:text-xl xl:text-2xl">
                {t("Packaging")}
              </h1>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-fuchsa-900  rounded-md w-[90%]">
            <h1 className="text-base md:text-lg lg:text-xl">
              {t("packaging disc")}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;
