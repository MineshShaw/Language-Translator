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
      <div className="input-bar flex gap-3 flex-col items-center justify-center mb-4">
        <div className="w-full flex flex-col items-center justify-center mb-4">
          <label
            htmlFor="inputText"
            className="block text-lg font-medium text-gray-700"
          >
            Input:
          </label>
          <input
            className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            placeholder="Enter text to translate..."
            required
            type="text"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="sourceLang"
            className="block text-lg font-medium text-gray-700"
          >
            Source Language:
          </label>
          <select
            id="sourceLang"
            value={sourceLang}
            onChange={handleSourceChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="targetLang"
            className="block text-lg font-medium text-gray-700"
          >
            Target Language:
          </label>
          <select
            id="targetLang"
            value={targetLang}
            onChange={handleTargetChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBar;
