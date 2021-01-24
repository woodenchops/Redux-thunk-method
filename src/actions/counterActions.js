import * as actionType from './actionTypes';


export const increment = (num) => dispatch => {
    dispatch({
        type: actionType.INCREMENT,
        payload: num
    })
  };

  export const decrement = () => dispatch => {
    dispatch({
        type: actionType.DECREMENT
    })
  };