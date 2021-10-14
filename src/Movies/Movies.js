import React from 'react'
import './Movies.css'
import MovieCard from '../MovieCard/MovieCard'
import { movieData } from '../movieData'


const Movies = ({ movies }) => {
  console.log(movies)
  const movieCard = movies.map(movie => {
    return (
    <div className="movies">
      <MovieCard
        poster_path={ movie.poster_path }
        title={ movie.title }
      />
    </div>
    )
  })
  return <div className="movies-container">{movieCard}</div>
}



export default Movies
