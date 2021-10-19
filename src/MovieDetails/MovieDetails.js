import React from 'react'
import './MovieDetails.css'

const MovieDetails = ({ id, title, backdrop_path, release_date }) => {
  console.log(id)
  return (
    <article className="movie-details" id={id}>
    <h3>{title}</h3>
      <img src={backdrop_path} alt=''/>
      <p>{release_date}</p>
    </article>
  )
}


export default MovieDetails
