import styled from "styled-components";
import { HomeButton } from "./HomeButton";
import {mobile, HorizontalView} from '../responsive'
import { NavLink as Link } from "react-router-dom";
import LandingImage from './Images/LandingPage.png'




const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: red;
    background-image: url("https://images.unsplash.com/photo-1550093502-905c0742b453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    background-size: cover;
    display: flex;
    flex-direction: column;
`

const Description = styled.div`
width: 100%;
height: 30%;
padding-top: 50%;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-evenly;
text-shadow: 3px 3px 4px black;
text-align: center;
${HorizontalView({paddingTop:"15%"})};
${mobile({paddingTop:"20%"})};



.HomeLink{
    color: #f51111;
    text-decoration: none;
    text-shadow: 2px 2px 4px black;

}

.HomeLink:hover{
    color: #e60000;
    text-decoration: none;
    
}
 h2{
     color: #fcfcfc;
     text-align: center;
     text-shadow: 2px 3px 3px black;
     font-family: 'Rubik Mono One', sans-serif;
     
     ${mobile({fontSize:"70px"})};

 }
    
p{
    color: #bfbfbf;
    width: 40%;
    position: relative;
    text-align: center; 
    left: 30%;
    font-size: 13px;
    text-shadow: 2px 3px 3px rgb(8,8,8,8,);
    ${mobile({fontSize:"15px"})};
}
`
const Introduction = () => {
    return (
        <Container>
            <Description>
                <h2>KUN'NA TENSHI TEPPAN</h2>
   
                <p> Lorem ipsum dolor sit amet consectetur adipisiaperiam praesentium? Deleniti volup</p>
                <Link className="HomeLink" to="/menu">VIEW OUR MENU</Link>

                <img></img>
            </Description>
           
            
        </Container>
    )
}

export default Introduction
