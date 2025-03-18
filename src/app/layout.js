import "../styles/globals.css";
import Home from "./page.js";

export const metadata = {
  title: "Language Translator",
  description: "Translate text from one language to another",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Home />
      </body>
    </html>
  );
}
