import languages from "@/lib/languages";
import { useLanguage } from "@/context/languagesContext";

const InputBar = () => {
  const {
    sourceLang,
    setSourceLang,
    targetLang,
    setTargetLang,
    inputText,
    setInputText,
  } = useLanguage();

  const handleSourceChange = (e) => {
    setSourceLang(e.target.value);
  };

  const handleTargetChange = (e) => {
    setTargetLang(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div className="input-bar flex flex-col items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputText}
          onChange={handleInputChange}
          className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full max-w-md"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        />
        <label htmlFor="sourceLang">Source Language:</label>
        <select
          id="sourceLang"
          value={sourceLang}
          onChange={handleSourceChange}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        <label htmlFor="targetLang">Target Language:</label>
        <select
          id="targetLang"
          value={targetLang}
          onChange={handleTargetChange}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default InputBar;
