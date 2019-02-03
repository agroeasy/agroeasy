import React from 'react';
import { Menu, Icon } from 'antd';

import { AppLink } from '../../app/components';
import { DEFAULT_SELECTED, SIDE_MENU_ITEMS, USER_PAGE } from '../constants';

const {
    CLASSNAMES: { MENU },
    STRINGS: { DARK, INLINE },
} = USER_PAGE;

export default class SideMenu extends React.Component {
    render() {
        return(
            <Menu
                className={MENU}
                theme={DARK}
                mode={INLINE}
                defaultSelectedKeys={[location.pathname]}
            >
                {
                    SIDE_MENU_ITEMS.map(({ iconType, label, link }) => (
                        <Menu.Item key={link || label}>
                            {
                                link ?
                                    <AppLink to={link}>
                                        <span><Icon type={iconType} />{label}</span>
                                    </AppLink> :
                                    <span><Icon type={iconType} />{label}</span>
                            }
                        </Menu.Item>
                    ))
                }
            </Menu>
        );
    }
}
