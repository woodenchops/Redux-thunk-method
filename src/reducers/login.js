import * as actionType from '../actions/actionTypes';

const loginReducer = (state = false, action) => {
    switch(action.type) {
        case actionType.LOGIN:
            return state = !state;
        default: 
            return state;
        
    };
};

export default loginReducer;