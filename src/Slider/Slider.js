import React, { Component } from "react";
import Slider from "react-slick";
import './Slider.css';

class MovieSlider extends Component {
  constructor() {
    super();
    this.state = {}
  }

  setSlideOne = () => {
    this.setState({ slideOne: this.props.featuredMovies})
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <div className="movie-slider">
        <Slider {...settings}>
          <div>
            <img className="slide-img"
            src={this.props.slideOne.backdrop_path}
            alt={this.props.slideOne.title} />
            <h3 className="slide-title"> {this.props.slideOne.title}</h3>
          </div>
          <div>
            <img className="slide-img"
            src={this.props.slideTwo.backdrop_path}
            alt={this.props.slideTwo.title} />
            <h3 className="slide-title">{this.props.slideTwo.title}</h3>
          </div>
          <div>
            <img className="slide-img"
            src={this.props.slideThree.backdrop_path}
            alt={this.props.slideThree.title} />
            <h3 className="slide-title">{this.props.slideThree.title}</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default MovieSlider
