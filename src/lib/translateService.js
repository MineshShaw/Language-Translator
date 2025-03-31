export default async function translate(req) {  
    const { text, sourceLang, targetLang } = req;
    if (!text || !sourceLang || !targetLang) {
      return alert("Missing required parameters");
    }
  
    const API_URL = "https://api-inference.huggingface.co/models/facebook/nllb-200-distilled-600M";
    const API_KEY = process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY;
    
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: text,
          parameters: { src_lang: sourceLang, tgt_lang: targetLang }
        }),
      });

  
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.error("Translation failed:", error);
      return alert("Translation failed. Please try again later.");
    }
  }
  