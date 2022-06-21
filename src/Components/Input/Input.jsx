import React from "react";
import { DivWrapper, InputWrapper, LabelWrapper, SpanWrapper} from "./Input.styled";

const Input = ({ type, name, label, span, placeholder }) => {
  return (
    <DivWrapper className={`${type}`}>
      <LabelWrapper className={type}>{label}</LabelWrapper>
      <InputWrapper
        type={type}
        name={name}
        placeholder={placeholder}
        className={type}
      />
      <SpanWrapper className={type}>{span}</SpanWrapper>
    </DivWrapper>
  );
};

export default Input;
