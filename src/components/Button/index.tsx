import React from "react";
import "./Button.css";

export type ButtonClickHandler = (text: string) => void;

type ButtonProps = {
  type?: string;
  text: string;
  clickHandler: ButtonClickHandler;
};

const Button: React.FC<ButtonProps> = ({ type, text, clickHandler }) => (
  <button className={type} onClick={() => clickHandler(text)}>
    <span>{text}</span>
  </button>
);

export default Button;
