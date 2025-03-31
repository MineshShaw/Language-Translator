# Language Translator

A web-based language translation application built with Next.js and Tailwind CSS, utilizing the Hugging Face API for high-quality text-to-text translations across multiple languages.

## Features
- Supports multiple languages
- Uses `facebook/nllb-200-distilled-600M` model for translation
- Built with Next.js and Tailwind CSS
- State management using Context API

## Installation

### Prerequisites
- Node.js (latest LTS recommended)
- npm or yarn

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/MineshShaw/Language-Translator
   cd language-translator
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file in the root directory and add your Hugging Face API key:
   ```sh
   NEXT_PUBLIC_HUGGINGFACE_API_KEY=your_huggingface_api_key
   ```
4. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage
- Enter text in the input field.
- Select the source and target languages.
- Click the "Translate" button to get the translated text.

## Technologies Used
- **Next.js** – React framework for server-side rendering and static site generation
- **Tailwind CSS** – Utility-first CSS framework for styling
- **Hugging Face API** – Provides access to the `facebook/nllb-200-distilled-600M` model for translation
- **Context API** – State management for handling translations