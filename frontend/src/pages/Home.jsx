import React from 'react'
import Navbar from '../components/Navbar'
import Sections from '../components/Sections'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Sections label="row-reverse" title="HELLPO" subtext="subtext">

            </Sections>

            <Sections label="row" title="HELLPO" subtext="subtext">

            </Sections>

            <Sections label="row" title="HELLPO" subtext="subtext">

            </Sections>
        </div>
    )
}

export default Home
