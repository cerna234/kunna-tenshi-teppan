import React, { useState } from "react";
import styled from "styled-components";
import MenuData from "../Data/MenuData";
import { ArrowLeftRounded, ArrowRightRounded } from "@material-ui/icons";

const ItemContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 130vh;
`;


const MenuImage = styled.div`
    background-color: red;
    width: 200px;
    height: 200px;
    background-size: cover ;
    box-shadow: 4px 4px 2px ;
`

const MenuItems = styled.div`
  display: flex;
  height: 50vh;
  background-color:rgb(12, 12, 12);
  border: solid 1px black;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled.h3`
  color: black;
  padding: 10px;
  text-align: center;
  color:white;

  .desciption{
    color: #8c8b8b;
    font-size: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Price = styled.p`
  color: #bfbbbb;
  font-weight: 400;
  
`;

const PageInfo = styled.p`
  display: flex;
  align-items: center;
  padding: 2px;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  right: 50%;
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  
`;

const Page = styled.div`
  color: maroon;
`

const MenuItem = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = MenuData.length / 4;

  if (MenuData === 0) {
    return null;
  }

  const nextPage = () => {
    if (currentPage === pageLimit) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(pageLimit);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log(currentPage);

  return (
    <ItemContainer>
      <PageInfo>
        <Arrow>
          <ArrowLeftRounded onClick={prevPage} />
        </Arrow>
        <Page>{currentPage}</Page>
        <Arrow>
          <ArrowRightRounded onClick={nextPage} />
        </Arrow>
      </PageInfo>

      {MenuData.slice(currentPage - 1, currentPage + 3).map((obj, index) => {
        return (
          <MenuItems key={obj.id}>
            <div>
            <MenuImage style={{backgroundImage: "url(" + obj.img + ")"}}></MenuImage>
            </div>
            
            <Title>{obj.name}<br/><span className="desciption">{obj.description}</span></Title>
            
            <Price>${obj.price}</Price>
          </MenuItems>
        );
      })}
    </ItemContainer>
  );
};

export default MenuItem;
