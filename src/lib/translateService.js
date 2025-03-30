export default async function translate(req, res) {  
    const { text, sourceLang, targetLang } = req.body;
    if (!text || !sourceLang || !targetLang) {
      return res.status(400).json({ error: "Missing required parameters" });
    }
  
    const API_URL = "https://api-inference.huggingface.co/models/facebook/nllb-200-distilled-600M";
    const API_KEY = process.env.HUGGINGFACE_API_KEY;
  
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
      return res.status(200).json({ translation: data[0]?.translation_text || "Translation error" });
  
    } catch (error) {
      console.error("Translation failed:", error);
      return res.status(500).json({ error: "Translation failed" });
    }
  }
  