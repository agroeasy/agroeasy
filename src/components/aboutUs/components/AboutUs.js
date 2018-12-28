import React from 'react';
import { Card, Layout } from 'antd';

import Navibar from '../../home/components/Navibar';
import {  FOOTER_DATA, FOOTER_CLASSNAMES } from './constants';

const { Header, Content } = Layout;
const { CONTAINER, DYNAMIC_FOOTER, ROW } = FOOTER_CLASSNAMES;
const { Meta } = Card;

const footers = FOOTER_DATA.map(footer => (
    // eslint-disable-next-line react/jsx-key
    <div className={DYNAMIC_FOOTER} key={footer.key}>
        <h3>{footer.header}</h3>
        {
            footer.items.map(item => (
                <Card
                    key={item.title}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="http" />}
                >
                    <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                    />
                </Card>
            ))
        }
    </div>
));

export default class AboutUs extends React.Component {
    render() {
        return (
            <Layout>
                <Header> <Navibar /></Header>
                <Layout>
                    <Content>
                        <div style={{ border: '1px solid black', left: '25%', position: 'absolute', textAlign: 'center', top: '10%', width: '50%' }}> 
                            <h3>who is Agroeasy</h3>
                            <p style={{ textAlign: "center" }}>At Agroeasy,<br /> we all come to work everyday because we want to</p>
                        </div>
                        <div className="about-us">
                            <p className="text"> At agroeasy, our aim is to serve you better </p>
                        </div>
                        <div className={CONTAINER}>{footers}</div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
