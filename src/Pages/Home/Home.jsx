import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Checkbox from "../../Components/Checkbox/Checkbox";
import Input from "../../Components/Input/Input";
import { FormWrapper, TitleWrapper } from "./Home.styled";
import logo from "../../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Sucess");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <img src={logo} alt="Logo" />
      <TitleWrapper>Intern Sing Up</TitleWrapper>
      <Input type="text" label="Full Name *" placeholder="Name" />
      <div className="row-inputs1">
        <Input
          type="email"
          label="Email *"
          placeholder="foo@bar.com"
        />
        <Input
          type="tel"
          label="Phone"
          placeholder="(83) 00000-0000"
        />
      </div>
      <div className="row-inputs2">
        <Input type="password" label="Password" />
        <Input type="date" label="Birthday" />
      </div>
      <div className="form-footer">
        <Checkbox type="checkbox" text=" I accept the terms and privacy" />
        <Button type="submit" text="Register" click={handleSubmit} />
      </div>
    </FormWrapper>
  );
};

export default Home;
