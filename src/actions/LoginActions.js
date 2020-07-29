
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT = 'LOGOUT'



export function handleLogin(username, password) {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    let $ = require('jquery')
    $.ajax({
      url:	"https://mysterious-reef-29460.herokuapp.com/api/v1/validate",
      method:	"POST",								
      data:	{"email" : username,
      "password":password},
      success:	function	(data)	{
            if(data.status==="ok"){
              dispatch({
                type: LOGIN_SUCCESS,
                payload: data.data.id,
              })
            } else {
              dispatch({
                type: LOGIN_FAIL,
                error: true,
                payload: new Error('Имя пользователя или пароль введены неверно'),
              })
            }
      },
      error: function (err){
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    });



  }
}
export function logOut() {
  return{
    type: LOGOUT,
  }

}
