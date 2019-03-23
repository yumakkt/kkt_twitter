import {
  SET_TWEETS,
  SET_TARGT_TWEET,
  SET_MY_TWEET
} from './actions';

const initialState = {
  tweets: [],
  targetTweet: {},
  myTweet: {
    mutter: ""
  },
};

// ユーザー情報の登録
// 認証
export const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TWEETS:
      return {
        ...state,
        tweets: action.tweets
      };
    case SET_TARGT_TWEET:
      return {
        ...state,
        targetTweet: action.targetTweet
      };
    case SET_MY_TWEET:
      return {
        ...state,
        myTweet: action.myTweet
      };
    default:
      return state;
  }
};