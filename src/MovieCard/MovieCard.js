import React from 'react'
import './MovieCard.css'

const MovieCard = ({ id, poster_path, average_rating }) => {
  const star = '⭐️'
  
  return (
    <article className="movie-card" id={id} >
      <img className="movie-poster" src={ poster_path } alt='movie poster'/>
      <p className="movie-rating">{star.repeat(Math.floor(average_rating)/2)}</p>
    </article>
  )
}

export default MovieCard
