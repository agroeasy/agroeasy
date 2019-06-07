import React, { Component } from 'react';
import './styles.css';
import { FOOTER_STRING, FOOTER_CLASSNAMES } from '../constants';

const { FOOTER2 } = FOOTER_CLASSNAMES;

class Footer2 extends Component {
    render() {
        return (
            <div className={FOOTER2}>
                <h4>{FOOTER_STRING}</h4>
            </div>
        );
    }
}

export default Footer2;
