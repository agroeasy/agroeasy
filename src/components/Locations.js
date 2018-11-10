import React from 'react';
import {Link} from 'react-router-dom';
import {strings} from './productsAvailable/constants';

const Places = [ {name: 'Imo', link: '/imo/'}, {name: 'Ogun', link: '/ogun/'}, {name: "Niger (Bida, Gurara)", link: '/niger/'},
                {name: 'Eboyin', link: '/eboyin/'}, {name: 'Kaduna (Zaria)', link: '/zaria/'}, {name: 'Lagos', link: '/lagos/'},
                {name: "Ondo (ore)", link: '/ore/'}, {name: "Delta", link: '/delta/'}, {name: 'Ogun (Agbara)', link: '/agbara/'} ];
export default class ProductLocations extends React.Component {
  render() {
    return (
      <div>
         <div>
            <ul>
               <h6><u>Find Goods Near You</u></h6>
               {
                Places.map(row => (<li key={row.name}><Link to={row.link} className={strings.className2}>
                  {row.name}</Link></li>))
               }
            </ul>
        </div>
      </div>
    );
  }
}
