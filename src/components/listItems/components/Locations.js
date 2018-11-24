import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PLACES, SUPPORT_STRINGS } from './constants';

const { bigDiv, headerText, linkItems } = SUPPORT_STRINGS;
class ProductLocations extends React.Component {
    render() {
        return (
            <div className={bigDiv}>
                <ul>
                    <h6>{headerText}</h6>
                    {
                        PLACES.map(row =>
                            (<li key={row.name}>
                                <Link to={row.link} className={linkItems}>
                                    {row.name}
                                </Link>
                            </li>)
                        )
                    }
                </ul>
            </div>
        );
    }
}

ProductLocations.PropTypes = {
    className: PropTypes.string,
    key: PropTypes.string,
    link: PropTypes.string,
};

export default ProductLocations;
