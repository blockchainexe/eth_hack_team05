import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import DestinationCards from "../../components/DestinationCards";

class Search extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="search">
        <Navbar></Navbar>
        <div className="container">
          <h2>Destinations</h2>
          <div className="row">
            <DestinationCards></DestinationCards>
          </div>
        </div>
      </main>
    )
  }
}

export default Search
