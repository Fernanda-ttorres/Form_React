import React from "react";
import Button from "../../Components/Button/Button";
import { DivWrapper, SucessTitleWrapper } from "./Sucess.styles";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Sucess() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/");
  };

  return (
    <>
      <DivWrapper>
        <img src={logo} alt="Logo" />
        <SucessTitleWrapper>Sucess!</SucessTitleWrapper>
        <Button
          page="sucess"
          type="submit"
          text="Go back!"
          click={handleSubmit}
        />
      </DivWrapper>
    </>
  );
}

export default Sucess;
