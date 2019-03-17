import { combineReducers } from 'redux'
import { CHANGE_NAME, CHANGE_AGE, INITIALIZE_FORM } from './actions'

const initialState = {
    todos: {  // AddFormに入力されている文字列
      // todoN: {task: taskContents}
    },

}

const formReducer = (state = initialState.form, action) => {
    switch (action.type) {
      case CHANGE_NAME:
        return {
          ...state,
          name: action.name,
        }
      case CHANGE_AGE:
        return {
          ...state,
          age: action.age,
        }
      case INITIALIZE_FORM:
        return initialState.form
      default:
        return state
    }
  }

 const charactersReducer = (state = initialState.characters, action) => {
     switch (action.type) {
       default:
         return state
     }
   }
    
   const rootReducer = combineReducers({
     form: formReducer,
     characters: charactersReducer,
   })
    
export default rootReducer
