/* eslint-disable no-use-before-define */
import {
    REGISTERING,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/DialpadAction';
import ONCALLSDK from '../utils/oncall-adapter'

const initialstate = {
    sdk: ONCALLSDK.init(),
    regisStatus: "REGISTER_FAIL",
    account: {
        username: '',
        password: '',
        domain: '',
        url: ''
    }
}

export function DialpadReducer (state = initialstate, action) {
    switch (action.type) {
        case  REGISTERING:
            return Object.assign({}, state, {
                regisStatus: 'REGISTERING'
            });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                regisStatus: "REGISTED"
            });
        case REGISTER_FAIL:
            return Object.assign({}, state, {
                regisStatus: "UNREGISTERD"
            });
        default: return state;
    }
}