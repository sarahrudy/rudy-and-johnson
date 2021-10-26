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
      status: 'loading',
    }
  }

  componentDidMount = () => {
    Promise.all([ getSingleMovie(this.props.id), getTrailer(this.props.id) ])
      .then(data => {
        this.setState({ movie: data[0].movie, trailerKey: data[1].videos[0].key, status: 'success', error: '' })
      })
      .catch(error => {
        this.setState({ error: error.message, status: 'error' }) 
      })
  }

  toggleTrailer = () => {
    this.setState({ displayTrailer: !this.state.displayTrailer })
  }

  render () {
    const formatDate = (date) => date?.split('-')[0]
    const hours = Math.floor(this.state.movie.runtime / 60)
    const minutes = this.state.movie.runtime % 60
    const star = '⭐️'

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
            <p className="movie-details__average-rating">{star.repeat(Math.floor(this.state.movie.average_rating)/2)} </p>
            <img className="movie-details__poster" src={this.state.movie.poster_path} alt={this.state.movie.title} />
            <p className="movie-details__overview">{this.state.movie.overview}</p>
            <div>
            {this.state.trailerKey && 
              <button 
                className="movie-details__trailer-btn" 
                onClick={this.toggleTrailer}> 
                WATCH TRAILER 
              </button>}
            </div>
            <Link to="/" className="movie-details__back-btn">◀ BACK TO MOVIES</Link>
          </div>
        </article>
        {this.state.displayTrailer && <Trailer trailerKey={this.state.trailerKey} toggleTrailer={this.toggleTrailer} /> }
      </section>
    )
  }
}

export default MovieDetails
