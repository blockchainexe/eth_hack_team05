import React, { Component } from 'react'

class Message extends Component {
  render() {

    return (
      <div className="message z-depth-1">
        {this.props.message}
      </div>
    );
  }
}
export default Message