import React, { Component } from 'react'

class UserIcon extends Component {
  render() {

    return (
      <div className="user-icon">
        <div className="icon-image-wrapper">
          <img className="circle responsive-img z-depth-1" src={this.props.icon}></img>
        </div>
        <div className="user-name">{this.props.name}</div>
      </div>
    );
  }
}
export default UserIcon