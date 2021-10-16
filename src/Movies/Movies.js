import React from 'react'
import './Movies.css'
import MovieCard from '../MovieCard/MovieCard'

const Movies = ({ movies, displayMovieDetails }) => {
  const movieCard = movies.map(movie => {
    return (
    <div className="movies">
      <MovieCard
        id={ movie.id }
        poster_path={ movie.poster_path }
        title={ movie.title }
        key={ movie.id }
        displayMovieDetails={ displayMovieDetails }
      />
    </div>
    )
  })
  return <div className="movies-container">{movieCard}</div>
}



export default Movies
