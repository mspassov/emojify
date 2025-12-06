import React from "react";
import "@/assets/about.css";

const AboutPage = () => {
  return (
    <section className="about">
      <h3>Key Technologies:</h3>
      <ul className="about-list">
        <li>Next JS</li>
        <li>Next JS Server Actions</li>
        <li>Dnd Library (Drag and Drop) for React</li>
        <li>Groq LLM Model (Open AI under the hood)</li>
        <li>REST APIs</li>
      </ul>
    </section>
  );
};

export default AboutPage;
