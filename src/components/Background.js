"use client"; 

import { useState, useEffect } from "react";

const texts = ["Hello", "Hola", "Bonjour", "Ciao", "नमस्ते", "你好", "こんにちは", "안녕하세요", "Hallo", "Привет", "مرحبا"];

const BackgroundText = () => {
  const [animatedTexts, setAnimatedTexts] = useState([]);

  useEffect(() => {
    const generateRandomStyles = () => {
      return texts.map((text) => ({
        text,
        top: `${Math.random() * 100}vh`, 
        animationDuration: `${5 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 3}s`, 
      }));
    };

    setAnimatedTexts(generateRandomStyles()); 
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden from-blue-200 to-green-200 bg-gradient-to-r">

      {animatedTexts.map(({ text, top, animationDuration, animationDelay }, index) => (
        <span
          key={index}
          className="absolute text-green-500 text-5xl font-bold animate-moveRight"
          style={{
            top,
            left: "-10vw",
            animationDuration,
            animationDelay,
          }}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default BackgroundText;
