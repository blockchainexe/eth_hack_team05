import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import UserCard from "../../components/UserCard";

class Mypage extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="mypage">
        <Navbar></Navbar>
        <div className="container">
          <h2>My page</h2>
          <UserCard authData={this.props.authData}></UserCard>
        </div>
      </main>
    )
  }
}

export default Mypage
