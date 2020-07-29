import React from 'react'
import { connect } from 'react-redux'
import { Login } from '../components/Login'
import { handleLogin, logOut } from '../actions/LoginActions'

class LoginContainer extends React.Component {
  componentDidMount(){
    const { login, logOut } = this.props
    if(login.id) logOut();
  }
  render() {
    const { login, handleLogin } = this.props
    
    return (
      <Login
        name={login.name}
        id={login.id}
        error={login.error}
        isFetching={login.isFetching}
        handleLogin={handleLogin}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    login: store.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: (username,password) => dispatch(handleLogin(username,password)),
    logOut: () => dispatch(logOut()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
