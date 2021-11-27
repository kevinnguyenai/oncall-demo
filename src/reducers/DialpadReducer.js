/* eslint-disable no-use-before-define */
import {
    REGISTERING,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    INIT_SDK,
    INIT_SDK_SUCCESS,
    INIT_SDK_FAIL
} from '../actions/DialpadAction';

const initialstate = {
    sdk: null,
    regisStatus: "UNCONNECT",
    initStatus: "UNINIT",
    account: {
        username: '104',
        password: '104Abc123',
        domain: 'sdc.dev',
        url: 'wss://118.69.192.86:5065'
    }
}


export function DialpadReducer (state = initialstate, action) {
    switch (action.type) {
        case  REGISTERING:
            return Object.assign({}, state, {
                regisStatus: 'CONNECTING'
            });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                regisStatus: "CONNECTED"
            });
        case REGISTER_FAIL:
            return Object.assign({}, state, {
                regisStatus: "UNCONNECT"
            });
        case INIT_SDK:
            return Object.assign({}, state, {
                initStatus: "UNINIT"
            });
        case INIT_SDK_SUCCESS:
            return Object.assign({}, state, {
                initStatus: "INIT SDK SUCCESSFUL",
                sdk: action.sdk
            });
        case INIT_SDK_FAIL:
            return Object.assign({}, state, {
                initStatus: "INIT SDK FAIL"
            })
        default: return state;
    }
}
