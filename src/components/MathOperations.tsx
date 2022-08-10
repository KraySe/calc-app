import React from "react";
import Button, { ButtonClickHandler } from "./Button";

type MathOperationsProps = {
  onClickOperation: ButtonClickHandler;
  onClickEqual: ButtonClickHandler;
};

const MathOperations: React.FC<MathOperationsProps> = ({
  onClickOperation,
  onClickEqual,
}) => (
  <section className="math-operations">
    <Button text="+" clickHandler={onClickOperation} />
    <Button text="-" clickHandler={onClickOperation} />
    <Button text="*" clickHandler={onClickOperation} />
    <Button text="/" clickHandler={onClickOperation} />
    <Button text="=" clickHandler={onClickEqual} />
  </section>
);

export default MathOperations;
