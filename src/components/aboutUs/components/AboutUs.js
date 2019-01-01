import React from 'react';
import { Card, Carousel } from 'antd';

import { ABOUT_US, IMAGE_STYLE, MARKET_SCENES } from './constants';
import TeamProfile from './TeamProfile';

const { 
    CLASSNAMES: { CONTENT, TEAM_HEADER,  TOP_DIV, TOP_TEXT },
    STRINGS: { },
    TEXTS: { HEADER_TEXT, TOPMOST_TEXT }, 
} = ABOUT_US;
const { width } = IMAGE_STYLE;

class AboutUs extends React.Component {
    render() {
        return (
            <div className={CONTENT}>
                <div className={TOP_DIV}>
                    <Card bordered={false} className="top-card">
                        <p className={TOP_TEXT}>{TOPMOST_TEXT}</p>
                    </Card>
                </div>
                <div>
                    <Carousel autoplay effect="fade">
                        {
                            MARKET_SCENES.map(market_scene => (
                                <div key={market_scene}>
                                    <img src={market_scene} width={width} />
                                </div>
                            ))
                        }
                        
                    </Carousel>
                </div>
                <div>
                    <h1 className={TEAM_HEADER}><u>{HEADER_TEXT}</u></h1>
                    <TeamProfile />
                </div>
            </div>
        );
    }
}

export default AboutUs;
