import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`

    width:100%;
    background-color:rgb(24, 23, 23);
    ${mobile({ height: "100vh" })}   

    height: 70vh;
    display: flex;
`;

const Left = styled.div`
    width: 60%;
    height: 100%;
    background-color: blue;
    display: flex;
    flex-direction: column;


    ${mobile({flexDirection: "row"})};
`

const Right = styled.div`
    width: 40%;
    height: 100%;
    background-color: #ff7b00;
`

const Title = styled.div`
    width: 100%;
    height: 50%;
    background-color: green;
    ${mobile({width: "50%", height: "100%"})};

`

const Subtext = styled.div`
width: 100%;
height: 50%;
background-color: green;
${mobile({width: "50%", height: "100%"})};

`



const Sections = (props) => {

    var url = props.url
    var png = props.png
    return (
        <Container>
            <Left>
                <Title>
                    <h2>Title</h2>
                </Title>

                <Subtext>
                    subtext
                </Subtext>
            </Left>
            <Right>
                image
            </Right>
        </Container>
    )
}

export default Sections
