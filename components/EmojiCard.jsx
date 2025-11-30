"use client";

import React from "react";
import { useState } from "react";
import "@/assets/card.css";

const EmojiCard = ({ emojis, sentence, reasoning }) => {
  const [isOpen, setIsOpen] = useState(false);

  let reasoningArr = reasoning.split(".").map((s) => s.trim());
  reasoningArr.pop();

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="card">
      <p className="sentence">
        <strong>Prompt: </strong>
        {sentence}
      </p>
      <p className="emojiText">{emojis}</p>
      <p className="reasoning-toggle" onClick={handleToggle}>
        {isOpen ? "-" : "+"} Reasoning
      </p>
      <ul className={`accordion ${isOpen ? "open" : "closed"}`}>
        {reasoningArr.map((item, index) => (
          <li className="accordion-li" key={index}>
            {item}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmojiCard;
