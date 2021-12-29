import React, { useState } from "react";
import styled from "styled-components";
import MenuData from "../Data/MenuData";
import {
  ArrowLeftRounded,
  ArrowRightRounded,
} from "@material-ui/icons";

const ItemContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  bakground: black;
`;

const MenuImage = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
  background-size: cover;
  box-shadow: 4px 4px 2px;
`;

const MenuItems = styled.div`
  display: flex;
  height: 50vh;
  background-color: rgb(12, 12, 12);
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
  color: white;

  .desciption {
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
  color: white;
  font-size: 2rem;
  font-weight: 700;
  background-color: black;
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
`;

const Page = styled.div`
  color: #e33812;
`;

const MenuItem = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState(0);
  const pageLimit = Math.ceil(MenuData.length/4);

  if (MenuData === 0) {
    return null;
  }

  const nextPage = () => {
    if (currentPage !== pageLimit) {
      // setCurrentPage(1);
      // setItems(0);
      setCurrentPage(currentPage + 1);
      setItems(items + 4);
    }
    // } else {
    //   setCurrentPage(currentPage + 1);
    //   setItems(items + 4);
    // }
  };

  const Blank = styled.div`
    margin: 0.8rem;
  `;

  const prevPage = () => {
    if (currentPage !== 1) {
      // setCurrentPage(pageLimit);
      // setItems(MenuData.length - 5);
      setCurrentPage(currentPage - 1);
      setItems(items - 4);
    }
    // else {
    //   setCurrentPage(currentPage - 1);
    //   setItems(items - 4);
    // }
  };

  console.log(currentPage);

  return (
    <ItemContainer>
      {MenuData.slice(items, items + 4).map((obj, index) => {
        return (
          <MenuItems key={obj.id}>
            <div>
              <MenuImage
                style={{ backgroundImage: "url(" + obj.img + ")" }}
              ></MenuImage>
            </div>

            <Title>
              {obj.name}
              <br />
              <span className="desciption">{obj.description}</span>
            </Title>

            <Price>${obj.price}</Price>
          </MenuItems>
        );
      })}
      <PageInfo>
        <Arrow>
          {currentPage === 1 ? (
            <Blank />
          ) : (
            <ArrowLeftRounded onClick={prevPage} />
          )}
        </Arrow>
        <Page>{currentPage}</Page>
        <Arrow>
          {currentPage === pageLimit ? (
            <Blank />
          ) : (
            <ArrowRightRounded onClick={nextPage} />
          )}
        </Arrow>
      </PageInfo>
    </ItemContainer>
  );
};

export default MenuItem;
