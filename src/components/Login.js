import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from "react-router-dom"


export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,

    }
    this.button = React.createRef();
  }
  

  handleChange=(e)=>{
    this.setState({error:false});
    const { name,value } = e.currentTarget;

    this.setState({[name]: value});
    

  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.button.current.disabled = true;
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)){
      this.setState({error:true});
      this.button.current.disabled = false;

    }
    else {
      this.props.handleLogin(this.state.email,this.state.password);
      
    }

  }


  renderTemplate = () => {
    
    const { error, isFetching } = this.props
    const { name, password, } = this.state


    if(this.button.current) error && (this.button.current.disabled = false)
    
      return (
        
        <div>
          {error && <p className="error">{error}</p>}
          {isFetching && <p>Загрузка...</p>}

          {this.state.error && <p className="error">Введен некорректный email</p>}
          
          
          <form onSubmit={this.handleSubmit}>
            <input id="id_email" type="text" name="email" value={name} onChange={this.handleChange}  placeholder="Email" /><br/><br/>
            <input id="id_password" type="text" name="password"  value={password} onChange={this.handleChange} placeholder="Password" /><hr />
            
            
            <button type="submit" ref = {this.button}>Войти</button>
            
          </form>
        </div>
      )
  
  }
  render() {
     
    if(this.props.id){
       return(
          <Redirect from='/login' to='/profile' />
    )}

    return (
      <div className="auto">        
        <h1>Авторизация</h1>    
        {this.renderTemplate()}
    </div>
    )
  }
}

Login.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  id: PropTypes.number,
}
