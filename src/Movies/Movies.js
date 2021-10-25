import React from 'react'
import './Movies.css'
import MovieCard from '../MovieCard/MovieCard'
import { NavLink } from 'react-router-dom'

const Movies = ({ movies, displayMovieDetails }) => {
  const movieCard = movies.map(movie => {
    return (
      <div className="movies">
        <NavLink to={`/movies/${movie.id}`}>
        <MovieCard
          id={ movie.id }
          poster_path={ movie.poster_path }
          title={ movie.title }
          average_rating= { `${Math.round(movie.average_rating)}/10 ⭐️` }
          key={ movie.id }
          displayMovieDetails={displayMovieDetails}
        />
        </NavLink>
      </div>
      )
   })
  return <div className="movies-container">{movieCard}</div>
}

export default Movies
