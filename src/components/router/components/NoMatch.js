import React from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';

import history from '../../history/History';

const NoMatch = ({ location }) => (
    message.error(<div> {`No match for URL ${location.pathname}` }</div>, 5) &&
    setTimeout(() => { history.goBack();}, 2000) 
);

NoMatch.propTypes = {
    location: PropTypes.object.isRequired,
};

export default NoMatch;
