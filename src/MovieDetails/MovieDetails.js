import React from 'react'
import './MovieDetails.css'
import { NavLink } from 'react-router-dom'

const MovieDetails = ({ movie }) => {
  return (
    <article className="movie-details" id={movie.id}>
      <Link to="/" className="back-btn">Back</Link>
    <h3>{movie.title}</h3>
    <img src={movie.backdrop_path} alt=''/>
    <p>{movie.release_date}</p>
    </article>
  )
}


export default MovieDetails
