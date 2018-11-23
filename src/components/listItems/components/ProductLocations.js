import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PLACES, PRODUCTION_LOCATIONS } from './constants';

const { BIG_DIV, HEADER_TEXT, LINK_ITEMS } = PRODUCTION_LOCATIONS;

class ProductLocations extends React.Component {
    render() {
        return (
            <div className={BIG_DIV}>
                <ul>
                    <h6>{HEADER_TEXT}</h6>
                    {
                        PLACES.map(row =>
                            (<li key={row.name}>
                                <Link to={row.link} className={LINK_ITEMS}>
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

ProductLocations.propTypes = {
    className: PropTypes.string,
    key: PropTypes.string,
    link: PropTypes.string,
};

export default ProductLocations;
