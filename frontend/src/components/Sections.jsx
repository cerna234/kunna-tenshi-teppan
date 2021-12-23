import React from 'react'
import styled from 'styled-components'
import {mobile,mobile1000,mobile1400} from '../responsive'

const Container = styled.div`

    width:100%;
    background-color:rgb(12, 12, 12);
    ${mobile({ height: "100vh" })}   
    
    height: 60vh;
    display: flex;


    #hello{
        background-color: red;
    }
    
    
    
`;

const Left = styled.div`
    width: 50%;
    height: 100%;
 
    display: flex;
    flex-direction: column;
   
    

    ${mobile({flexDirection: "row"})};
    ${mobile({width: "60%"})};
`

const Right = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${mobile({width: "40%"})};

    
   
`

const Title = styled.div`
    width: 100%;
    height: 50%;
   
    ${mobile({width: "50%", height: "100%"})};

    h2{
        font-size: 12px;
        text-align: center;
        padding-top: 19vh;
        color: #ff0000d7;
        ${mobile({fontSize:"23px"})};
        ${mobile({paddingTop:"22vh"})};
        ${mobile1000({paddingTop:"20.5vh"})};
        
        
        
    }
    h3{
        font-size: 20px;
        text-align: center;
       position: relative;
       top: 22.5vh;
        color: #6b6a6a13;
        ${mobile({fontSize:"30px",top:"27vh"})};
        ${mobile1000({fontSize:"50px",top:"27vh"})};
        
    }

`

const Subtext = styled.div`
width: 100%;
height: 50%;

${mobile({width: "50%", height: "100%"})};

p{
    font-size: 10px;
    text-align: center;
    color: #ffffffae;
    ${mobile({paddingTop: "25vh"})};
    ${mobile({fontSize:"20px"})};
}

`


const ImageSection = styled.div`
    width: 90%;
    height: 60%;
    position: relative;
    left: 5%;
    background-color: red;
    background-size:cover ;
    background-position: right;
    box-shadow: 2px 2px 5px black;
 

`



const Sections = (props) => {

    let url = props.url;
    let direction = props.direction;
   
    return (
        <Container style={{flexDirection: direction}} >
            <Left>
                
                <Title>
                    <h3>{props.title}</h3>
                    <h2>{props.title}</h2>
                </Title>

                <Subtext>
                    <p>{props.subtext}</p>
                </Subtext>
            </Left>
            <Right>
               <ImageSection style={{backgroundImage: "url(" + url + ")"}}>

               </ImageSection>
            </Right>
        </Container>
    )
}

export default Sections
