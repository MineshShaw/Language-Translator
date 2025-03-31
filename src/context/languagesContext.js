import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [sourceLang, setSourceLang] = useState("eng_Latn"); 
  const [targetLang, setTargetLang] = useState("eng_Latn"); 
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  return (
    <LanguageContext.Provider value={{ sourceLang, setSourceLang, targetLang, setTargetLang, inputText, setInputText, outputText, setOutputText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
