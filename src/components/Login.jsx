import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions/loginAction';

const Login = ({loginAction, loggedIn}) => {
    return ( 
        <>
            <span>{loggedIn ? 'logged in' : 'logged out'}</span><br></br>
            <button onClick={() => loginAction()}>LOG IN</button>
        </>
     );
}


Login.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    loginAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    loggedIn: state.loggedIn
});

/*

connect(state, {actions})(component)

you map the state and actions to props. 

*/

export default connect(mapStateToProps, {loginAction})(Login);