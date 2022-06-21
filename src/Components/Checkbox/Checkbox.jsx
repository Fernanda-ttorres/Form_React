import React from "react";
import { InputWrapper, LabelWrapper } from "./Checkbox.styled";

const Checkbox = ({ type, text }) => {
  return (
    <LabelWrapper>
      <InputWrapper type={type} required />
      {text}
    </LabelWrapper>
  );
};

export default Checkbox;
