import { FETCH_TODO, RAISE_IS_FETCHING } from './actions'

const initialState = {
    todos: {  // AddFormに入力されている文字列
      // todoN: {task: taskContents}
    },
    isFetching: false
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TODO:
        return {
          ...state,
          todos: action.todos,
        }
      case RAISE_IS_FETCHING:
        return {
          ...state,
          isFetching: action.isFetching,
        }
      default:
        return state
    }
  }
