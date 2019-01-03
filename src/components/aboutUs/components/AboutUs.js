import React from 'react';
import { Carousel } from 'antd';

import { ABOUT_US, IMAGE_STYLE, MARKET_SCENES } from '../constants';
import TeamProfile from './TeamProfile';

const { 
    CLASSNAMES: { CONTENT, TOP_CARD, TOP_DIV, TOP_TEXT },
    STRINGS: { FADE },
    TEXTS: { TOPMOST_TEXT }, 
} = ABOUT_US;
const { WIDTH } = IMAGE_STYLE;

class AboutUs extends React.Component {
    render() {
        return (
            <div className={CONTENT}>
                <div className={TOP_DIV}>
                    <p className={TOP_CARD}>
                        <h4 className={TOP_TEXT}>{TOPMOST_TEXT}</h4>
                    </p>
                </div>
                <Carousel autoplay effect={FADE}>
                    {
                        MARKET_SCENES.map(market_scene => (               
                            <img src={market_scene} width={WIDTH} key={market_scene} />     
                        ))
                    }
                </Carousel>
                <TeamProfile />
            </div>
        );
    }
}

export default AboutUs;
