import React from "react";
import Button, { ButtonClickHandler } from "./Button";

type FunctionsProps = {
  onContentClear: ButtonClickHandler;
  onDelete: ButtonClickHandler;
};

const Functions: React.FC<FunctionsProps> = ({ onContentClear, onDelete }) => (
  <section className="functions">
    <Button
      type={"button-long-text"}
      text="clear"
      clickHandler={onContentClear}
    />
    <Button text="&larr;" clickHandler={onDelete} />
  </section>
);

export default Functions;
