import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'


const reducer = (state, action) => {
    state = state + action.payload
    return state;
}
// reducerと初期値を定義する。
const store = createStore(reducer, 1)

store.subscribe(() => {
    console.log("store updated", store.getState())
})

store.dispatch({
    type: "ADD",
    payload: 10
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
