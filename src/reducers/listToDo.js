import * as types from "../constants/ActionTypes";

var initialState = [];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_LIST:
            state = action.list;
            return state;
            
        default: 
            return state;
    }
}

export default myReducer;