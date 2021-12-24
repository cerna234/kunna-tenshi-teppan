import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {mobile} from '../responsive';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:rgb(12, 12, 12);
    display: flex;
    jusitfy-content: center;
    align-items: center;
    ${mobile({ flexDirection: "row" })} ;
`;

const InfoSection = styled.div`
    width: 80%;
    left: 10%;
    height: 60%;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h2{
        position: relative;
        top: 15vh;
        width: 100%;
        font-size: 60px;
        color: #6d6d6d1f;
        z-index: 1;


        
    }

    h1{
        color: white;
        z-index: 2;
        
    }

    h3{
        color: white;
        z-index: 3;
        
        
    }
`;
const Button = styled.button`
    background-color: #E33812;
    color: white;
    padding: 0.6rem 2rem;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.45);
   
    border: none;
    font-weight: 700;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    &:hover{
      background-color: #ee522f;
      cursor: pointer;
      transform: translateY(-3px);
    }
`;




const ErrorPage = () => {
    return (
        <Container>
            
            <InfoSection>
                <h2>404 PAGE NOT FOUND</h2>
                <h1>404 PAGE NOT FOUND</h1>
                <br/>
                <h3>Hey you look a little lost! But no need to worry. I know a place where we could get tasty food! </h3>
                
                <Link to={'/'}>
                    <Button>
                    Back To Tasty Food
                    </Button>
                </Link>
            </InfoSection>

        </Container>
    )
}

export default ErrorPage
