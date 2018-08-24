import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Helmet } from 'react-helmet'

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}> {user.name} </li>)
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} users loaded`}</title>
        <meta property='og:title' content="User's App in SSR" />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        <h2>Here's a list of users</h2>
        <ul> {this.renderUsers()} </ul>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return { users }
}

function loadData(store) {
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
}