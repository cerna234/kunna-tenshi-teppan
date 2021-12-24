import React from "react";
import { HomeButton } from "./HomeButton";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 60%;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
  z-index: -1;
`;

const Quote = () => {
  return (
    <Container>
      <Title>REQUEST A QUOTE</Title>
        <HomeButton>Contact</HomeButton>
      <Image
        // src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        src="https://images.unsplash.com/photo-1576237934915-c716cf54b24d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="Quote_Image"
      />
    </Container>
  );
};

export default Quote;
