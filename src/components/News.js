import React from 'react'
import PropTypes from 'prop-types'

export default class News extends React.Component {
  componentDidMount(){
    this.props.loadNews();
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
        {data.data.map((item,index)=>(<div key={index}><h2>{item.title}</h2><br/><p>{item.text}</p><hr/></div>))}
        <p>Всего новостей {data.data.length}</p>               
      </div>
        )
    }
  }

  render() {
    return (
      <div>
        <h1>Новости</h1>
        {this.renderTemplate()}
      </div>
    )
  }
}
News.propTypes = {
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  loadNews: PropTypes.func.isRequired,
}

