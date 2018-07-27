import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import Chats from "../../components/Chats";

class Matching extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="matching">
        <Navbar></Navbar>
        <div className="container">
          <h2>Chat</h2>
          <Chats></Chats>
        </div>
      </main>
    )
  }
}

export default Matching
