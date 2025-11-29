"use client";
import EmojiCard from "./EmojiCard";
import convertText from "@/actions/convertText";
import { useActionState, useTransition } from "react";

const EmojiForm = () => {
  const initialData = {
    sentence: null,
    content: null,
    reasoning: null,
  };
  const [emojiData, formAction] = useActionState(convertText, initialData);
  const [isPending, startTransition] = useTransition();

  const clearData = () => {
    startTransition(() => formAction(initialData));
  };

  return (
    <div>
      <form action={formAction} className="flex-form">
        <input
          type="textarea"
          className="textarea"
          name="normalText"
          id="normalText"
          placeholder="Emojify your sentence..."
        ></input>
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </form>

      {emojiData.content && (
        <div className="card-container">
          <div onClick={clearData} className="clear">
            Clear
          </div>
          <EmojiCard emojis={emojiData.content} sentence={emojiData.sentence} />
        </div>
      )}
    </div>
  );
};

export default EmojiForm;
