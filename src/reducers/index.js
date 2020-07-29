import { combineReducers } from 'redux'
import { loginReducer } from './login'
import { profileReducer } from './profile'
import { newsReducer } from './news';

export const rootReducer = combineReducers({
  login: loginReducer,
  profile: profileReducer,
  news: newsReducer,
})
