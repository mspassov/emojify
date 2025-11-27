import React from "react";
import "@/assets/card.css";

const EmojiCard = ({ data }) => {
  return (
    <div className="card">
      <p>{data}</p>
    </div>
  );
};

export default EmojiCard;
