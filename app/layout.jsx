import React from "react";
import "@/assets/globals.css";

export const metadata = {
  title: "Emojify",
  keywords: "AI, emoji, text-convert",
  description: "Convert any text to emojis - powered by AI",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
