import React from 'react'
import PropTypes from 'prop-types'

export default class Profile extends React.Component {

  componentDidMount(){
    const { loadData, id } = this.props
    if(id) loadData(id);
  }

  do_className = (cl) => {
    let classList = cl + ' label';
    return classList;
  }

  renderTemplate = () => {

    const { data, error, isFetching } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка {error}</p>
    }

    if (isFetching) {
      return <p>Загрузка...</p>
    }

    if (data) {
      return (
      <div>
        <h1>Профиль</h1>
        <p>Город: {data.data.city}</p>
        <p>Знания языков:</p>
        <ul>
          {data.data.languages.map((item,index)=>(<li key={index}>+{item}</li>))}         
        </ul>
        <p>Ссылки:</p>
        <ul className="soc">
          {data.data.social.map((item,index)=>(
          <li key={index} className="soc_item">+
          <a href={item.link}>
            <div className={this.do_className(item.label)}></div>
            <div>{item.label}</div>
          </a></li>))}         
        </ul>
      </div>
        )
    }
  }
  render() {
    
       
    return (
      <div className="profile">
        {this.renderTemplate()}
      </div>

    )


  }
}

Profile.propTypes = {
  id: PropTypes.number.isRequired,
  loadData: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}
