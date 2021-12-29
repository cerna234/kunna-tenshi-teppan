import React from "react";
import styled from "styled-components";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

const Container = styled.footer`
  background-color: #090909;
  position: relative;
  height: 10vh;
  color: white;
  padding: 5px 10px;
  z-index: 200;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;

const Logo = styled.a`
  color: white;
  text-decoration: none;
`;

const Email = styled.a`
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  color: #898787;

  @media (max-width: 420px) {
    display: none;
  }
`;

const Media = styled.div`
  display: flex;
  justify-content: center;
`;

const Icons = styled.a`
  padding: 5px;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.3);
    color: #f51111;
  }
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <MdRestaurantMenu size={30} />
        </Logo>
        <Email> Kunnatenshi4@gmail.com </Email>
        <Media>
          <Icons
            href="https://www.instagram.com/kunnatenshiteppan2021"
            target="_blank"
          >
            <FiInstagram size={20} />
          </Icons>
          <Icons
            href="https://www.facebook.com/kunnatenshiteppan2021-110651691448563"
            target="_blank"
          >
            <FaFacebookSquare size={20} />
          </Icons>
        </Media>
      </Wrapper>
    </Container>
  );
}

export default Footer;
