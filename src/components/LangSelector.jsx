import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LangSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
    useEffect(() => { 
document.body.dir= i18n.dir()
    }
, [i18n, i18n.language])

  const langs = [
    { code: "en", lang: "English" },
    { code: "ar", lang: "العربية" },
  ];
  return (
    <div className="h-full flex  rounded-lg flex-row transition-all ease-in delay-50 ">
      {langs.map((lng) => {
        return (
          <button
            className={` text-lg flex flex-row gap-3 rounded-lg bg-gray-200 hover:bg-gray-300 p-2 ${
              lng.code === i18n.language ? "hidden" : ""
            }`}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            <Globe className=" " />

          </button>
        );
      })}
    </div>
  );
};

export default LangSelector;
