import * as actionType from './actionTypes';


export const loginAction = () => dispatch => {
    dispatch({
        type: actionType.LOGIN
    })
  };