import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Masonry from "react-masonry-css";
import { useEffect } from "react";


import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const News = () => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, {
    once: true,
    margin:'-80% 0px -20% 0px'
  });
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    //   Banner
    <div className="h-fit select-none">
      <video
        src="/assets/vhx9ia.mp4"
        className=" w-full h-[30vh] sm:h-[60vh] object-cover z-0 absolute"
        loop
        muted
        autoPlay
      ></video>
      <div className="relative h-[30vh] sm:h-[60vh] flex flex-col items-center  justify-center">
        <h1 className=" text-white relative  text-5xl md:text-6xl xl:text-9xl/[11rem] font-light">
          {t("News")}
        </h1>
        <div className=" flex flex-col gap-2 ">
          <h1 className=" text-white  sm:text-xl md:text-3xl xl:text-5xl font-light">
            {t("news remider")}
          </h1>
          <div className="flex flex-row gap-2 justify-center">
            <a
              target="_blank"
              href="https://www.facebook.com/inciflexegyptprepresssolutionsforpackaging?mibextid=ZbWKwL"
            >
              <FaFacebookSquare className=" text-white hover:text-gray-200" color="" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/inciflex-egypt-a167382b3/"
              target="_blank"
            >
              <FaLinkedin className=" text-white hover:text-gray-200" color="" size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* news */}

      <div ref={contentRef} className=" justify-center p-10 md:p-20 pt-10 flex md:block">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          columnClassName="my-masonry-grid_column flex flex-wrap justify-center "
          className="my-masonry-grid  "
        >
          {i18n.language === "en"
            ? data_en.map((d) => (
                <>
                  <div
                    className={`border h-fit mt-8 w-full md:w-fit  aspect-square  transition-all 
          duration-1000 ease-[cubic-bezier(0.7, -0.03, 0.56, 1)] delay-100 ${
            isInView? "" : "translate-y-[100px] opacity-0"
                    }`}

                  >
                    <div className={` w-full md:w-[300px]  flex flex-col `}>
                      <div className="flex rounded-xl h-fit border ">
                        <img src={d.thumbnail} alt="" draggable="false" />
                      </div>
                      <h1 className=" bg-gray-100 font-bold text-xl pt-3 px-5">
                        {d.header}
                      </h1>
                      <hr />
                      <h1 className="w-full font-extralight pb-5 px-4">
                        {d.description}
                      </h1>
                    </div>
                  </div>
                </>
              ))
            : data_ar.map((d) => (
                <>
                 <div
                    className={`border h-fit mt-8 w-full md:w-fit  aspect-square  transition-all 
          duration-1000 ease-[cubic-bezier(0.7, -0.03, 0.56, 1)] delay-100 ${
            isInView? "" : "translate-y-[100px] opacity-0"
                    }`}

                  >
                    <div className={` w-full md:w-[300px]  flex flex-col `}>
                      <div className="flex rounded-xl h-fit border ">
                        <img src={d.thumbnail} alt="" draggable="false" />
                      </div>
                      <h1 className=" bg-gray-100 font-bold text-xl pt-3 px-5">
                        {d.header}
                      </h1>
                      <hr />
                      <h1 className="w-full font-extralight pb-5 px-4">
                        {d.description}
                      </h1>
                    </div>
                  </div>
                </>
              ))}
        </Masonry>
      </div>

      
    </div>
  );
};

const data_en = [
  {
    thumbnail: "/assets/news/news1.jpeg",
    header: "Introducing Cyrel® EASY FAST EFX: Next-Level Printing Excellence",
    description:
      "Unlock unrivaled printing quality with Cyrel® EASY FAST EFX, a thermal processed plate designed for halftones, linework, and solids. Its smooth surface allows for exceptional ink density transfer and low dot gain, perfect for flexible packaging, labels, envelopes, and more. Compatible with solvent-based, water-based, and UV inks, Cyrel® EASY FAST EFX sets a new standard for high-quality printing.",
  },
  {
    thumbnail: "/assets/news/news2.jpg",
    header:
      "Empowering Teams: Recent Training Enhances Skills, Collaboration and safty",
    description:
      'In a proactive step towards professional development, our team has successfully completed series of training courses covering a wide array of essential skills. Dubbed the "Train of Training (ToT)," these courses focused on problem-solving strategies, fostering effective teamwork, facilitating discussions, mastering firefighting techniques, internal audit processes, as well as delving into cost and pricing programs. With this comprehensive training under their belts, our team is now equipped with enhanced capabilities to tackle challenges, drive innovation, and deliver top-notch results.',
  },
  
];
const data_ar = [
  {
    thumbnail: "/assets/news/news1.jpeg",
    header: "تقديم Cyrel® EASY FAST EFX: التميز في الطباعة على المستوى التالي",
    description:
      "قدمت تكنولوجيا الحفر مع Cyrel® EASY FAST EFX جودة غير مسبوقة حيث تتم المعالجة الحرارية للاكلشيهات بطريقة مبتكرة  تؤدي اللي الحصول على نوع من الأكلشيهات بشكل ناعم يسمح بنقل الأحبار المائية و أحبار الاشعة فوق البنفسجية الي مواد الطباعة المرنة من الكرتون و الاستيكرات و الأظرف و بدرجة عالية من الدقة حيث تضع معياراً جديداً لطباعة عالية الجودة.",
  },
  {
    thumbnail: "/assets/news/news2.jpg",
    header: "تطوير الفريق:أخر التدريبات لتعزيز المهارات والتعاون والسلامة",
    description:
      'في خطوة نشطة نحو التطوير المهني، أكمل فريقنا سلسلة من دورات التدريب التي تغطي مجموعة واسعة من المهارات الأساسية. يُعرف هذا التدريب بـ "قطار التدريب (ToT)"، حيث ركزت هذه الدورات على استراتيجيات حل المشكلات، وتعزيز فعالية العمل الجماعي، وتسهيل النقاشات، واحتراف تقنيات مكافحة الحرائق، وعمليات التدقيق الداخلي، بالإضافة إلى التعمق في برامج التكلفة والتسعير. بفضل هذا التدريب الشامل، أصبح فريقنا مجهزًا الآن بقدرات محسّنة لمواجهة التحديات، ودفع الابتكار، وتحقيق أفضل النتائج.',
  },
];

const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  1090: 2,
  765: 1,
};

export default News;
