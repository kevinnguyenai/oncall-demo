/* eslint-disable no-use-before-define */
import { register} from '../utils/oncall-adapter';
import SDK from '../lib/sdk/portsip-web-sdk';

export const REGISTERING = 'REGISTERING';
function  callRegister(account) {
    return { type: REGISTERING , account};
}
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
function callRegisterSuccess() {
    return { type: REGISTER_SUCCESS };
}

export const REGISTER_FAIL = 'REGISTER_FAIL';
function callRegisterFail(error) {
    return { type: REGISTER_FAIL, error}
}

export const INIT_SDK = 'INIT_SDK';
function initSdk() {
    return {type: INIT_SDK};
}

export const INIT_SDK_SUCCESS = 'INIT_SDK_SUCCESS';
function initSdkSuccess(sdk) {
    return {type: INIT_SDK_SUCCESS, sdk};
}

export const INIT_SDK_FAIL = 'INIT_SDK_FAIL';
function initSdkFail(error) {
    return {type: INIT_SDK_FAIL, error};
}

export function accountRegister(account) {
    return async function(dispatch) {
    dispatch(callRegister(account))
    await register(account)
    .then((resp) => {dispatch(callRegisterSuccess()) })
    .catch((err) => {dispatch(callRegisterFail(err)) })
    }
}

export function accountInitSdk() {
    return function(dispatch) {
        dispatch(initSdk())
        //const sdk = ONCALLSDK.init(SDK)
        if(sdk!==undefined) {
            dispatch(initSdkSuccess(sdk))
        }
        dispatch(initSdkFail("sdk init failed"))
        
    }
}
