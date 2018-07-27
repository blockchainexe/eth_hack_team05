import React, { Component } from 'react'
import Slider from '../../components/TopSlider'
import LoginButtonContainer from '../../components/loginbutton/LoginButtonContainer'

class Top extends Component {
  render() {
    return(
      <main className="top">
        <header>
          <h1>GinPay</h1>
        </header>
        <div className="content">
          <div className="image-wrapper">
            <Slider></Slider>
          </div>
          <div className="service-description">
            <h2>Title</h2>
            <p>description description description description</p>
            <p>description description description description</p>
            <p>description description description description</p>
            <p>description description description description</p>
            <p>description description description description</p>
            <p>description description description description</p>
          </div>
          <div className="simple-button-wrapper">
            <LoginButtonContainer></LoginButtonContainer>
          </div>
        </div>
      </main>
    )
  }
}

export default Top
