import React from 'react'
import styled from 'styled-components'
import {mobile,HorizontalView} from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:rgb(12, 12, 12);
    display: flex;
    flex-direction: column;
    ${mobile({ flexDirection: "row" })} ;
    ${HorizontalView({height:"300vh"})};
    
    
`

const ImageSection = styled.div`
    width: 100%;
    height: 50%;
    ${mobile({width:"100%",height:"100%", left:"0%" })} ;

`

const InfoSection = styled.div`
    width: 100%;
    height: 50%;
    text-align: center;
    position: relative;
    top:10vh;
    h3{
        position: absolute;
        width: 100%;
        font-size: 60px;
        color: #6d6d6d1f;
        z-index: 1;
        ${mobile({fontSize:"80px"})} ;
        ${mobile({paddingTop:"20%"})}

        
    }

    h2{
        color: red;
        z-index: 2;
        position: relative;
        top: 30px;
        ${mobile({paddingTop:"20%"})}
        ${mobile({top:"37px"})}
    }

    p{
        color: #999696;
        position: relative;
        width: 80%;
        left: 10%;
        padding-top: 10%;
        ${mobile({paddingTop:"20%"})}
        
        
        
    }
    

`

const ImageContainer = styled.div`
    width: 90%;
    height: 90%;
    left: 5%;
    position: relative;
    ${mobile({width:"100%",height:"100%", left:"0%" })} ;
    background-color: blue;
   
    background-image: url("https://dempirecuisine.com/wp-content/uploads/2020/07/chef.jpg");
    background-size: cover;
    
`



const About = () => {
    return (
        <Container>

            <InfoSection>
                <h3>ABOUT US</h3>
                <h2>ABOUT US</h2>
                <br/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati unde et ea quasi asperiores fugit maxime accusamus laborum animi, dolorum earum, possimus, minima commodi assumenda harum repellendus quos! Vero.</p>
            </InfoSection>
            <ImageSection>
                <ImageContainer>

                </ImageContainer>
            </ImageSection>

            
            
        </Container>
    )
}

export default About
