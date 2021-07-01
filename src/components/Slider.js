import React from 'react';

function Slider () {
    return (
        <div className="simple-slider">
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide" style={{backgroundImage: "url(assets/img/slider1.jpg)"}}></div>
                <div className="swiper-slide" style={{backgroundImage: "url(assets/img/slider2.jpg)"}}></div>
                <div className="swiper-slide" style={{backgroundImage: "url(assets/img/slider3.jpg)"}}></div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    </div>
    )
}

export default Slider;