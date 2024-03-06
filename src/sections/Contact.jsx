import React from "react";
import Form from "@/components/Form";
import { useTranslation } from "react-i18next";
import { Phone } from "lucide-react";


const Contact = () => {
  const { t } = useTranslation();



  return (
    <div className="h-fit flex-col flex gap-20 py-10 md:pb-20 p-5 sm:pt-10 items-center grad3">
      <h1 className="select-none text-3xl  lg:text-2xl font-semibold">
        {t("Contacts")}
      </h1>
      <div className="w-full sm:w-[70%] p-5 sm:p-0 h-fit  flex flex-col lg:flex-row gap-10 md:justify-between">
        <div className={` gap-3 text-lg md:text-xl xl:text-2xl flex flex-col `}>
          <h1 className=" font-semibold">{t("Phone Numbers")}</h1>
          <h1 className="font-extralight"><span className=" underline">{t("no.1 title")}</span> <pre className="font-sans inline">+2012-2314-2095</pre> </h1>
          <h1 className="font-extralight"><span className=" underline">{t("no.2 title")}</span><pre className="font-sans inline">+2010-0059-5849</pre></h1>
          <h1 className="font-extralight"><span className=" underline">{t("no.3 title")}</span><pre className="font-sans inline">+2010-6964-1118</pre></h1>
          <h1 className="font-extralight flex gap-3 items-center "><Phone/>+20-03-4594692</h1>
          <h1 className="font-extralight flex gap-3 items-center "><Phone/>+20-03-4594750</h1>
          <h1 className=" font-semibold">{t("Email")}</h1>
          <a target="_blank" className="ltr font-extralight hover:underline hover:text-[#ffffff] w-fit" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@inciflexegypt.com"  >info@inciflexegypt.com</a>
        </div>
        <div className=" w-full lg:w-1/2  h-full">
          <div className="flex flex-col select-none items-center h-80 justify-center">
            {/* <ContactForm /> */}
            <Form />
            
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.1921876041174!2d29.56337618744816!3d30.881284212734936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5876d40a3bedd%3A0xa80887fee2915695!2sINCI-FLEX%20EGYPT!5e0!3m2!1sen!2sus!4v1706619160168!5m2!1sen!2sus"
        className="h-fit sm:h-[40vh] border-white border-8  w-full sm:w-[60%] "
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
