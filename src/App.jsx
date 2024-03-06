import Hero from "./sections/Hero";
import Samples from "./sections/Samples";
import Specials from "./sections/Specials";
import Qoute from "./sections/Quote";
import Presents from "./sections/Presents";
import News from "./sections/News";
import Contact from "./sections/Contact";
useInView;

import { useRef } from "react";

import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Phone } from "lucide-react";
import logo from "./assets/inciflex.svg";
import vid1 from "./assets/utol35.mp4"

import "./App.css";
import { useInView } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LangSelector from "./components/LangSelector";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const newsRef = useRef(null);
  const contactRef = useRef(null);

  const [navActive, setNavActive] = useState(false);

  function scrollToSection(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  const activateNav = () => {
    setNavActive(!navActive);
  };
  const regNav = () => {
    setNavActive(true);
  };
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <div className={`  ${i18n.language === "en" ? "" : "ar"}`}>
      <header
        className="  h-fit w-[100%] shadow-md m-0 p-[10px] top-0  space-x-4 
       fixed bg-white z-[4] items-center justify-around flex-row hidden md:flex"
      >
        <img
          src={logo}
          className="w-[22rem] "
          alt="React logo"
          draggable="false"
        />

        <ul
          className={`flex   gap-[20px] flex-row  items-start transition-all 
          duration-700 ease-out delay-500 ${
            i18n.language === "en" ? "" : "ar"
          }  `}
        >
          <div
            className=" cursor-pointer  h-full p-1  border-b-2 border-transparent  hover:border-black transition-all ease-in delay-50"
            onClick={() => scrollToSection(homeRef)}
          >
            <h1 className=" text-lg">{t("Home")}</h1>
          </div>
          <div
            className=" cursor-pointer  h-full p-1  border-b-2 border-transparent  hover:border-black transition-all ease-in delay-50"
            onClick={() => scrollToSection(aboutRef)}
          >
            <h1 className=" text-lg">{t("About")}</h1>
          </div>
          <div
            className=" cursor-pointer  h-full p-1  border-b-2 border-transparent  hover:border-black transition-all ease-in delay-50"
            onClick={() => scrollToSection(newsRef)}
          >
            <h1 className=" text-lg">{t("News")}</h1>
          </div>
          <div
            className=" cursor-pointer  h-full p-1  border-b-2 border-transparent  hover:border-black transition-all ease-in delay-50"
            onClick={() => scrollToSection(contactRef)}
          >
            <h1 className=" text-lg">{t("Contact")}</h1>
          </div>
          <LangSelector />
        </ul>
      </header>
      <header
        className="  h-fit w-[100%] shadow-md m-0 p-[10px] top-0  space-x-4 
       fixed bg-white z-[4] items-center  flex-col flex md:hidden "
        onClick={activateNav}
      >
        <img
          src={logo}
          className="w-[18rem] "
          alt="React logo"
          draggable="false"
        />
        <ul
          className={`flex   gap-2 p-4 flex-col  items-center  transition-all 
          duration-700 ease-out delay-500  ${navActive ? "" : "hidden"} `}
        >
          <div
            className=" cursor-pointer  h-full p-1  border-b-2 border-transparent  hover:border-black transition-all ease-in delay-50"
            onClick={() => scrollToSection(homeRef)}
          >
            <h1 className=" text-lg">{t("Home")}</h1>
          </div>
          <div
            className=" cursor-pointer  h-full p-1  border-b-2 border-transparent  hover:border-black transition-all ease-in delay-50"
            onClick={() => scrollToSection(aboutRef)}
          >
            <h1 className=" text-lg">{t("About")}</h1>
          </div>
          <div
            className=" cursor-pointer  h-full p-1  border-b-2 border-transparent  hover:border-black transition-all ease-in delay-50"
            onClick={() => scrollToSection(newsRef)}
          >
            <h1 className=" text-lg">{t("News")}</h1>
          </div>
          <div
            className=" cursor-pointer  h-full p-1  border-b-2 border-transparent  hover:border-black transition-all ease-in delay-50"
            onClick={() => scrollToSection(contactRef)}
          >
            <h1 className=" text-lg">{t("Contact")}</h1>
          </div>
          <LangSelector />
        </ul>
      </header>

      <main ref={homeRef}>
        <Hero scrollToContact={() => scrollToSection(contactRef)} />
      </main>

      {/* video-banner */}
      <div className=" h-[40vh] relative overflow-clip">
        <video
          className="w-full h-full object-cover"
          src={vid1}
          autoPlay
          muted
          loop
        ></video>
      </div>

      {/* years-ex-banner */}
      <div className="select-none grad flex relative justify-center items-center bg-black h-fit py-20">
        <h1
          className={` font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-secondary ${
            i18n.language === "en"
              ? ""
              : "ar text-xl sm:text-2xl md:text-3xl xl:text-4xl"
          }`}
        >
          {t("Years of experience")}
        </h1>
      </div>

      <div ref={aboutRef} className=" select-none scroll-m-12">
        <Presents />
      </div>
      <Qoute />
      <Samples />

      <Specials />

      <div ref={newsRef} className="scroll-m-12">
        <News />
      </div>

      <div ref={contactRef} className="scroll-m-12">
        <Contact />
      </div>

      <footer className="bg-black flex justify-center  w-full h-fit p-5">
        <div className="flex flex-col sm:flex-row justify-between w-[100%] gap-10 sm:gap-24 lg:w-[70%] h-full">
          <div className="flex sm:hidden h-full  w-full  ">
            <div className=" flex flex-wrap gap-2 text-secondary space-y-1 ">
              <div className="flex flex-col gap-1">
                <h1 className="text-base md:text-lg xl:text-xl font-semibold">
                  {t("Phone Numbers")}
                </h1>
                <h1 className="text-base md:text-lg xl:text-xl font-extralight">
                  <span className=" underline">{t("no.1 title")}</span>{" "}
                  <pre className="font-sans inline">+2012-2314-2095</pre>{" "}
                </h1>
                <h1 className="text-base md:text-lg xl:text-xl font-extralight">
                  <span className=" underline">{t("no.2 title")}</span>{" "}
                  <pre className="font-sans inline">+2010-0059-5849</pre>
                </h1>
                <h1 className="text-base md:text-lg xl:text-xl font-extralight">
                  <span className=" underline">{t("no.3 title")}</span>{" "}
                  <pre className="font-sans inline">+2010-6964-1118</pre>
                </h1>
                <h1 className="text-base md:text-lg xl:text-xl font-extralight flex gap-3 items-center ">
                  <Phone />
                  03-4594692
                </h1>
                <h1 className="text-base md:text-lg xl:text-xl font-extralight flex gap-3 items-center ">
                  <Phone />
                  03-4594750
                </h1>
              </div>
              <div>
                <h1 className="text-base md:text-lg xl:text-xl font-semibold">
                  {t("Email")}
                </h1>
                <a
                  target="_blank"
                  className=" text-base md:text-lg xl:text-xl font-extralight hover:underline hover:text-[#ffffff] w-fit"
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@inciflexegypt.com"
                >
                  info@inciflexegypt.com
                </a>
              </div>
              <div>
                <h1 className="text-base md:text-lg xl:text-xl font-semibold">
                  {t("Location")}
                </h1>
                <h1 className="text-base md:text-lg xl:text-xl flex font-extralight">
                  location/egypt/alexandria/burj
                </h1>
              </div>
            </div>
          </div>
          <div className="select-none flex flex-col   h-full  gap-5 w-full sm:w-[60%]">
            <img
              className="w-[15rem] sm:w-[22rem]"
              src={logo}
              width=""
              alt=""
              draggable="false"
            />
            <h1 className=" text-base md:text-lg xl:text-xl text-secondary">
              {t("company disc")}
            </h1>
            <hr className="  border-secondary" />
            <div className="flex flex-row gap-2 justify-center">
              <a
                target="_blank"
                href="https://www.facebook.com/inciflexegyptprepresssolutionsforpackaging?mibextid=ZbWKwL"
              >
                <FaFacebookSquare
                  className=" text-secondary hover:text-gray-200"
                  color=""
                  size={24}
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/inciflex-egypt-a167382b3/"
              >
                <FaLinkedin
                  className=" text-secondary hover:text-gray-200"
                  color=""
                  size={24}
                />
              </a>{" "}
            </div>
          </div>
          <div className="hidden sm:flex h-full  w-fit ">
            <div className="flex flex-col text-secondary gap-2 ">
              <h1 className="text-base md:text-lg xl:text-xl font-semibold">
                {t("Phone Numbers")}
              </h1>
              <h1 className="text-base md:text-lg xl:text-xl font-extralight">
                <span className=" underline">{t("no.1 title")}</span>{" "}
                <pre className="font-sans inline">+2012-2314-2095</pre>{" "}
              </h1>
              <h1 className="text-base md:text-lg xl:text-xl font-extralight">
                <span className=" underline">{t("no.2 title")}</span>{" "}
                <pre className="font-sans inline">+2010-0059-5849</pre>{" "}
              </h1>
              <h1 className="text-base md:text-lg xl:text-xl font-extralight">
                <span className=" underline">{t("no.3 title")}</span>{" "}
                <pre className="font-sans inline">+2010-6964-1118</pre>{" "}
              </h1>
              <h1 className="text-base md:text-lg xl:text-xl font-extralight flex gap-3 items-center ">
                <Phone />
                +20-03-4594692
              </h1>
              <h1 className="text-base md:text-lg xl:text-xl font-extralight flex gap-3 items-center ">
                <Phone />
                +20-03-4594750
              </h1>
              <h1 className="text-base md:text-lg xl:text-xl font-semibold">
                {t("Email")}
              </h1>
              <a
                target="_blank"
                className=" text-base md:text-lg xl:text-xl font-extralight hover:underline hover:text-[#ffffff] w-fit"
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@inciflexegypt.com"
              >
                info@inciflexegypt.com
              </a>
              <h1 className="text-base md:text-lg xl:text-xl font-semibold">
                {t("Location")}
              </h1>
              <h1 className="text-base md:text-lg xl:text-xl flex font-extralight">
                {t("location info")}
              </h1>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
