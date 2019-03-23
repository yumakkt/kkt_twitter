import {
  SET_USER_INFO,
  SET_ERROR_MSG,
  SET_USER_INFO_FROM_TOKEN
} from './actions';

const initialState = {
  user: {
    token: '',
    userId: '',
    email: ''
  },
  loginErrorMessage: ''
};

// ユーザー情報の登録
// 認証
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        user: action.user
      };
    case SET_ERROR_MSG:
      return {
        ...state,
        loginErrorMessage: action.loginErrorMessage
      };
    default:
      return state;
  }
};
