import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import  Home  from '../components/Home'
import  NewsContainer  from '../containers/NewsContainer'
import  ProfileContainer  from '../containers/ProfileContainer'
import  LoginContainer  from '../containers/LoginContainer'
import  NotFound  from '../components/NotFound'

class App extends React.Component {

  render() {
    
    //const {id} = this.props
    const isLogin = localStorage.getItem('isLogin');
    return (
      <div className="app">
        
        <div className="nav">
          <Link to='/home'>На главную</Link>
          <Link to='/news'>Новости</Link>
          <Link to='/profile'>Профиль</Link>
          <Link to='/login'>{!isLogin ? "Войти" : "Выйти"}</Link>
        </div>


        <Switch>
          <Route  path='/home' component={Home} />
          <Route  path='/news' component={NewsContainer} />
          <Route  path='/profile' render={() => isLogin ? <ProfileContainer /> : <Redirect  from='/profile' to='/login' />} />
          <Route  path='/login' component={LoginContainer} />
          <Redirect exact from='/' to='/home' />
          <Route  component={NotFound} />
        </Switch>

        
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    id: store.login.id,
  }
}



export default connect(
  mapStateToProps
)(App)


App.propTypes = {
  id: PropTypes.number.isRequired,
}