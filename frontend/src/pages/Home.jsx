import React from 'react'
import Navbar from '../components/Navbar'
import Sections from '../components/Sections'
import Quote from '../components/Quote'
import Introduction from '../components/Introduction'
import styled from "styled-components";




const Break = styled.div`
width: 100%;
height: 10vh;
background-color:rgb(12, 12, 12);;

`
const Home = () => {
    return (
        <div>
            <Introduction/>
            
            <Sections direction="row" title="PRIVATE CHEF" subtext="lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx " url="https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">

            </Sections>

            <Sections direction="row-reverse" title="WAITERS" subtext="lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx" url="https://media.istockphoto.com/photos/who-ordered-this-main-picture-id1198049220?k=20&m=1198049220&s=612x612&w=0&h=YTMTMVqJIywVZ_KXraiyOsS8f2sQpJNJ8RY_DHUiIew=">

            </Sections>

            <Sections direction="row" title="FIRE SHOW" subtext="lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx lorem ndnm lorem ndnmnnssmn wjndnx wjndknx jndknx snxknksnx jnx lorem ndnm " url="https://thumbs.dreamstime.com/b/cooking-show-cook-prepares-food-frying-pan-fire-chef-restaurant-selective-focus-175094393.jpg">

            </Sections>

            <Quote/>

            <Break/>
           

        
        </div>
    )
}

export default Home
