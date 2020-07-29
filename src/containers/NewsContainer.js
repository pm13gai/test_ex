import { connect } from 'react-redux'
import  News  from '../components/News'
import { loadNews } from '../actions/NewsActions'



const mapStateToProps = store => {
  return {
    data: store.news.data,
    error: store.news.error,
    isFetching: store.news.isFetching,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadNews: () => dispatch(loadNews()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
