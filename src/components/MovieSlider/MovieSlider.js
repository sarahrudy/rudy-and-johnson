import React from "react"
import Slider from "react-slick"
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import './MovieSlider.css'
import OneSlide from '../OneSlide/OneSlide'

const MovieSlider = ({ movies }) => {
  console.log(movies)
  const featuredMovies = movies.slice(10, 15).map(movie => {
    const { id, title, backdrop_path } = movie

    return (
      <OneSlide
        title={title}
        image={backdrop_path}
        key={id}
        id={id}
      />
    )
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  }
    
  return (
    <div className="movie-slider">
      <Slider {...settings}>
        {movies.length ? featuredMovies : <div className="movie-slider__placeholder" key="movie-slider-placeholder" />}
      </Slider>
    </div>
  )
}

export default MovieSlider
