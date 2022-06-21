import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0dbdbd;
  border: none;
  border-radius: 5px;
  padding: 0.6em;
  color: white;
  font-size: 0.9em;
  cursor: pointer;

  @media screen and (max-width: 780px) {
    width: 90vw;
    height: 7vh;
    padding: 1em;
    font-size: 1.3em;
  }

  &.sucess {
    margin: 4em 0 0 0;
    padding: 2em;
    font-size: 1.3em;

    @media screen and (max-width: 780px) {
      width: 80vw;
      height: 8vh;
      padding: 1em;
    }
  }
`;
