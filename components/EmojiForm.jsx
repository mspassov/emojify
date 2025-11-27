"use client";

import convertText from "@/actions/convertText";
import { useActionState, useTransition } from "react";

const EmojiForm = () => {
  const initialData = {
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
      <form action={formAction}>
        <textarea
          className="textarea"
          name="normalText"
          id="normalText"
          placeholder="Emojify your sentence..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {emojiData.content && (
        <>
          <p>{emojiData.content}</p>
          <button onClick={clearData}>Clear</button>
        </>
      )}
    </div>
  );
};

export default EmojiForm;
