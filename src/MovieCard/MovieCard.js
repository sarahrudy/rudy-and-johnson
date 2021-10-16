import React from 'react'
import './MovieCard.css'

const MovieCard = ({ id, poster_path, title, displayMovieDetails }) => {
  return (
    <article className="movie-card" id={id} onClick={() => displayMovieDetails(id)}>
      <img src={ poster_path } alt='movie poster'/>
      <p>{ title }</p>
    </article>
  )
}


export default MovieCard
