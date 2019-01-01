import React from 'react';
import { Menu, Icon } from 'antd';

import UserLink from './UserLink';
import { SIDE_MENU_ITEMS, USER_PAGE } from '../constants';

const {
    CLASSNAMES: { MENU },
    STRINGS: { 
        DARK,
        INLINE,
    },
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
                    SIDE_MENU_ITEMS.map(({ path, iconType, label }) => (

                        <Menu.Item key={path}>
                            <span>
                                <Icon type={iconType} />
                                <UserLink key={path} to={path}>{label}</UserLink>
                            </span>
                        </Menu.Item>
                    )
                    )
                }
            </Menu>
        );
    }
}
