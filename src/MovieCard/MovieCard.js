import React from 'react'
import './MovieCard.css'

const MovieCard = ({ id, poster_path, average_rating }) => {
  return (
    <article className="movie-card" id={id} >
      <img className="movie-poster" src={ poster_path } alt='movie poster'/>
      <p className="movie-rating">{ average_rating }</p>
    </article>
  )
}


export default MovieCard
