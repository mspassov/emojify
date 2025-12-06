"use client";

import React from "react";
import interpretEmojis from "@/actions/interpretEmojis";
import { FaRegCopy } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "@/assets/card.css";

const EmojiCard = ({ id, emojis, sentence, reasoning }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newText, setNewText] = useState(null);

  let reasoningArr = reasoning.split(".").map((s) => s.trim());
  reasoningArr.pop();

  //Set up the logic for dragging the card
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = { transition, transform: CSS.Transform.toString(transform) };

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const copyText = async () => {
    await navigator.clipboard.writeText(emojis);
    toast.info("Copied!", {
      autoClose: 1500,
    });
  };

  const handleAction = async () => {
    const res = await interpretEmojis(emojis);
    setNewText(res.interpretation);
  };

  return (
    <div
      className="card"
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <p className="sentence">
        <strong>Prompt: </strong>
        {sentence}
      </p>

      <p className="emojiText">{emojis}</p>

      <button className="btn interpret" onClick={handleAction}>
        {newText ? "Try Again" : "Interpret"}
      </button>

      {newText && (
        <p className="sentence">
          <strong>Translation: </strong>
          {newText}
        </p>
      )}

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

      <FaRegCopy onClick={copyText} className="copy-icon" />
    </div>
  );
};

export default EmojiCard;
