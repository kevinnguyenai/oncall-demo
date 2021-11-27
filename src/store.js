/* eslint-disable no-use-before-define */
import { createStore } from "redux";
import rotateReducer from "reducers/rotateReducer";
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
  return createStore(rotateReducer,state);
}
export default configureStore;