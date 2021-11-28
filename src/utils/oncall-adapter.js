/* eslint-disable no-use-before-define */
import SDK from '../lib/sdk/portsip-web-sdk';
import { store } from '../Page/Components/Dialpad/index';
import {
  accountRegisterSuccessful,
  accountRegisterFail
} from '../actions/DialpadAction'


/**
 * @owner KevinNguyen
 * @dev Oncall SDK Object
 */
export const sdk = new SDK(
  {
    onRegisterSuccess: () => {
        console.log("login ok");
        store.dispatch(accountRegisterSuccessful());
    },
    onRegisterFailure: (reason) => {
      console.log("login fail, reason: ", reason);
      store.dispatch(accountRegisterFail(reason));
    },
    onConnect: () => {
      // hook action on event Connect
      console.log("on connect");
    },
    onDisconnect: (reason) => {
      // hook action on event disconnect
      console.log("on disconnect");
    },
    onInviteIncoming: (ext, displayname, isMeeting, isAudio, isVideo, autoAnswer) => {
      // hook action Invite incoming
    },
    onInviteRinging: (ext, isVideo, isMeeting) => {
      // hook action Invite Ringing
    },
    onInviteConnected: (ext, isVideo, isMeeting, type) => {
      // hook action connected 
    },
    onInviteAnswered: (ext) => {
      // hook action for answered call
    },
    onInviteClosed: (ext) => {
      // hook action closed call
    },
    onInviteTrying: (ext) => {
      // hook action invite trying
    },
    onInviteFailure: (ext, reason) => {
      // hook action invite failure
    },
    onInviteUpdated: (ext, isAudio, isVideo,existsScreen) => {
      // hook action invite updated
    },
    onInviteSessionProgress: (ext, isVideo, isMeeting) => {
      // hook action Invite Session Progress
    },
    onRemoteHold: (ext) => {
      // hook action for Remote Hold
    },
    onRemoteUnHold: (ext) => {
      // hook action for Remote UnHold
    }
  },
  {
    remoteAudioID: "audio1",
    remoteVideoID: "video1",
  }
);

/**
 * @owner KevinNguyen
 * @dev call register 
 * @param {username,password,domain, url} param0  args for authentication with server
 */
export const onCallRegister = async ({username, password, domain, url}) => {
  await sdk.createUserAgent(
      username,
      password,
      domain,
      url
  )
  .then((resp)=> {return resp})
  .catch((e) => {return e})
}


/**
 * @owner KevinNguyen
 * @dev unregister server
 */
export const onCallUnRegister = async () => {
  return sdk.unRegisterServer() ? true: false;
}

/**
 * @owner KevinNguyen
 * @dev ONCALLSDK extends 
 * @status Deprecated
 */
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
