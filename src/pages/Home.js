import React from 'react';
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Map from '../components/Map'
import Footer from '../components/Footer'

function Home () {
    return (
        <div>
            <Slider/>
            <Categories/>
            <Map/>
            <Footer/>
        </div>
    )
}

export default Home;