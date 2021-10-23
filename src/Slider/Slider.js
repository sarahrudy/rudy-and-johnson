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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="movie-slider">
        <h2>Featured Films</h2>
        <Slider {...settings}>
          <div>
            <img src={this.props.slideOne.backdrop_path} alt={this.props.slideOne.title} />
            <h3>{this.props.slideOne.title}</h3>
          </div>
          <div>
            <img src={this.props.slideTwo.backdrop_path} alt={this.props.slideTwo.title} />
            <h3>{this.props.slideTwo.title}</h3>
          </div>
          <div>
            <img src={this.props.slideThree.backdrop_path} alt={this.props.slideThree.title} />
            <h3>{this.props.slideThree.title}</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default MovieSlider
