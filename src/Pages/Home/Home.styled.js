import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 37vw;
  height: 90vh;
  background: #ffffff;
  border-radius: 15px;

  .row-inputs1,
  .row-inputs2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 37vw;
  }

  .form-footer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 33vw;
    margin-top: 4em;
  }

  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #ffffff;

    .row-inputs1 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;
    }

    .row-inputs2 {
      width: 100%;
    }

    .form-footer {
      display: flex;
      width: 100vw;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2em;
      margin-top: 2em;
    }
  }
`;

export const TitleWrapper = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-size: 2em;
`;
