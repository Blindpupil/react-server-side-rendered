import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ auth }) => {
  const authButton = auth ? (
    <li><a href='api/logout' > Logout </a></li>
  ) : (
    <li><a href='api/auth/google' > Login </a></li>
  )

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>LOGO</Link>
        <ul className='right'>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/admins'>Admins</Link></li>
          {authButton}
        </ul>
      </div>
    </nav>
  )
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)