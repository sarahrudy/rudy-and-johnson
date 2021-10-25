import React, { Component } from 'react';
import './MovieDetails.css'
import { Link } from 'react-router-dom'
import { getTrailer } from '../apiCalls'
import Trailer from '../Trailer/Trailer'

// class MovieDetails extends Component {
//   constructor() {
//     super()
//     this.state = {
//       movie: {},
//       video: {},
//       error: '',
//     }
//   }
// }

const MovieDetails = ({ movie }) => {
  const formatDate = (date) => date?.split('-')[0]
  const hours = Math.floor(movie.runtime / 60)
  const minutes = movie.runtime % 60

  console.log(movie.id)
  return (
    <section className="movie-details-container" id={movie.id}>
      <div className="movie-backdrop"> 
        <img className="movie-backdrop__image" src={movie.backdrop_path} alt={movie.title} />
      </div>
      <article className="movie-details">
        <div>
          <h1 className="movie-details__title">{movie.title}</h1>
          <p className="movie-details__release-date">{formatDate(movie.release_date)}</p>
          {movie.genres && <p className="movie-details__genres">{movie.genres.join(' / ')}</p>}
          <p className="movie-details__runtime">{hours}h{minutes}m</p>
          {movie.tagline && <p className="movie-details__tagline">{movie.tagline}</p>}
          <p className="movie-details__average-rating">{Math.floor(movie.average_rating)}/10 </p>
          <img className="movie-details__poster" src={movie.poster_path} alt={movie.title} />
          <p className="movie-details__overview">{movie.overview}</p>
          <Trailer movieKey={getTrailer(movie.id)} />
          <Link to="/" className="movie-details__back-btn">◀ BACK TO MOVIES</Link>
        </div>
      </article>
    </section>
  )
}

export default MovieDetails
