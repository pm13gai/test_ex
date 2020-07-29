export const NEWS_REQUEST = 'NEWS_REQUEST'
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS'
export const GET_NEWS_FAIL = 'GET_NEWS_FAIL'


export function loadNews() {
  return function(dispatch) {
    dispatch({
      type: NEWS_REQUEST,
    })

    let $ = require('jquery')
    $.ajax({
      url:	"https://mysterious-reef-29460.herokuapp.com/api/v1/news/",
      method:	"GET",											
      success:	function	(data)	{
            if(data.status==="ok"){
              dispatch({
                type: GET_NEWS_SUCCESS,
                payload: data,
              })
            } else{
              dispatch({
                type: GET_NEWS_FAIL,
                error: true,
                payload: new Error('Пользователь не найден'),
              })
            }
      },
      error: function (err){
        dispatch({
          type: GET_NEWS_FAIL,
          error: true,
          payload: new Error('Ошибка получения даенных'),
        })
      }
    });


  }
}
