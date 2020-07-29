export const DATA_REQUEST = 'DATA_REQUEST'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAIL = 'GET_DATA_FAIL'

export function loadData(id) {
  return function(dispatch) {
    dispatch({
      type: DATA_REQUEST,
    })

    let $ = require('jquery')
    let url = "https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/" + id;
    console.log("url = ", url);
    $.ajax({
      url:	url,	
      method:	"GET",
      success:	function	(data)	{
            if(data.status==="ok"){
              dispatch({
                type: GET_DATA_SUCCESS,
                payload: data,
              })
            } else{
              dispatch({
                type: GET_DATA_FAIL,
                error: true,
                payload: new Error('Пользователь не найден'),
              })
            }
      },
      error: function (err){
        dispatch({
          type: GET_DATA_FAIL,
          error: true,
          payload: new Error('Ошибка получения даенных'),
        })
      }
    });


  }
}
