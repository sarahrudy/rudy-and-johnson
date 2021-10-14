import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({ movie }) => {
  console.log(movie)
  return (
    <article className="movie-details" id={movie[0].id}>
    <h3>{movie[0].title}</h3>
      <img src={movie[0].backdrop_path} alt=''/>
      <p>{movie[0].release_date}</p>
    </article>
  )
}


export default MovieDetails
