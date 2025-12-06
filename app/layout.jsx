import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/assets/globals.css";
import "@/assets/nav.css";
import { ToastContainer } from "react-toastify";
import { Poppins, Pacifico } from "next/font/google";

export const metadata = {
  title: "Emojify",
  keywords: "AI, emoji, text-convert",
  description: "Convert any text to emojis - powered by AI",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const MainLayout = ({ children }) => {
  return (
    <html className={`${poppins.variable} ${pacifico.variable}`}>
      <body className="">
        <div className="container">
          <Navbar />
          {children}
          <ToastContainer />
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
