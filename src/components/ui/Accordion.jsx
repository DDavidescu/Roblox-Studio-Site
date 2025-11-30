// src/components/ui/Accordion.jsx
import { useState } from "react";
import "./Accordion/Accordion.scss";

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={`accordion__item ${isOpen ? "accordion__item--open" : ""}`}>
      <button className="accordion__header" onClick={onToggle}>
        <span className="accordion__question">{item.question}</span>
        <span className="accordion__icon">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className="accordion__body"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p className="accordion__answer">{item.answer}</p>
      </div>
    </div>
  );
}

function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="accordion">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}

export default Accordion;
