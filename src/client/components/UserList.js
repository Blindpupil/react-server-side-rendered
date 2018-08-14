import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}> {user.name} </li>)
  }

  render() {
    return (
      <div>
        <h1>Here's a list of users</h1>
        <ul> {this.renderUsers()} </ul>
      </div>
    )
  }
}

function mapStateToProps({users}) {
  return { users }
}

export default connect(mapStateToProps, { fetchUsers })(UserList)