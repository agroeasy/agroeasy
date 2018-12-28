import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PracticeApp extends React.Component {
    render() {
        return(
            <div style={{ color: 'white', left: '150px', position: 'relative', width: '300px' }}>
                <h3>This is my profile</h3>
                <div>
                    <p> Name: {this.props. name}</p>
                    <p> Gender: {this.props.gender}</p>
                    <p>Email: {this.props.email}</p>
                    <p>Phone: {this.props.phone}</p>
                    <Button onClick={this.props.nextPerson}>Next</Button>
                    <Button onClick={this.props.previousPerson}>Back</Button>
                  
                </div>
            </div>
        );
    }
}

PracticeApp.propTypes = {
    email: PropTypes.string,
    gender: PropTypes.gender,
    name: PropTypes.string,
    nextPerson: PropTypes.func,
    phone: PropTypes.number,
    previousPerson: PropTypes.func,
};

function mapStateToProps(state){
    return {
        email: state.email,
        gender:state.gender,
        name: state.name,
        phone: state.phone,  
    };
}

function mapDispatchToProps(dispatch){
    return {
        nextPerson: () => dispatch({
            type: 'NEXT_PERSON',
        }),
        previousPerson: () => dispatch({
            type: 'PREVIOUS_PERSON',
        }),
    };
} 

export default connect(mapStateToProps,mapDispatchToProps)(PracticeApp);
 
