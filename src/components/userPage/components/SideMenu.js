import React from 'react';
import { Menu, Icon } from 'antd';

import { SIDE_MENU_ITEMS, USER_PAGE } from './constants';

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
            >   
                {
                    SIDE_MENU_ITEMS.map(sideMenuItem => (
                        <Menu.Item key={sideMenuItem.label}>
                            <span><Icon type={sideMenuItem.iconType} />{sideMenuItem.label}</span>
                        </Menu.Item>
                    ))
                }
            </Menu>
        );
    }
}
