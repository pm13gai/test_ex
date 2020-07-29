import {
  NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAIL,
} from '../actions/NewsActions'

const initialState = {
  data: null,
  error: '',
  isFetching: false,
}


export function newsReducer(state = initialState, action) {
  
  switch (action.type) {
    case NEWS_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case GET_NEWS_SUCCESS:
      return { ...state, isFetching: false, data: action.payload }
      

    case GET_NEWS_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state
  }
}


