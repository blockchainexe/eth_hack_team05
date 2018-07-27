import React, { Component } from 'react'
import DestinationCard from "../components/DestinationCard";
import SimpleButton from "../components/SimpleButton";
import axios from "axios";
import api from "../../../config/api";

class DestinationCards extends Component {

  state = {
    destinations: []
  }

  componentDidMount() {
    axios.get(`${api.API_ORIGIN}destinations`)
      .then(res => {
        const destinations = res.data
        this.setState({ destinations });
      })
  }

  render() {

    return (
      <div className="destination-cards">
        <div className="row">
          {this.state.destinations.map((data) => {
            return <DestinationCard key={data.id} destination={data}></DestinationCard>;
          })}
        </div>
        <div className="row">
          <div className="col s4 offset-s4 m4 offset-m4 l4 offset-l4 center-align">
            <SimpleButton label="See more"></SimpleButton>
          </div>
        </div>
      </div>
    );
  }
}
export default DestinationCards