import React from "react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Presents = () => {
  const contentRef = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef2md = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);
  const contentRef5 = useRef(null);
  const contentRef6 = useRef(null);

  const isInView = useInView(contentRef, {
    once: true,
  });
  const isInView2 = useInView(contentRef2, {
    once: true,
  });
  const isInView2md = useInView(contentRef2md, {
    once: true,
  });
  const isInView3 = useInView(contentRef3, {
    once: true,
  });
  const isInView4 = useInView(contentRef4, {
    once: true,
  });
  const isInView5 = useInView(contentRef5, {
    once: true,
  });
  const isInView6 = useInView(contentRef6, {
    once: true,
  });
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <div className={`flex overflow-hidden flex-col h-full`}>
      <div ref={contentRef} className="pb-20 overflow-clip ">
        <div className="flex flex-col  gap-5  md:flex-row md:justify-between  ">
          <div
            className={` holder md:border-x md:border-b border-black overflow-hidden md:rounded-b-lg w-[100vw]  md:w-[50vw] aspect-[2/1.3] transition
          duration-1000 ease-in-out delay-0 ${
            isInView ? "" : "translate-x-[-100px] opacity-0"
          }`}
          >
            <img
              className="h-full w-full object-cover"
              src="src/assets/comp.jpeg"
              alt=""
              draggable="false"
            />
          </div>
          <div
            className={`flex justify-center items-center h-fill w-full md:w-1/2  transition 
          duration-1000 ease-in-out delay-0 ${
            isInView ? "" : "translate-y-[-100px] opacity-0"
          }`}
          >
            <div className="w-[80%]  text-sm lg:text-xl ">
              <span className={`text-2xl md:text-3xl lg:text-4xl font-bold `}>
                {t("company name")}
              </span>
              <span className={`${i18n.language === "en" ? "" : " leading-9"}`}>
                {t("company disc2")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col   sm:p-10   gap-20 items-center justify-center h-fit  ">
        {/* large machine show */}
        <div className="bg-gray-100 w-[80%] items-center shadow-xl rounded-xl  flex-row hidden md:flex h-fit">
          <div className="1 flex w-[100%] p-10  h-fit">
            <div className="flex   justify-center items-center h-fill w-full">
              <div
                ref={contentRef2}
                className={`flex flex-col transition-all 
          duration-1000 ease-in-out delay-500 ${
            isInView2 ? "" : "translate-y-[-100px] opacity-0"
          }`}
              >
                <h1
                  className={`text-lg md:text-xl lg:text-2xl font-bold italic ${
                    i18n.language === "en"
                      ? ""
                      : " text-lg md:text-xl lg:text-2xl font-bold"
                  }`}
                >
                  <mark
                    className={` bg-primary text-white ${
                      i18n.language === "en"
                        ? "text-2xl md:text-3xl lg:text-4xl"
                        : " text-xl md:text-2xl/[2.5rem] lg:text-3xl/[3rem]"
                    }`}
                  >
                    "{t("mech1 quote head")}
                  </mark>{" "}
                  {t("mech1 quote body")}"
                </h1>
              </div>
            </div>
          </div>
          <div className="2 flex w-[100%]   aspect-[2/1.5]  items-center justify-center ">
            <div
              className={` holder border border-black overflow-hidden  w-[100%]   aspect-[2/1.5] rounded-xl transition-all 
          duration-1000 ease-in-out delay-500 ${
            isInView2 ? "" : "translate-x-[200px] opacity-0"
          }`}
            >
              {/* src/assets/WhatsApp Image 2024-01-24 at 2.25.43 PM (1).jpeg */}
              <img
                className=" object-cover w-full"
                src="src/assets/WhatsApp Image 2024-01-24 at 2.25.42 PM (1).jpeg"
                alt=""
                draggable="false"
              />
            </div>
          </div>
        </div>
        {/* medium machine show */}
        <div className=" bg-gray-100 w-[80%] items-center   shadow-xl rounded-xl flex flex-col visible md:hidden h-fit">
          <div className="2 flex w-[100%]   aspect-[2/1.5]  items-center justify-center ">
            <div
              className={` holder border border-black overflow-hidden  w-[100%]   aspect-[2/1.5] rounded-xl transition-all 
          duration-1000 ease-in-out delay-500 ${
            isInView2md ? "" : "translate-x-[200px] opacity-0"
          }`}
            >
              <img
                className=" object-cover w-full"
                src="src/assets/WhatsApp Image 2024-01-24 at 2.25.42 PM (1).jpeg"
                alt=""
                draggable="false"
              />
            </div>
          </div>
          <div className="1 flex w-[100%] p-5 sm:p-8  h-fit">
            <div className="flex   justify-center items-center h-fill w-full">
              <div
                ref={contentRef2md}
                className={`flex flex-col transition-all 
          duration-1000 ease-in-out delay-500 ${
            isInView2md ? "" : "translate-y-[-100px] opacity-0"
          }`}
              >
                <h1
                  className={`text-sm sm:text-lg  font-bold italic ${
                    i18n.language === "en"
                      ? ""
                      : " text-lg md:text-xl lg:text-2xl font-bold"
                  }`}
                >
                  <mark
                    className={` bg-primary text-white text-xl/[2rem] sm:text-2xl  ${
                      i18n.language === "en" ? "" : ""
                    }`}
                  >
                    "{t("mech1 quote head")}
                  </mark>{" "}
                  {t("mech1 quote body")}"
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-gray-100 w-[80%] items-center shadow-xl rounded-xl     flex flex-col  md:flex-row h-fit">
          <div className="3 flex w-[100%]  h-full   items-center justify-center">
            <div
              ref={contentRef3}
              className={`holder border border-black  overflow-hidden w-[100%]  aspect-[2/1.5] rounded-xl 
              transition
          duration-1000 ease-in-out delay-500 ${
            isInView3 ? "" : "translate-x-[-200px] opacity-0"
          }`}
            >
              {" "}
              <img
                className=" w-full h-full object-cover"
                src="src/assets/WhatsApp Image 2024-01-24 at 2.25.43 PM (1).jpeg"
                alt=""
                draggable="false"
              />
            </div>
          </div>
          <div className="4 flex w-[100%] p-5 sm:p-8 md:px-5 lg:p-8  h-fit">
            <div className="flex   justify-center items-center h-fill w-full">
              <div
                className={`flex flex-col transition
          duration-1000 ease-in-out delay-500 ${
            isInView3 ? "" : "translate-y-[-100px] opacity-0"
          }`}
              >
                <h1
                  className={`   text-sm sm:text-lg md:text-xl lg:text-2xl font-bold italic ${
                    i18n.language === "en"
                      ? ""
                      : " text-sm sm:text-lg md:text-xl lg:text-2xl font-bold"
                  } `}
                >
                  <mark
                    className={` bg-primary text-white  ${
                      i18n.language === "en"
                        ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                        : " text-xl/[2rem] sm:text-2xl md:text-2xl/[2.5rem] lg:text-3xl/[3rem]"
                    }`}
                  >
                    {t("mech2 quote head")}
                  </mark>{" "}
                  {t("mech2 quote body")}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col p-10 pb-20 justify-center gap-10 ">
        <h1
          className={`flex justify-center  text-2xl md:text-4xl xl:text-5xl select-none font-medium transition
          duration-1000 ease-out delay-500 ${isInView4 ? "" : "opacity-0"}   `}
        >
          {t("Meet the team")}
        </h1>
        <div
          ref={contentRef4}
          className=" flex flex-wrap gap-20  items-center justify-center"
        >
          {i18n.language === "en"
            ? data_en.map((d) => (
                <>
                  <div
                    className={` flex flex-col gap-5  w-full sm:w-fit items-center justify-center ransition 
        duration-1000 ease-in-out delay-300  ${
          isInView4 ? "" : " translate-y-[200px] scale-[1.1] opacity-0"
        }`}
                  >
                    <div
                      ref={contentRef4}
                      key={d.id} // Assuming you have a unique identifier like an id
                      className={` slide flex relative  rounded-xl overflow-hidden shadow-xl w-full sm:w-[35vw] md:w-[20vw] aspect-square t`}
                    >
                      <img
                        className="object-cover h-full w-full"
                        src={d.img}
                        alt=""
                        draggable="false"
                      />
                      <div className="absolute flex opacity-0 items-center bg-white justify-center top-[35rem] sm:top-[35rem] transition-all ease-out delay-0 duration-500  right-0 w-full h-full bg-opacity-40 backdrop-blur-lg backdrop-brightness-100">
                        <a href={d.linkedin} target="_blank">
                          <FaLinkedin
                            className=" text-white hover:text-gray-200"
                            size={100}
                          />
                        </a>
                      </div>
                    </div>
                    <a
                      className="flex flex-row text-primary underline gap-2 items-center"
                      href={d.linkedin}
                      target="_blank"
                    >
                      <FaLinkedin className="" size={24} />
                      <h1 className=" text-black hover:text-primary opacity-75 text-xl md:text-lg  xl:text-2xl">
                        {d.title}
                      </h1>
                    </a>
                  </div>
                </>
              ))
            : data_ar.map((d) => (
                <>
                  <div
                    className={`flex flex-col gap-5  w-full sm:w-fit items-center justify-center ransition 
        duration-1000 ease-in-out delay-300  ${isInView4 ? "" : " opacity-0"}`}
                  >
                    <div
                      ref={contentRef4}
                      key={d.id} // Assuming you have a unique identifier like an id
                      className={`flex slide relative rounded-xl overflow-hidden shadow-xl w-full sm:w-[35vw] md:w-[20vw] aspect-square t`}
                    >
                      <img
                        className="object-cover h-full w-full"
                        src={d.img}
                        alt=""
                        draggable="false"
                      />
                      <div className="absolute flex opacity-0 items-center bg-white justify-center top-[35rem] sm:top-[35rem] transition-all ease-out delay-0 duration-500  right-0 w-full h-full bg-opacity-40 backdrop-blur-lg backdrop-brightness-100">
                        <a href={d.linkedin} target="_blank">
                          <FaLinkedin
                            className=" text-white hover:text-gray-200"
                            size={100}
                          />
                        </a>
                      </div>
                    </div>
                    <a
                      className="flex flex-row text-primary underline gap-2 items-center"
                      href={d.linkedin}
                      target="_blank"
                    >
                      <FaLinkedin className="" size={24} />
                      <h1 className=" text-black hover:text-primary opacity-75 text-xl md:text-lg  xl:text-2xl">
                        {d.title}
                      </h1>
                    </a>
                  </div>
                </>
              ))}
        </div>
      </div>
    </div>
  );
};

