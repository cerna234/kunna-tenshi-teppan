import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: black;
`;

const FormContainer = styled.div`
  display: flex;
  position: relative;
  top: 8vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 75%;
  max-width: 1300px;
  /* background-color: rgb(24, 24, 24); */
  border: 0px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 630px) {
    width: 90%;
    /* margin-bottom: 5rem; */
  }

  @media screen and (max-width: 321px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  color: rgba(245, 17, 17, 1);
  font-size: 1.3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  letter-spacing: 3px;
  margin-bottom: 2rem;

  @media screen and (min-width: 631px) {
    /* margin-bottom: 3rem; */
  }
`;

const Info = styled.div`
  display: flex;
  padding: 5px 0px;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid #898787;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 2px 5px;
  color: #898787;

  &:focus {
    border-bottom: 2px solid #898787;
    outline: 1px solid #898787;
  }
  @media screen and (max-width: 630px) {
    margin-left: 0;
  }
`;

const Button = styled.button`
  background: rgba(245, 17, 17, 1);
  padding: 5px 15px;
  border: 0 solid black;
  box-sizing: border-box;
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: rgba(245, 17, 17, 0.8);
    transform: scale(1.06);
  }
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 1.1rem;
  color: white;
`;

const SubSection = styled.div`
  @media screen and (min-width: 480px) {
    display: flex;
  }
`;

const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10px;
  height: 100%;
margin: 5rem 0;
  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const Form = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <Container>
      <FormContainer>
        <FormContent onSubmit={handleSubmit}>
          <Title>Book a Consultation</Title>
          <SubSection>
            <Info>
              <Label htmlFor="first">First</Label>
              <Input
                type="text"
                name="firstName"
                id="first"
                placeholder="First Name"
              />
            </Info>
            <Info>
              <Label htmlFor="last">Last</Label>
              <Input
                type="text"
                name="lastName"
                id="last"
                placeholder="Last Name"
              />
            </Info>
          </SubSection>
          <Info>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              pattern=".+@[gG][mM][aA][iI][lL][.][cC][oO][mM]"
              placeholder="example@gmail.com"
            />
          </Info>
          <Info>
            <Label htmlFor="phonenum">Phone Number</Label>
            <Input
              type="tel"
              name="phoneNumber"
              id="phonenum"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-123-1234"
            />
          </Info>
          <Info>
            <Label htmlFor="date">Please choose a date</Label>
            <Input type="date" name="date" id="date" />
          </Info>
          <SubSection>
            <Info>
              <Label for="appt">Time</Label>
              <Input type="time" id="appt" name="time" />
            </Info>
            <Info>
              <Label for="guest">Guests</Label>
              <Input
                type="number"
                id="guest"
                name="guest size"
                min="12"
                max="100"
              />
            </Info>
          </SubSection>
          <Button>Submit</Button>
        </FormContent>
      </FormContainer>
    </Container>
  );
};

export default Form;
