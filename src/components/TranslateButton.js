import { useLanguage } from "@/context/languagesContext";
import translate from "@/lib/translateService";

const TranslateButton = () => {
    const {inputText, sourceLang, targetLang, setOutputText} = useLanguage();

    const handleTranslate = () => {
        if (!inputText) {
            alert("Please enter text to translate.");
            return;
        }
        translate({ text: inputText, sourceLang, targetLang }).then((response) => {
            setOutputText(response[0].translation_text);
        });
    }

    return (    
    <button onClick={handleTranslate} className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
        Translate
      </button>      
     );
}
 
export default TranslateButton;