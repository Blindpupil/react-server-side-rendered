import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderAdmins() {
    return this.props.admins.map(admin => <li key={admin.id}> {admin.name} </li>)
  }

  render() {
    return (
      <div>
        <h2>Here's a list of Admins !</h2>
        <ul> {this.renderAdmins()} </ul>
      </div>
    )
  }
}

function mapStateToProps({ admins }) {
  return { admins }
}

export default {
  loadData: ({dispatch}) => dispatch(fetchAdmins()),
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  )
}