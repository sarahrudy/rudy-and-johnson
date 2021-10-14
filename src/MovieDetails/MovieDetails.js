import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({ title, backdrop_path, release_date }) => {
  return (
    <article className="movie-details">
    <h3>{ title }</h3>
    <img src={ backdrop_path } />
    <p>{ release_date }</p>
    </article>
  )
}


export default MovieDetails
