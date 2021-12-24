import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background: black;
`;

const FormContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  position: absolute;
  top: 10vh;
  align-items: center;
  text-align: center;
  height: 85%;
  width: 75%;
  max-width: 1300px;
  background: white;
  border: 0px solid black;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.8);

  @media screen and (max-width: 300px) {
    width: 100%;
  }
  @media screen and (max-width: 420px) {
    width: 80%;
  }
  @media screen and (min-width: 650px) {
    width: 50%;
  }
`;

const Title = styled.h3`
  color: #e33812;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Info = styled.div`
  display: flex;
  padding: 5px 0px;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 630px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: 1rem;
  padding: 2px 5px;

  @media screen and (max-width: 630px) {
    margin-left: 0;
  }
`;

const Select = styled.select`
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: 1rem;
  padding: 2px 5px;

  @media screen and (max-width: 630px) {
    margin-left: 0;
  }
`;

const Button = styled.button`
  background: rgba(227, 56, 18, 1);
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
    background: rgba(227, 56, 18, 0.8);
    transform: scale(1.06);
  }
`;

const Label = styled.label`
  font-weight: 400;
`;

const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100%;

  @media screen and (min-width: 1024px) {
    font-size: 1.2rem;
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
          <Info>
            <label for="appt">Time</label>
            <Input type="time" id="appt" name="time" />
          </Info>
          <Info>
            <label for="size">Guest Size</label>
            <Select name="guest size" id="size">
              <option value="1">range1</option>
              <option value="2">range2</option>
              <option value="3">range3</option>
              <option value="4">range4</option>
            </Select>
          </Info>
          <Button>Submit</Button>
        </FormContent>
      </FormContainer>
    </Container>
  );
};

export default Form;
