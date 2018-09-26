import { combineReducers } from "redux";
import listToDo from "./listToDo";
import filter from "./filter";

const myReducer = combineReducers({
    listToDo,
    filter
});

export default myReducer;