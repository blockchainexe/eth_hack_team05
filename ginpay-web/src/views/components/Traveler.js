import React, { Component } from 'react'
import UserIcon from "../components/UserIcon";
import Message from "../components/Message";
import userIcon from '../../img/user-icon.jpg'

class Traveler extends Component {
  render() {

    return (
      <div className="traveler row">
        <div className="user-icon-wrapper">
          <UserIcon icon={this.props.userIcon}></UserIcon>
        </div>
        <div className="message-wrapper">
          <Message message={this.props.traveler.message}></Message>
        </div>
      </div>
    );
  }
}
export default Traveler