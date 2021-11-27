/* eslint-disable no-use-before-define */
import SDK from '../lib/sdk/portsip-web-sdk';



export const sdk = new SDK(
  {
    onRegisterSuccess: () => {
        console.log("login ok");
    },
    onRegisterFailure: (reason) => {
      console.log("login fail, reason: ", reason);
    },
    onConnect: () => {
      // hook action on event Connect
    },
    onDisconnect: (reason) => {
      // hook action on event disconnect
    },
  },
  {
    remoteAudioID: "audio1",
    remoteVideoID: "video1",
  }
);

export const register = async ({username, password, domain, url}) => {
  await sdk.createUserAgent(
      username,
      password,
      domain,
      url
  )
  .then((resp)=> {return resp})
  .catch((e) => {return e})
}

/*
export const ONCALLSDK = {
  init: (SDK) => {
    const sdk = new SDK(
      {
        onRegisterSuccess: () => {
            console.log("login ok");
        },
        onRegisterFailure: (reason) => {
          console.log("login fail, reason: ", reason);
        },
        onConnect: () => {
          // hook action on event Connect
        },
        onDisconnect: (reason) => {
          // hook action on event disconnect
        },
      },
      {
        remoteAudioID: "audio1",
        remoteVideoID: "video1",
      }
    )
    return sdk;
  },  

  register: ({username, password, domain, url}) => {
      sdk.createUserAgent(
          username,
          password,
          domain,
          url
      )
      .catch((e) => console.error(e));
    }
}
*/
