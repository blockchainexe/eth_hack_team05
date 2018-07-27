import React, { Component } from 'react'
import Traveler from "../components/Traveler";
import axios from "axios";
import api from "../../../config/api";
import userIcon1 from '../../img/user-icon.jpg'
import userIcon2 from '../../img/user-icon2.jpg'
import userIcon3 from '../../img/user-icon3.jpeg'
import userIcon4 from '../../img/user-icon4.jpeg'
import userIcon5 from '../../img/user-icon5.jpg'
import userIcon6 from '../../img/user-icon6.jpg'
import userIcon7 from '../../img/user-icon7.jpg'
import userIcon8 from '../../img/user-icon1.png'

class Travelers extends Component {

  state = {
    requests: []
  }

  componentDidMount() {
    axios.get(`${api.API_ORIGIN}requests`)
      .then(res => {
        const requests = res.data
        this.setState({ requests });
      })
    console.log(userIcon8)
  }

  render() {

    const imageList = [userIcon1, userIcon2, userIcon3, userIcon4, userIcon5, userIcon6, userIcon7, userIcon8]

    return (
      <div className="travelers">
        {this.state.requests.map((data, index) => {
          return <Traveler key={data.id} traveler={data} userIcon={imageList[index]}></Traveler>;
        })}
      </div>
    );
  }
}
export default Travelers