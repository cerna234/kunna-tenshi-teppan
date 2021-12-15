import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: black;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`;
const Left1 = styled.div`
    flex: 1;
`;
const Left2 = styled.div`
    flex: 1;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
    color: maroon;
`;
const Right1 = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const Right2 = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Home = styled.div`
    font-weight: bold;
    
`

const About = styled.div`
    font-weight: bold;
   
`
const Menu = styled.div`
    font-weight: bold;
   
`
const Booking = styled.div`
    font-weight: bold;
   
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left1>
                    <Home>Home</Home>
                </Left1>
                <Left2>
                    <About>About</About>
                </Left2>
                <Center>
                    <Logo>KunnaTenshiTeppan</Logo>
                </Center>
                <Right1>
                    <Menu>Menu</Menu>
                </Right1>
                <Right2>
                    <Booking>Booking</Booking>
                </Right2>
            </Wrapper>
            
        </Container>
    )
}

export default Navbar
