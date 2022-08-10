import React from "react";
import Button, { ButtonClickHandler } from "./Button";

type NumbersProps = {
  onClickNumber: ButtonClickHandler;
};

const numbers: Array<number> = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const renderButtons = (onClickNumber: ButtonClickHandler) =>
  numbers.map((number: number) => (
    <Button
      key={number}
      text={number.toString()}
      clickHandler={onClickNumber}
    />
  ));

const Numbers: React.FC<NumbersProps> = ({ onClickNumber }) => {
  return <section className="numbers">{renderButtons(onClickNumber)}</section>;
};

export default Numbers;
