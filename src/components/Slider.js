import React from 'react';

function Slider () {
    return (
        <div class="simple-slider">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style={{backgroundImage: "url(assets/img/slider1.jpg)"}}></div>
                <div class="swiper-slide" style={{backgroundImage: "url(assets/img/slider2.jpg)"}}></div>
                <div class="swiper-slide" style={{backgroundImage: "url(assets/img/slider3.jpg)"}}></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
    )
}

export default Slider;