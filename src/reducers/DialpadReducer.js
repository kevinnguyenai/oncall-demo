/* eslint-disable no-use-before-define */
import {
    REGISTERING,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    INIT_SDK,
    INIT_SDK_SUCCESS,
    INIT_SDK_FAIL,
    RESET_REGIS_ERROR,
    UNREGISTERING,
    UNREGISTER_SUCCESSFUL,
    UNREGISTER_FAIL
} from '../actions/DialpadAction';
import * as _ from 'lodash';
const initialstate = {
    sdk: null,
    error: null,
    regisErrors: {},
    regisStatus: "UNCONNECT",
    initStatus: "UNINIT",
    rstatus: "REGISTER",
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
                regisStatus: "CONNECTED",
                rstatus: "UNREGISTER"
            });
        case REGISTER_FAIL:
            {
                let value = {}
                if(_.trim(action.error) === 'Invalid password provided') {
                    value = Object.assign({}, state.regisErrors,{
                        password: "Invalid password provided"
                    });
                }
                if(_.trim(action.error) === 'User unknown.'){
                    value = Object.assign({},state.regisErrors, {
                        username: "User unknown."
                    });
                }
                return Object.assign({}, state, {
                    regisStatus: "UNCONNECT",
                    regisErrors: value,
                    rstatus: "REGISTER"
                });
            }
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
            });
        case RESET_REGIS_ERROR:
            return Object.assign({}, state, {
                regisErrors: {}
            });
        case UNREGISTERING:
            return Object.assign({}, state, {
                regisStatus: 'UNCONNECTING'
            });
        case UNREGISTER_SUCCESSFUL:
            return Object.assign({}, state, {
                rstatus: 'REGISTER',
                regisStatus: 'UNCONNECT'
            });
        case UNREGISTER_FAIL:
            return Object.assign({}, state, {
                rstatus: 'UNREGISTER',
                regisStatus: 'CONNECTED',
            })
        default: return state;
    }
}
