import React from 'react';
import { Carousel } from 'antd';
import { CAROUSEL_DATA } from '../constants';

//this is the carousel component
class CarouselImages extends React.Component {
    render() {
        return (
            <Carousel effect="fade" autoplay>
                {CAROUSEL_DATA.map((data, index) => (
                    <div key={index}>
                        <img src={data.src} />
                        <div className="carousel-text">
                            <h3>{data.text}</h3>
                        </div>
                    </div>
                ))}
            </Carousel>
        );
    }
}

export default CarouselImages;
