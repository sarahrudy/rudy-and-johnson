import React from 'react'
import './MovieCard.css'

const MovieCard = ({ poster_path, title }) => {
  return (
    <article className="movie-card">
      <img src={ poster_path } alt='movie poster'/>
      <p>{ title }</p>
    </article>
  )
}


export default MovieCard

