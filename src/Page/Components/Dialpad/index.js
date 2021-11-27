import React from 'react';
import thunkMiddleware from 'redux-thunk';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import { DialpadReducer } from '../../../reducers/DialpadReducer';
import { accountRegister } from '../../../actions/DialpadAction';

const Dialpad = require('./Dialpad');

const store = createStore(DialpadReducer, applyMiddleware(thunkMiddleware));
const ReduxDialpad = connect(mapStateToProps, mapDispatchToProps)(Dialpad);


export class DialpadItem extends React.Component {
    static displayName = "oncall dialpad";

    componentDidMount() {
        // init sdk  -> default init with store
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
        fields: state.account
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: account => {
            dispatch(accountRegister(account));
        }
    }
}