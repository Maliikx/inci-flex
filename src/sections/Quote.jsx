import React, { useState } from "react";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";


const Quote = () => {
  const [quote, setQuote] = useState(`Non puoi mettere un limite a tutto.<br/> Più sogni, più lontano arriverai.`);
  

  
  


  const { t } = useTranslation();
  function translateQuote() {

    const italianQuote = "Non puoi mettere un limite a tutto.<br/> Più sogni, più lontano arriverai.";
    // const englishQuote = "You can't put a limit on everything.<br/> The more you dream, the further you'll go.";
    // const arabicQuote = "لا يمكنك وضع حد لكل شيء.<br/> كلما حلمت أكثر، كلما وصلت أبعد."
    const q = t("quote");
    if (quote == italianQuote) {
    
      setQuote(q);
    }
    else {
     
    
      setQuote(italianQuote)
    }
    
  }

  return (
    <div className="flex items-center justify-center p-2 py-20 select-none grad">
      <div className="w-[75%] justify-center items-center">
        <span className="text-white font-normal flex flex-col gap-10  text-lg sm:text-3xl lg:text-4xl/[3.5rem]">
          <q className="" dangerouslySetInnerHTML={{ __html: quote }}/>
         
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-sm sm:text-xl lg:text-2xl">{t("Micheal Phelps")}</h1>
            <button
              className="inline-flex items-center justify-center p-1 text-sm font-medium transition-all ease-out bg-white rounded-md whitespace-nowrap h-fit lg:p-2 hover:brightness-90 delay-0"
              onClick={translateQuote}
            >
              <Languages color="black" className="scale-75 lg:scale-100" />
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Quote;
