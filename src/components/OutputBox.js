import { useLanguage } from "@/context/languagesContext";

const OutputBox = () => {
    const { outputText } = useLanguage();

    return ( 
        <div className="output-box">
            <h3>Output</h3>
            <textarea
                className="output-textarea"
                value={outputText}
                readOnly
                placeholder="Translated text will appear here"
            />
        </div>
     );
}
 
export default OutputBox;