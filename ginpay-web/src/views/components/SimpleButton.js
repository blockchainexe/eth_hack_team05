import React, { Component } from 'react'

class SimpleButton extends Component {
  render() {

    return (
      <a className="simple-button">
        {this.props.label}
      </a>
    );
  }
}
export default SimpleButton