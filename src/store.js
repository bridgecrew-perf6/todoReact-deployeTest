import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import { sessionService } from 'redux-react-session';


const store = configureStore({});

function configureStore(initialState) {

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

sessionService.initSessionService(store);

export default store;



// const initialState = {};
// const middleware = [thunk];
// let store;
// if (window.navigator.userAgent.includes("Chrome")) {
//   store = createStore(
//     rootReducer,
//     compose(
//       applyMiddleware(...middleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
// } else {
//   store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
// }
// export default store;
