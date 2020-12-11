import axios from "axios";
import { GET_TODOS ,GET_USER,GET_ERROR} from "./types";

export const getAllTodos = () => async dispatch => {
const res = await axios.get("http://localhost:8080/todos");
  dispatch({
    type: GET_TODOS,
    payload: res.data
  });
};

export const createTodo = todo => async dispatch => {
await axios.post("http://localhost:8080/todos", todo);
};

export const deleteTodo = id => async dispatch => {
  await axios.delete("http://localhost:8080/todos/"+id)
};

export const updateTodo = id => async dispatch =>{
  await axios.put("http://localhost:8080/todos/"+id)
};

export const registerUser = (user,history) => async dispatch =>{
  await axios.post("http://localhost:8080/registerUser", user);
  history.push('/login');
}

export const loginCheck = (user,history) => async dispatch =>{
  try{
 const res= await axios.post("http://localhost:8080/loginCheck", user);
  history.push('/todolist');
  dispatch({
    type: GET_USER,
    payload: res.data
  });
}
catch(error){
  dispatch({
    type: GET_ERROR,
    payload: error.response.data
  });
}}
