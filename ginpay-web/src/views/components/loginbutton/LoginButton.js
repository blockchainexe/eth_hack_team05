import React from 'react'

// Images
import uPortLogo from '../../../img/uport-logo.svg'

const LoginButton = ({ onLoginUserClick }) => {
  return(
    <div className="login-button-wrapper">
      <a href="#" className="login-button" onClick={(event) => onLoginUserClick(event)}><img className="uport-logo" src={uPortLogo} alt="UPort Logo" />Login with UPort</a>
    </div>
  )
}

export default LoginButton
