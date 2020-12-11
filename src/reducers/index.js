import { combineReducers } from "redux";
import allTodoReducer from './allTodoReducer';
import getUserReducer from './getUserReducer';
export default combineReducers({
    todos: allTodoReducer,
    user: getUserReducer
});