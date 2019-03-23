import axios from 'axios';
import {
  push
} from 'connected-react-router';

// 文字列定数
export const SET_TWEETS = 'SET_TWEETS';
export const SET_TARGT_TWEET = 'SET_TARGT_TWEET';
export const SET_MY_TWEET = 'SET_MY_TWEET';

//
export const setTweets = tweets => ({
  type: SET_TWEETS,
  tweets
});

export const setTargetTweet = targetTweet => ({
  type: SET_TARGT_TWEET,
  targetTweet
});

export const setMyTweet = myTweet => ({
  type: SET_MY_TWEET,
  myTweet
});


// ユーザーの認証をして認証に成功したらトークンを生成。
// export const authUser = authRequestData => {
//   return async (dispatch, getState) => {
//     const response = await axios
//       .post(
//         `${process.env.REACT_APP_KKT_TWITTER_SERVER_URL_ROOT}/user/auth/`,
//         authRequestData
//       )
//       .catch(err => err.response);
//     if (response.status === 400) {
//       dispatch(
//         setLoginErrorMessage('メールアドレス又は、パスワードが正しくありません')
//       );
//       return;
//     }
//     const token = response.data.token;
//     const tokenPayload = tokenToUser(token)
//     dispatch(
//       setUser({
//         token,
//         userId: tokenPayload.user_created_id,
//         email: tokenPayload.email
//       })
//     );
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//     localStorage.setItem('token', token);
//     dispatch(push('/'));
//   };
// };