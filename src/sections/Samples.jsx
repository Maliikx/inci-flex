import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


import { ArrowRight, ArrowLeft } from "lucide-react";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  pauseOnHover: false,
};


const Samples = () => {
  const [mdSlides, setMdSlides] = useState();
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, {
    once: true,
  });

  useEffect(() => {
    // Add event listener for window resize
    const handleResize = () => {
      // Check if the screen size is medium or larger (md:)
      if (window.innerWidth >= 768) {
        setMdSlides(3); // Change the variable to 1 for medium screens
      } else {
        setMdSlides(1); // Change the variable to 3 for other screen sizes
      }
    };
    // Call the handleResize function initially and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <div className=" select-none grad2 gap-20 py-20 px-2 relative flex flex-col    overflow-hidden items-center justify-center h-fit">
      <h1
        className={` text-4xl md:text-3xl lg:text-2xl  font-semibold transition-all 
          duration-1000 ease-[cubic-bezier(0.7, -0.03, 0.56, 1)] delay-500 ${
            isInView ? "" : " opacity-0"
          }`}
      >
        {t("Samples")}
      </h1>
      <div className={`w-[90%] `}>
        <div id="slider" ref={contentRef} className="">
          <Slider
            {...settings}
            autoplay
            autoplaySpeed="25"
            infinite
            slidesToShow={mdSlides}
            prevArrow={<ArrowLeft color="grey " />}
            nextArrow={<ArrowRight color="grey" />}
          >
            {data.map((d) => (
              <>
                <div className=" h-fit  flex justify-center p-5 items-center ">
                  <img src={d.img} alt="" className="h-full  " />
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
const data = [
  {
    img: `src/assets/WhatsApp Image 2024-01-13 at 11.48.48 AM (1).jpeg`,
  },
  {
    img: `src/assets/WhatsApp Image 2024-01-13 at 11.48.48 AM.jpeg`,
  },
  
  {
    img: `/src/assets/WhatsApp Image 2024-01-13 at 11.48.49 AM.jpeg`,
  },
  {
    img: `src/assets/WhatsApp Image 2024-01-13 at 11.48.47 AM.jpeg`,
  },
];

export default Samples;
