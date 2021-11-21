import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favorite JS library used among developers",
  },
  {
    title: "How do you use React?",
    content: "You use react my making components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
