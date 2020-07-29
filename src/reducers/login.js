import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/LoginActions'

const initialState = {
  name: '',
  id: 0,
  error: '',
  isFetching: false,
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case LOGIN_SUCCESS:
      localStorage.setItem('isLogin',true);
      return { ...state, isFetching: false, id: action.payload }
      

    case LOGIN_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    case LOGOUT:
      localStorage.removeItem('isLogin');
      return { ...state, name: '', id: 0, isFetching: false, error: '' }

    default:
      return state
  }
}
