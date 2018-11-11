import React from 'react';
import { Link } from 'react-router-dom';
import { strings } from './productsAvailable/constants';

import { PLACES } from './constants';

export default class ProductLocations extends React.Component {
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
