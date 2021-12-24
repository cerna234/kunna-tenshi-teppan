import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: rgba(245, 17, 17, 1);
  color: white;
  padding: 0.6rem 2rem;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.45);
  position: absolute;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: rgba(245, 17, 17, 0.8);
    cursor: pointer;
    transform: translateY(-3px);
  }
`;

export const HomeButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  return (
    <Button onClick={onClick} type={type}>
      {children}
    </Button>
  );
};
