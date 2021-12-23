import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  height: 8vh;
  width: 100%;
  background-color: none;
  position: fixed;
  z-index: 1000;
  justify-content: space-around;

  @media screen and (max-width: 500px) {
    justify-content: space-between;
    background: ${({ click }) => (click ? "black" : "none")};
  }
`;

const Logo = styled.a`
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  text-decoration: none;
  margin-left: 25px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  color: white;
  z-index: 1;

  @media screen and (max-width: 500px) {
    position: absolute;
    top: 8vh;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    height: 90vh;
    width: 100%;
    transition: all 150ms ease-in-out;
    background: black;
  }
`;

const Links = styled.a`
  padding: 15px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  text-decoration: none;
  color: #fff;
  letter-spacing: 1px;
  font-size: 0.8rem;

  &:hover {
    color: #e33812;
    border-bottom: 3px solid #e33812;
  }
  @media screen and (max-width: 500px) {
    padding: 25px 50px;
  }
`;

const Burger = styled.button`
  display: none;
  align-items: center;
  color: white;
  margin-right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    display: flex;
  }
`;

const NavBarComp = () => {
  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  };

  return (
    <Nav click={click}>
      <Logo href="/">Logo</Logo>
      <NavLinks click={click}>
        <Links href="/">Home</Links>
        <Links href="/about">About</Links>
        <Links href="/menu">Menu</Links>
        <Links href="/booking">Booking</Links>
      </NavLinks>
      <Burger onClick={() => ChangeClick()}>
        {click ? <FaTimes size={25} /> : <FaBars size={25} />}
      </Burger>
    </Nav>
  );
};

export default NavBarComp;
