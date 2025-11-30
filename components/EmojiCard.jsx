"use client";

import React from "react";
import { FaRegCopy } from "react-icons/fa6";
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

  const copyText = async () => {
    await navigator.clipboard.writeText(emojis);
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
      <FaRegCopy onClick={copyText} className="copy-icon"/>
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
