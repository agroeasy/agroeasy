import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { strings } from './productsAvailable/constants';
import { PLACES } from './constants';

class ProductLocations extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <h6><u>Find Goods Near You</u></h6>
                    {
                        PLACES.map(row =>
                            <li key={row.name}>
                                <Link to={row.link} className={strings.className2}>
                                    {row.name}
                                </Link>
                            </li>
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