const data_en = [
  {
    img: `src/assets/heads/1.jpeg`,
    title: "Managing director",
    linkedin:
      "https://www.linkedin.com/in/amr-bondok-b7507594?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/2.jpeg`,
    title: "Plant manager",
    linkedin:
      "https://www.linkedin.com/in/ahmed-helal-85213793?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/3.jpeg`,
    title: "Human resources",
    linkedin: "https://www.linkedin.com/in/abir-khamis-2057aa2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/6.jpeg`,
    title: "Separation director",
    linkedin: "https://www.linkedin.com/in/eslam-elsewafy-75a1b012a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  
  {
    img: `src/assets/heads/5.jpeg`,
    title: "Preprocessing director",
    linkedin: "https://www.linkedin.com/in/abla-bondok-6a910a286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/4.jpeg`,
    title: "Sales director",
    
  },
  
  {
    img: `src/assets/heads/7.jpeg`,
    title: "Financial director",
    linkedin: "https://www.linkedin.com/in/reem-bondok-0487302b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/8.jpeg`,
    title: "Public relations",
    linkedin:
      "https://www.linkedin.com/in/dina-bondok-a8200b2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/9.jpeg`,
    title: "Information technology",
    linkedin: "https://www.linkedin.com/in/mrwan-magdy-a00780265/",
  },
];
const data_ar = [
  {
    img: `src/assets/heads/1.jpeg`,
    title: "مدير تنفيذي",
    linkedin:
      "https://www.linkedin.com/in/amr-bondok-b7507594?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/2.jpeg`,
    title: "مدير المصنع",
    linkedin:
      "https://www.linkedin.com/in/ahmed-helal-85213793?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/3.jpeg`,
    title: "الموارد البشرية",
    linkedin: "https://www.linkedin.com/in/abir-khamis-2057aa2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/6.jpeg`,
    title: "مدير الفصل",
    linkedin: "https://www.linkedin.com/in/eslam-elsewafy-75a1b012a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  
  {
    img: `src/assets/heads/5.jpeg`,
    title: "الأعداد الفني",
    linkedin: "https://www.linkedin.com/in/abla-bondok-6a910a286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/4.jpeg`,
    title: "مدير المبيعات",
    
  },
  
  {
    img: `src/assets/heads/7.jpeg`,
    title: "المدير المالي",
    linkedin: "https://www.linkedin.com/in/reem-bondok-0487302b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/8.jpeg`,
    title: "العلاقات العامة",
    linkedin:
      "https://www.linkedin.com/in/dina-bondok-a8200b2b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    img: `src/assets/heads/9.jpeg`,
    title: "تكنولوجيا المعلومات",
    linkedin: "https://www.linkedin.com/in/mrwan-magdy-a00780265/",
  },
];

export default Presents;
