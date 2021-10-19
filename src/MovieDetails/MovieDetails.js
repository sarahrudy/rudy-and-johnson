import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({ movie }) => {
  return (
    <article className="movie-details" id={movie.id}>
    <h3>{movie.title}</h3>
      <img src={movie.backdrop_path} alt=''/>
      <p>{movie.release_date}</p>
    </article>
  )
}


export default MovieDetails
