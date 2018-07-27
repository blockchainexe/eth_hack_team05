import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from '../../util/wrappers.js'

// UI Components
import LogoutButtonContainer from './logoutbutton/LogoutButtonContainer'

class Navbar extends Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <ul className="right hide-on-med-and-down">
        <li>
          <Link to="/search">Destinations</Link>
        </li>
        <li>
          <Link to="/mypage">MyPage</Link>
        </li>
        <li>
          <Link to="/recommend">WishList</Link>
        </li>
        <li>
          <Link to="/matching">Chat</Link>
        </li>
        <LogoutButtonContainer />
      </ul>
    )

    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="logo">GinPay</Link>
            <OnlyAuthLinks />
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar