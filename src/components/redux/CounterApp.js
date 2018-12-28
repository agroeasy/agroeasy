import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ButtonGroup = Button.Group;

class CounterApp extends React.Component {
    render() {
        return(
            <div style={{ backgroundColor: 'black', color: 'white', left:  400, 
                padding: '30px', position: 'relative', textAlign: 'center', width: 400 }}
            >
                <p>Counter: {this.props.counter}</p>
                <p> My name is {this.props.name}</p>
                <ButtonGroup>
                    <Button onClick={this.props.increaseCounter}>Increase</Button>
                    <Button onClick={this.props.decreaseCounter}>Decrease</Button>
                    <Button onClick={this.props.nameChange}>Change Name</Button>
                </ButtonGroup>
            </div>
        );
    }
}
CounterApp.propTypes = {
    counter: PropTypes.number,
    decreaseCounter: PropTypes.func,
    increaseCounter: PropTypes.func,
    name: PropTypes.string,
    nameChange: PropTypes.string,
};

function mapStateToProps(state){
    return {
        counter: state.counter,
        name: state.name,
    };       
}

function mapDispactchToProps(dispatch) {
    return {
        decreaseCounter: () => dispatch({
            type: 'DECREASE_COUNTER',
        }),
        increaseCounter: () => dispatch({
            type: 'INCREASE_COUNTER',
        }),
        nameChange: () => dispatch({
            type: 'NAME_CHANGE',
        }),
    };
}

export default connect(mapStateToProps,mapDispactchToProps)(CounterApp);
