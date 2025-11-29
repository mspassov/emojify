import React from "react";
import EmojiForm from "@/components/EmojiForm";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="main">
      <h1>Emojify your text!</h1>
      <p className="action-text">
        Convert any sentence to a series of emojis, <br /> and from there, it's
        up to you how you use them!
      </p>
      <EmojiForm />
    </section>
  );
};

export default HomePage;
