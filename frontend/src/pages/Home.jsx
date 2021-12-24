import React from 'react'
import Navbar from '../components/Navbar'
import Sections from '../components/Sections'
import Quote from '../components/Quote'
import Introduction from '../components/Introduction'
import styled from "styled-components";
import {mobile} from '../responsive'
import LandingImage from '../components/Images/LandingPage.png'




const Break = styled.div`
width: 100%;
height: 10vh;
background-color:rgb(24, 24, 24);


h2{
    text-align: center;
    padding-top: 5vh;
    color: #f2f2f2b0;
    ${mobile({ fontSize: "30px" })}   
}
`
const Home = () => {
    return (
        <div>
            <Introduction/>
            <Break>
            <h2>WHAT WE OFFER</h2>
            </Break>
            
            <Sections direction="row" title="PRIVATE CHEF" subtext="lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx " url={LandingImage}>

            </Sections>

            <Sections direction="row-reverse" title="WAITERS" subtext="lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx" url="https://images.unsplash.com/photo-1588675646184-f5b0b0b0b2de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">

            </Sections>

            <Sections direction="row" title="FIRE SHOW" subtext="lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx lorem ndnm lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx lorem ndnm " url="https://thumbs.dreamstime.com/b/cooking-show-cook-prepares-food-frying-pan-fire-chef-restaurant-selective-focus-175094393.jpg">

            </Sections>

            <Quote/>

            <Break/>
           

        
        </div>
    )
}

export default Home
