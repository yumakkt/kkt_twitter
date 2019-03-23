import axios from "axios";

// 文字列定数
export const FETCH_TODO = 'FETCH_TODO'
export const RAISE_IS_FETCHING = 'RAISE_IS_FETCHING'
// 
export const register_todo = todos => ({
  type: FETCH_TODO,
  todos,
  isFetching: false,
})

export const raise_flag_fetching = () => ({
  type: RAISE_IS_FETCHING,
  isFetching: true,
})

// axiosを叩くミドルウェア
export const fetchTodos = (testParam) => {
  return async (dispatch, getState) => {
    console.log(testParam)
    console.log(getState())
    dispatch(raise_flag_fetching())
    const response = await axios.get(
      `${process.env.REACT_APP_KKT_TWITTER_TOOL_URL_ROOT}/todos/`
    );
    dispatch(register_todo(response.data))
  }
}