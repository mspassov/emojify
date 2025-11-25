import React from "react";
import convertText from "@/actions/convertText";

const EmojiForm = () => {
  return (
    <form action={convertText}>
      <textarea
        className="textarea"
        name="normalText"
        id="normalText"
        placeholder="Emojify your sentence..."
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmojiForm;
