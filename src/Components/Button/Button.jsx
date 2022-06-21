import React from "react";
import { ButtonWrapper } from "./Button.styled";

const Button = ({ type, text, page, click }) => {
  return (
    <ButtonWrapper className={page} type={type} onClick={click}>{text}</ButtonWrapper>
  );
};

export default Button;
