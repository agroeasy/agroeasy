import React from 'react';
import PropTypes from 'prop-types';

const NoMatch = ({ location }) => (
    <div>{`No match for URL ${location.pathname}`}</div>
);

NoMatch.propTypes = {
    location: PropTypes.object.isRequired,
};

export default NoMatch;
