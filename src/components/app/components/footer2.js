import React, { Component } from "react";
import './styles.css';
import { FOOTER_STRING } from '../constants';

class Footer2 extends Component {
    render() {
        return (
            <div className="footer2">
                <h4>{FOOTER_STRING}</h4>
            </div>
        );
    }
}

export default Footer2; 

