import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Button, Icon } from 'antd';

import {
    BANNER_CLASSNAMES,
    BANNER_DATA,
    BANNER_HEADING,
    LEARN_MORE,
    BANNER_LINK,
} from '../constants';

const { BANNER, BANNER_FLEX, BANNER_CARD, BANNER_ICON, BANNER_COLOR } = BANNER_CLASSNAMES;

const banners = BANNER_DATA.map(({ key, icon, header, body }) => (
    <div className={BANNER_CARD} key={key}>
        <div className={BANNER_ICON}>
            <Icon type={icon} />
        </div>
        <h3 className={BANNER_COLOR}>{header}</h3>
        <h5 className="banner_body">{body}</h5>
    </div>
));

class Banner extends Component {
    render() {
        return (
            <div className={BANNER}>
                <h2>{BANNER_HEADING}</h2>
                <div className={BANNER_FLEX}>{banners}</div>
                <Link to={BANNER_LINK}>
                    <Button style={{ backgroundColor: '#106021' }}>{LEARN_MORE}</Button>
                </Link>
            </div>
        );
    }
}

export default Banner;
