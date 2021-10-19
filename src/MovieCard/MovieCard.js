import React from 'react'
import './MovieCard.css'

const MovieCard = ({ id, poster_path, title, average_rating, displayMovieDetails }) => {
  return (
    <article className="movie-card" id={id} onClick={() => displayMovieDetails(id)}>
      <img className="movie-poster" src={ poster_path } alt='movie poster'/>
      <p className="movie-rating">{ average_rating }</p>
    </article>
  )
}


export default MovieCard
