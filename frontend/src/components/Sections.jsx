import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30vh;
    width:100%;
    background-color: Red;
    display:flex;
   
`;

const Text = styled.div`
    height:100%;
    width:50%;
    background-color:blue;
    text-align:center;

`

const ImageSection = styled.div`
    height:100%;
    width:50%;
    background-color:purple;

    img{
        width:200px;
        height:200px
        
    }

`


const Sections = (props) => {

    let url = `${props.url}`;
    
    return (
        <Container style={{flexDirection: `${props.label}`}} >
           <Text>
               <h2>{props.title}</h2>
               <p>{props.subtext}</p>
           </Text>

           <ImageSection>
               <img src={url}></img>
           </ImageSection>
            
        </Container>
    )
}

export default Sections
