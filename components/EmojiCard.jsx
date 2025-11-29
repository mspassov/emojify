import React from "react";
import "@/assets/card.css";

const EmojiCard = ({ emojis, sentence }) => {
  return (
    <div className="card">
      <p className="sentence">
        <strong>Prompt: </strong>
        {sentence}
      </p>
      <p className="emojiText">{emojis}</p>
    </div>
  );
};

export default EmojiCard;
