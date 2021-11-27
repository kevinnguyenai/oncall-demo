/* eslint-disable no-use-before-define */
import ONCALLSDK from '../utils/oncall-adapter';


export const REGISTERING = 'REGISTERING';
function  callRegister(account, sdk) {
    return { type: REGISTERING , account, sdk};
}
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
function callRegisterSuccess(account) {
    return { type: REGISTER_SUCCESS, account};
}

export const REGISTER_FAIL = 'REGISTER_FAIL';
function callRegisterFail(error) {
    return { type: REGISTER_FAIL, error}
}

export function accountRegister(account, sdk) {
    return function(dispatch) {
    dispatch(callRegister(dispatch))
    ONCALLSDK.register(account,sdk)
    .then((resp) => {dispatch(callRegisterSuccess(account)) })
    .catch((error) => {dispatch(callRegisterFail(error)) })
    }
}
