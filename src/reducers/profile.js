import {
  DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
} from '../actions/ProfileActions'

const initialState = {
  data: null,
  error: '',
  isFetching: false,
}

function webToUp(data){
  let new_soc = [];
      data.data.social.forEach((item,index)=>{
        item.label==="web" ? new_soc.unshift(item) : new_soc.push(item)
      })
      data.data.social = new_soc;
      return data;
}

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case GET_DATA_SUCCESS:
      return { ...state, isFetching: false, data: webToUp(action.payload) }
      

    case GET_DATA_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state
  }
}
