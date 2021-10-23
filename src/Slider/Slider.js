import React, { Component } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
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
          <NavLink to={"/movies/579583"}>
            <div onClick={() => this.props.displayMovieDetails(this.props.slideOne.id)}>
              <img className="slide-img"
              src={this.props.slideOne.backdrop_path}
              alt={this.props.slideOne.title} />
              <h3 className="slide-title"> {this.props.slideOne.title}</h3>
            </div>
          </NavLink>
          <NavLink to={"/movies/337401"}>
            <div onClick={() => this.props.displayMovieDetails(this.props.slideTwo.id)}>
              <img className="slide-img"
              src={this.props.slideTwo.backdrop_path}
              alt={this.props.slideTwo.title} />
              <h3 className="slide-title">{this.props.slideTwo.title}</h3>
            </div>
          </NavLink>
          <NavLink to={"/movies/500840"}>
            <div onClick={() => this.props.displayMovieDetails(this.props.slideThree.id)}>
              <img className="slide-img"
              src={this.props.slideThree.backdrop_path}
              alt={this.props.slideThree.title} />
              <h3 className="slide-title">{this.props.slideThree.title}</h3>
            </div>
          </NavLink>
        </Slider>
      </div>
    );
  }
}

export default MovieSlider
