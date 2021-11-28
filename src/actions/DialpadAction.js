/* eslint-disable no-use-before-define */
import { 
    ONCALLSDK,
    onCallRegister,
    onCallUnRegister
} from '../utils/oncall-adapter';
import SDK from '../lib/sdk/portsip-web-sdk';

// REGISTERING oncall action
export const REGISTERING = 'REGISTERING';
function  callRegister(account) {
    return { type: REGISTERING , account};
}
// REGISTER SUCCESSFUL oncall action
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
function callRegisterSuccess() {
    return { type: REGISTER_SUCCESS };
}

// REGISTER FAIL oncall action
export const REGISTER_FAIL = 'REGISTER_FAIL';
function callRegisterFail(error) {
    return { type: REGISTER_FAIL, error}
}

// INIT SDK  oncall action
export const INIT_SDK = 'INIT_SDK';
function initSdk() {
    return {type: INIT_SDK};
}

// INIT SDK oncall successful
export const INIT_SDK_SUCCESS = 'INIT_SDK_SUCCESS';
function initSdkSuccess(sdk) {
    return {type: INIT_SDK_SUCCESS, sdk};
}

// INIT SDK oncall fail
export const INIT_SDK_FAIL = 'INIT_SDK_FAIL';
function initSdkFail(error) {
    return {type: INIT_SDK_FAIL, error};
}

// Reset RegisErrors
export const RESET_REGIS_ERROR = 'RESET_REGIS_ERROR';
function updateRegisErrors() {
    return {type: RESET_REGIS_ERROR}
}

// Unregister Agent
export const UNREGISTERING = 'UNREGISTERING';
function unRegistering() {
    return {type: UNREGISTERING}
}

// UnRegister Agent successful
export const UNREGISTER_SUCCESSFUL = 'UNREGISTER_SUCCESSFUL';
function unRegisterSuccessful() {
    return {type: UNREGISTER_SUCCESSFUL}
}
// UnRegister Agent Fail
export const UNREGISTER_FAIL = 'UNREGISTER_FAIL';
function unRegisterFail(error) {
    return {type: UNREGISTER_FAIL, error}
}

/**
 * @owner KevinNguyen
 * @dev register Dialpad with OnCall Server
 * @returns success or error
 */
export function accountRegister(account) {
    return async function(dispatch) {
    dispatch(callRegister(account))
    await onCallRegister(account)
    //.then((resp) => {dispatch(callRegisterSuccess()) })
    //.catch((err) => {dispatch(callRegisterFail(err)) })
    }
}
/**
 * @owner KevinNguyen
 * @dev init SDK when load component DialpadItem
 * @returns oncall SDK object
 */
export function accountInitSdk() {
    return function(dispatch) {
        dispatch(initSdk())
        const sdk = ONCALLSDK.init(SDK)
        if(sdk!==undefined) {
            dispatch(initSdkSuccess(sdk))
        }
        dispatch(initSdkFail("sdk init failed"))
        
    }
}

/**
 * @owner KevinNguyen
 * @dev hook Register Successful
 * @returns oncall register successful event status
 */
export function accountRegisterSuccessful() {
    return function(dispatch) {
        dispatch(callRegisterSuccess())
    }
}


/**
 * @owner KevinNguyen
 * @dev hook Register Fail
 * @returns oncall register fail event status
 */
export function accountRegisterFail(error) {
    return function(dispatch) {
        dispatch(callRegisterFail(error))
    }
}


/**
 * @owner KevinNguyen
 * @dev hook Reset RegisErrors
 * @returns reset RegisErrors
 */
export function resetRegisError() {
    return function(dispatch) {
        dispatch(updateRegisErrors())
    }
}

/**
 * @owner KevinNguyen
 * @dev hook change Register Button
 */
export function accountUnRegister() {
    return async function(dispatch) {
        dispatch(unRegistering())
        await onCallUnRegister()
        .then((res) => { dispatch(unRegisterSuccessful())})
        .catch((e) => { dispatch(unRegisterFail(e))})
    }
}