/* eslint-disable no-use-before-define */
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { DialpadReducer } from '../../../reducers/DialpadReducer';
import { accountRegister, accountInitSdk } from '../../../actions/DialpadAction';
import { Dialpad } from './Dialpad';


const store = createStore(DialpadReducer, applyMiddleware(thunkMiddleware));
const ReduxDialpad = connect(mapStateToProps, mapDispatchToProps)(Dialpad);


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
        regisStatus: state.regisStatus,
        account: state.account
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (account) => {
            dispatch(accountRegister(account));
        }
    }
}