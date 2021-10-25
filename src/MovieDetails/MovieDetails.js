import React, { Component } from 'react';
import './MovieDetails.css'
import { Link } from 'react-router-dom'
import Trailer from '../Trailer/Trailer'
import { getSingleMovie, getTrailer } from '../apiCalls'

class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
      movie: [],
      trailerKey: '',
      error: '',
    }
  }
  
  componentDidMount = () => {
    getSingleMovie(this.props.id)
    .then(currentMovie => this.setState({ movie: currentMovie.movie }))
  
    getTrailer(this.props.id)
    .then(data => this.setState[{ trailerKey: console.log(data.videos[0].key) }])
}

render () {
    const formatDate = (date) => date?.split('-')[0]
    const hours = Math.floor(this.state.movie.runtime / 60)
    const minutes = this.state.movie.runtime % 60

  return (
    <section className="movie-details-container" id={this.state.movie.id}>
      <div className="movie-backdrop"> 
        <img className="movie-backdrop__image" src={this.state.movie.backdrop_path} alt={this.state.movie.title} />
      </div>
      <article className="movie-details">
        <div>
          <h1 className="movie-details__title">{this.state.movie.title}</h1>
          <p className="movie-details__release-date">{formatDate(this.state.movie.release_date)}</p>
          {this.state.movie.genres && <p className="movie-details__genres">{this.state.movie.genres.join(' / ')}</p>}
          <p className="movie-details__runtime">{hours}h{minutes}m</p>
          {this.state.movie.tagline && <p className="movie-details__tagline">{this.state.movie.tagline}</p>}
          <p className="movie-details__average-rating">{Math.floor(this.state.movie.average_rating)}/10 </p>
          <img className="movie-details__poster" src={this.state.movie.poster_path} alt={this.state.movie.title} />
          <p className="movie-details__overview">{this.state.movie.overview}</p>
          <Trailer trailerKey={ this.state.trailer } />
          <Link to="/" className="movie-details__back-btn">◀ BACK TO MOVIES</Link>
        </div>
      </article>
    </section>
    )
  }
}

export default MovieDetails
