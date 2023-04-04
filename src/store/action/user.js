import {USER_LOGOUT, USER_LOGIN,USER_PROFILE_PICTURE} from '../actionType';

export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const login = userData => {
  return {
    type: USER_LOGIN,
    userData,
  };
};

export const getProfilePicture = profilePicture => {
  return {
    type: USER_PROFILE_PICTURE,
    profilePicture,
  };
};
