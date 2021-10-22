import React from 'react'
import './MovieDetails.css'
import { Link } from 'react-router-dom'

const formatDate = (date) => date?.split('-')[0]

const MovieDetails = ({ movie }) => {
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
          <p className="movie-details__runtime">{movie.runtime}m </p>
          {movie.tagline && <p className="movie-details__tagline">{movie.tagline}</p>}
          <p className="movie-details__average-rating">{Math.floor(movie.average_rating)}/10 </p>
          <img className="movie-details__poster" src={movie.poster_path} alt={movie.title} />
          <p className="movie-details__overview">{movie.overview}</p>
        </div>
      </article>
    </section>
  )
}

export default MovieDetails
