import {combineReducers} from 'redux'

//reducer
import userReducer from './user/user.reducer'

export default combineReducers({
    user:userReducer
})