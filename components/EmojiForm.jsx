"use client";
import EmojiCard from "./EmojiCard";
import convertText from "@/actions/convertText";
import { useActionState, useTransition } from "react";
import { useState } from "react";

const EmojiForm = () => {
  const [emojiData, setEmojiData] = useState([]);
  const [emojiInput, setEmojiInput] = useState("");

  const handleAction = async (formData) => {
    const res = await convertText(null, formData);
    setEmojiInput("");
    setEmojiData((prev) => [res, ...prev]);
  };

  return (
    <div>
      <form action={handleAction} className="flex-form">
        <input
          className="textarea"
          name="normalText"
          value={emojiInput}
          onChange={(e) => setEmojiInput(e.target.value)}
          id="normalText"
          placeholder="Emojify your sentence..."
        ></input>
        <button
          disabled={emojiInput.trim() == "" ? true : false}
          type="submit"
          className="btn btn-submit"
        >
          Submit
        </button>
      </form>

      {emojiData.length > 0 && (
        <div className="card-container">
          <div onClick={() => setEmojiData([])} className="clear">
            Clear
          </div>
          {emojiData.map((item, index) => (
            <EmojiCard
              key={index}
              emojis={item.content}
              sentence={item.sentence}
              reasoning={item.reasoning}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmojiForm;
