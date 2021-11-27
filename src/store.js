/* eslint-disable no-use-before-define */
import { createStore } from "redux";
import { DialpadReducer } from "./reducers/DialpadReducer";
function configureStore(

    state = { 
        fields: {
            username: '',
            password: '',
            domain: '',
            url: ''
        },
        fieldErrors: {}
    }
    
    ) {
        
  return createStore(
      DialpadReducer,
      state,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
}
export default configureStore;