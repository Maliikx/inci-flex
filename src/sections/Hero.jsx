import React from "react";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { useTranslation } from "react-i18next";
import vid1 from '../assets/zetxtd.mp4'

const Hero = ({ scrollToContact }) => {
  const headersRef = useRef(null);
  const isInView = useInView(headersRef, { once: true });
  const { t } = useTranslation();
  return (
    <>
      <main
        className=" relative flex justify-around py-20 h-fit z-[3] items-center
      overflow-hidden w-[100%] bg-black "
      >
        <video
          className=" absolute z-[0]   top-0 object-cover    h-full w-full"
          src={vid1}
          autoPlay
          muted
          loop
        ></video>
        <div
          ref={headersRef}
          className={`relative sm:p-6 z-1 grid-cols-1  items-center flex flex-col lg:flex-row w-[80%] transition-all 
          duration-700 ease-out delay-500 ${
            isInView ? "" : "translate-y-[-50px] opacity-0"
          }`}
        >
          <div className="select-none flex flex-row items-start pb-6 justify-center sm:justify-start  gap-6 z-1 w-full h-full">
            <div className=" flex flex-col items-start  justify-start gap-6 z-1 w-full sm:w-[80%]">
              <h1
                className={`text-5xl sm:text-7xl xl:leading-tight  text-white font-black  leading-tight uppercase `}
              >
                <span className={` text-primary  `}>{t("years")}</span>{" "}
                {t("of")} <br /> {t("experience")}
                <br className="" />
                {t("and fine")} <br className="" /> {t("cutting")}
              </h1>
              <h1 className="text-white w-full backdrop-blur-md backdrop-brightness-75 p-3 rounded-lg">
                {t("company disc")}
              </h1>

              <button
                className="inline-flex items-center mt-3 justify-center whitespace-nowrap rounded-md text-sm font-medium  bg-primary text-white  h-10 px-4 py-2 hover:brightness-90 transition-all ease-out delay-0"
                onClick={scrollToContact}
              >
                {t("Contact")}
              </button>
            </div>
          </div>
          <div className=" flex  aspect-video h-fit  w-full">
            <iframe
              width=""
              height=""
              className="  w-full h-full  rounded-3xl  "
              src="https://www.youtube.com/embed/PZu5hE9h68I"
              title="Presentazione Inci-Flex 2016"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
