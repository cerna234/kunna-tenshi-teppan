import React from 'react'
import styled from 'styled-components'
import {FiInstagram} from 'react-icons/fi'
import {FaFacebookSquare} from 'react-icons/fa'

const Container = styled.div`
    background-color: #090909;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6vh;
    color: white;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-direction: center;
`;

const Logo = styled.div`
`;

const Left = styled.div`
`;

const Info = styled.div`
    display: flex;
`;

const Center = styled.div`

`;

const Media = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;

const Right = styled.div`
    padding: 2px;
`;


function Footer() {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Left>Logo</Left>
                </Logo>
                <Info>
                    <Center></Center>
                </Info>
                <Media>
                    <Right><FiInstagram/></Right>
                    <Right><FaFacebookSquare/></Right>
                </Media>
            </Wrapper>
        </Container>
    )
}

export default Footer
