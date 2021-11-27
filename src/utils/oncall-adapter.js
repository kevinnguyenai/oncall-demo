import SDK from '../lib/sdk/portsip-web-sdk';

export const ONCALLSDK = {

init: () => {
  const sdk = new SDK(
    {
      onRegisterSuccess: () => {
          console.log("login ok");
      },
      onRegisterFailure: (reason) => {
        console.log("login fail, reason: ", reason);
      },
    }
  )
  return sdk;
},  

regiser: ({username, password, domain, server}, sdk) => {
    sdk.createUserAgent(
        username,
        password,
        domain,
        server
    )
    .catch((e) => console.error(e));
  }
}

export default ONCALLSDK;
