import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  &.email,
  &.password {
    width: 21vw;
  }

  &.tel,
  &.date {
    width: 11vw;
  }

  @media screen and (max-width: 780px) {
    &.email,
    &.tel {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
    }

    &.password,
    &.date {
      width: 50%;
    }
  }
`;

export const InputWrapper = styled.input`
  border: none;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  padding: 0.5em;
  width: 85%;
  margin: 0.5em 0;

  &.email,
  &.password {
    width: 18vw;
  }

  &.tel,
  &.date {
    width: 9vw;
  }

  @media screen and (max-width: 780px) {
    width: 85vw;

    &.email,
    &.password {
      width: 85%;
    }

    &.tel,
    &.date {
      width: 37vw;
    }
  }
`;

export const LabelWrapper = styled.label`
  font-size: 0.9em;
  color: #767676;
  width: 88%;

  @media screen and (max-width: 780px) {
    &.c,
    &.d {
      width: 80%;
    }
  }
`;

export const SpanWrapper = styled.span`
  font-size: 0.9em;
  color: #ff0000;
  width: 88%;

  @media screen and (max-width: 780px) {
    &.password,
    &.date {
      width: 80%;
    }
  }
`;
