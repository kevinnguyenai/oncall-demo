/* eslint-disable no-use-before-define */
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { DialpadReducer } from '../../../reducers/DialpadReducer';
import {
    accountRegister,
    resetRegisError,
    accountUnRegister
} from '../../../actions/DialpadAction';
import { DialpadRegister } from './DialpadRegister';


export const store = createStore(DialpadReducer, applyMiddleware(thunkMiddleware));
const ReduxDialpad = connect(mapStateToProps, mapDispatchToProps)(DialpadRegister);


export class DialpadItem extends React.Component {
    static displayName = "oncall dialpad"; 

    componentDidMount() {
        //
    }

    render() {
        return (
            <Provider store={store}>
                <ReduxDialpad />
            </Provider>
        );
    }
}

export default DialpadItem;



function mapStateToProps(state) {
    return{
        sdk: state.sdk,
        error: state.error,
        regisErrors: state.regisErrors,
        regisStatus: state.regisStatus,
        rstatus: state.rstatus,
        account: state.account
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (account, rstatus) => {
            if(rstatus==="REGISTER") {
                dispatch(accountRegister(account));
            } 
            else
            {
                dispatch(accountUnRegister());
            }
        },
        onInputUpdate: (regisErr) => {
            dispatch(resetRegisError(regisErr));
        }
    }
}