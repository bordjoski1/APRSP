import React from 'react';

function Map() {
    return (
        <div class="map-clean">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Lokacije </h2>
                <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
            </div>
        </div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d179701.10777040117!2d19.849441!3d45.271451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b106f6b2073d3%3A0x75a418081d9d54a4!2sDanube%20Park!5e0!3m2!1sen!2sus!4v1623173015896!5m2!1sen!2sus" width="100%" height="450" style={{border:"0" }}allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}

export default Map;