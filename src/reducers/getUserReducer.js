import { GET_USER,GET_ERROR} from "./../actions/types";
const initialState = {
  user: {},
  error:''
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
      case GET_ERROR:
      return{
        ...state,
        error:action.payload
      }
    default:
      return state;
  }
}