import React from 'react';

import { BANNER2_TEXTS } from '../constants';

const { BEST_PRICE, GUARANTEE, SECOND_TEXT, THIRD_TEXT_1, THIRD_TEXT_2 } = BANNER2_TEXTS;

class Banner2 extends React.Component {
    render() {
        return (
            <div className="banner2-container">
                <div>
                    <h1>
                        {BEST_PRICE} <span>{GUARANTEE}</span>
                    </h1>
                    <h5>{SECOND_TEXT}</h5>
                    <h6>
                        {THIRD_TEXT_1} <br />
                        {THIRD_TEXT_2}
                    </h6>
                </div>
            </div>
        );
    }
}

export default Banner2;
