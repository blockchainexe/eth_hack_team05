import React, { Component } from 'react'
// Components
import Slider from "react-slick";
// Images
import slide1 from '../../img/slide1.jpg'
import slide2 from '../../img/slide2.jpg'
import slide3 from '../../img/slide3.jpg'
import slide4 from '../../img/slide4.jpg'
import slide5 from '../../img/slide5.jpg'

class TopSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <Slider {...settings} className="top-slider">
        <div>
          <img src={slide1}></img>
        </div>
        <div>
          <img src={slide2}></img>
        </div>
        <div>
          <img src={slide3}></img>
        </div>
        <div>
          <img src={slide4}></img>
        </div>
        <div>
          <img src={slide5}></img>
        </div>
      </Slider>
    );
  }
}
export default TopSlider