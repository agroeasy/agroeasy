import React from 'react';
import { Menu, Icon, Tooltip } from 'antd';

import { AppLink } from '../../app/components';
import { SIDE_MENU_ITEMS, USER_PAGE } from '../constants';

const {
    CLASSNAMES: { MENU },
    STRINGS: { COMING_SOON, DARK, INLINE },
} = USER_PAGE;

export default class SideMenu extends React.Component {
    render() {
        return (
            <Menu className={MENU} theme={DARK} mode={INLINE} selectedKeys={[location.pathname]}>
                {SIDE_MENU_ITEMS.map(({ iconType, label, link }) => (
                    <Menu.Item key={link || label}>
                        {link ? (
                            <AppLink to={link}>
                                <span>
                                    <Icon type={iconType} />
                                    {label}
                                </span>
                            </AppLink>
                        ) : (
                            <Tooltip title={COMING_SOON}>
                                <span>
                                    <Icon type={iconType} />
                                    {label}
                                </span>
                            </Tooltip>
                        )}
                    </Menu.Item>
                ))}
            </Menu>
        );
    }
}
