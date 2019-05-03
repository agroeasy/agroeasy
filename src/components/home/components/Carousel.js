import React from 'react';
import { Carousel } from 'antd';
import { CAROUSEL_DATA } from '../constants';

//this is the carousel component
class CarouselImages extends React.Component {
    render() {
        return (
            <Carousel effect="fade">
                <div>
                    <img src={CAROUSEL_DATA.CAROUSEL_IMAGE_1} />
                    <div className={CAROUSEL_DATA.CLASS_NAME}>
                        <h3>{CAROUSEL_DATA.CAROUSEL_TEXT_1}</h3>
                    </div>
                </div>
                <div>
                    <img src={CAROUSEL_DATA.CAROUSEL_IMAGE_2} />
                    <div className={CAROUSEL_DATA.CLASS_NAME}>
                        <h3>{CAROUSEL_DATA.CAROUSEL_TEXT_2}</h3>
                    </div>
                </div>
                <div>
                    <img src={CAROUSEL_DATA.CAROUSEL_IMAGE_3} />
                    <div className={CAROUSEL_DATA.CLASS_NAME}>
                        <h3>{CAROUSEL_DATA.CAROUSEL_TEXT_3}</h3>
                    </div>
                </div>
            </Carousel>
        );
    }
}

export default CarouselImages;
