import * as types from "../constants/ActionTypes";

var initialState = '';

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FILTER_ITEM:
            return action.value;
            
        default: 
            return state;
    }
}

export default myReducer;