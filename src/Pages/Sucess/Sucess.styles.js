import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 37vw;
  height: 90vh;
  background: #ffffff;
  border-radius: 15px;

  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #ffffff;
  }
`;

export const SucessTitleWrapper = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-size: 2em;
`;
