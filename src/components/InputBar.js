import { useState } from "react";
import languages from "@/lib/languages";
import TranslateButton from "@/components/TranslateButton";

const InputBar = () => {
  const [sourceLang, setSourceLang] = useState("eng_Latn");
  const [targetLang, setTargetLang] = useState("eng_Latn");

  const handleSourceChange = (e) => {
    setSourceLang(e.target.value);
    onLanguageChange(e.target.value, targetLang);
  };

  const handleTargetChange = (e) => {
    setTargetLang(e.target.value);
    onLanguageChange(sourceLang, e.target.value);
  };
  

  return (
    <>
    <div className="input-bar">
      <input type="text" placeholder="Type a message..." />
      <label htmlFor="sourceLang">Source Language:</label>
      <select id="sourceLang" value={sourceLang} onChange={handleSourceChange}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      <label htmlFor="targetLang">Target Language:</label>
      <select id="targetLang" value={targetLang} onChange={handleTargetChange}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
    <div className="translate-button">
      <TranslateButton />
    </div>
    </>
  );
};

export default InputBar;
