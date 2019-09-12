import React from 'react';
import { Link } from 'react-router-dom';
import { PLACES, PRODUCTION_LOCATIONS } from '../constants';

const { BIG_DIV, HEADER_TEXT, LINK_ITEMS } = PRODUCTION_LOCATIONS;
//this component is not used for now
class ProductLocations extends React.Component {
    render() {
        return (
            <div className={BIG_DIV}>
                <ul>
                    <h6>{HEADER_TEXT}</h6>
                    {PLACES.map(row => (
                        <li key={row.name}>
                            <Link to={row.link} className={LINK_ITEMS}>
                                {row.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ProductLocations;
