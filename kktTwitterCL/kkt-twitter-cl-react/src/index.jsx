import React from 'react';
import axios from 'axios';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from './stores/todoStore/reducers';
import { userReducer } from './stores/userStore/reducers';
import { setUser } from './stores/userStore/actions';
import * as serviceWorker from './serviceWorker';
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { tokenToUser } from './utils/jwtHandler';

// storeの初期化
export const history = createBrowserHistory();

const store = createStore(
  combineReducers({
    todo: todoReducer,
    user: userReducer,
    router: connectRouter(history)
  }),
  applyMiddleware(thunk, logger, routerMiddleware(history))
);

// localstrageの情報をstoreに突っ込む
const remainedToken = localStorage.getItem('token');

if (remainedToken) {
  const tokenPayload = tokenToUser(remainedToken);
  store.dispatch(
    setUser({
      remainedToken,
      userId: tokenPayload.user_created_id,
      email: tokenPayload.email
    })
  );
  axios.defaults.headers.common['Authorization'] = `Bearer ${remainedToken}`;
}

// rendering
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const reducer = (state, action) => {
//     state = state + action.payload
//     return state;
// }
// // reducerと初期値を定義する。
// const store = createStore(reducer, 1)

// store.subscribe(() => {
//     console.log("store updated", store.getState())
// })

// store.dispatch({
//     type: "ADD",
//     payload: 10
// })

// ReactDOM.render(<App />, document.getElementById('root'));
