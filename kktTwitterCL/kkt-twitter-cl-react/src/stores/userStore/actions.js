import axios from 'axios';
import {
  push
} from 'connected-react-router';
import {
  tokenToUser
} from '../../utils/jwtHandler'

// 文字列定数
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_ERROR_MSG = 'SET_ERROR_MSG';

//
export const setUser = user => ({
  type: SET_USER_INFO,
  user
});

export const setLoginErrorMessage = loginErrorMessage => ({
  type: SET_ERROR_MSG,
  loginErrorMessage
});

// ユーザーの認証をして認証に成功したらトークンを生成。
export const authUser = authRequestData => {
  return async (dispatch, getState) => {
    const response = await axios
      .post(
        `${process.env.REACT_APP_KKT_TWITTER_SERVER_URL_ROOT}/user/auth/`,
        authRequestData
      )
      .catch(err => err.response);
    if (response.status === 400) {
      dispatch(
        setLoginErrorMessage('メールアドレス又は、パスワードが正しくありません')
      );
      return;
    }
    const token = response.data.token;
    const tokenPayload = tokenToUser(token)
    dispatch(
      setUser({
        token,
        userId: tokenPayload.user_created_id,
        email: tokenPayload.email
      })
    );
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
    dispatch(push('/'));
  };
};