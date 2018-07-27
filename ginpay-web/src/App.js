import React, { Component } from 'react'

// Styles
import './App.css'

class App extends Component {
  // In component's constructor.
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App
