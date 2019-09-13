import React from 'react';
import { Icon } from 'antd';
import Faker from 'faker';
import { LERAN_MORE_DATA } from '../constants';

const body = Faker.lorem.paragraphs(5);

const learnMore = LERAN_MORE_DATA.map(({ key, image, header }) => (
    <div className="body" key={key}>
        <div className="image">
            <Icon className="icon" type={image} />
        </div>
        <div className="text">
            <h1>{header}</h1>
            <h3>{body}</h3>
        </div>
    </div>
));

class LearnMore extends React.Component {
    render() {
        return (
            <div>
                <div className="header" />
                {learnMore}
            </div>
        );
    }
}

export default LearnMore;
