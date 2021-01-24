import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement} from '../actions/counterActions';

const Counter = ({counter, increment, decrement}) => {
    return ( 
        <>
            <span>{counter}</span><br></br>
            <button onClick={() => increment(5)}>ADD</button>
            <button onClick={() => decrement()}>SUBTRACT</button>
        </>
     );
}


Counter.propTypes = {
 increment: PropTypes.func.isRequired,
 decrement: PropTypes.func.isRequired,
 counter: PropTypes.number
};

const mapStateToProps = state => ({
  counter: state.counter
});

/*

connect(state, {actions})(component)

you map the state and actions to props. 

*/

export default connect(mapStateToProps, {increment, decrement})(Counter);