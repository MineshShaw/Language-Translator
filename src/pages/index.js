import Background from "@/components/Background";
import InputBar from "@/components/InputBar";
import OutputBox from "@/components/OutputBox";
import TranslateButton from "@/components/TranslateButton";
import { LanguageProvider } from "@/context/languagesContext";

const Home = () => {
  return (
    <LanguageProvider>
      <div className="relative h-screen w-screen flex items-center justify-center">
        <Background />
        <div className="z-10 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold font-serif mb-4">Language Translator</h1>
          <div className="flex flex-row items-center justify-evenly border-2 p-[20px] rounded-lg w-[100%] backdrop-blur-md">
            <div className="left flex flex-col items-center justify-center mb-4">
              <InputBar />
              <TranslateButton />
            </div>
            <div className="right">
              <OutputBox />
            </div>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Home;
