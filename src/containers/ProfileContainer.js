import React from 'react'
import { connect } from 'react-redux'
import  Profile  from '../components/Profile'
import { loadData } from '../actions/ProfileActions'


class ProfileContainer extends React.Component {
  render() {
    const { loadData, profile, id  } = this.props
    return (
       <Profile
        data={profile.data}
        error={profile.error}
        isFetching={profile.isFetching}
        loadData={loadData}
        id={id}
       />
    )
  }
}

const mapStateToProps = store => {
  return {
    profile: store.profile,
    id: store.login.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: (id) => dispatch(loadData(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer)
