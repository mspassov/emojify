"use client";
import EmojiCard from "./EmojiCard";
import convertText from "@/actions/convertText";
import { useState } from "react";
import {
  closestCorners,
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { FaArrowsUpDownLeftRight } from "react-icons/fa6";

const EmojiForm = () => {
  const [emojiData, setEmojiData] = useState([]);
  const [emojiInput, setEmojiInput] = useState("");

  const handleAction = async (formData) => {
    const res = await convertText(null, formData);
    setEmojiInput("");
    setEmojiData((prev) => [res, ...prev]);
  };

  const getTaskPos = (id) => {
    return emojiData.findIndex((item) => item.id == id);
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id == over.id) {
      return;
    }

    setEmojiData((prev) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(emojiData, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    })
  );

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
          <div className="notes-flex">
            <div onClick={() => setEmojiData([])} className="clear">
              Clear
            </div>
            <div className="drag-note">
              <div className="drag-note-flex">
                <FaArrowsUpDownLeftRight className="drag-icon" />
                Drag and Drop the Cards!
              </div>
            </div>
          </div>
          <div className="draggable-container">
            <DndContext
              onDragEnd={handleDragEnd}
              collisionDetection={closestCorners}
              sensors={sensors}
            >
              <SortableContext
                items={emojiData}
                strategy={verticalListSortingStrategy}
              >
                {emojiData.map((item, index) => (
                  <EmojiCard
                    key={item.id}
                    id={item.id}
                    emojis={item.content}
                    sentence={item.sentence}
                    reasoning={item.reasoning}
                  />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiForm;
