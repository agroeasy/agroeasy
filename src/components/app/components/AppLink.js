import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const AppLink = ({ to, children }) => <NavLink to={to}>{children}</NavLink>;

AppLink.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    to: PropTypes.string.isRequired,
};

export default AppLink;
