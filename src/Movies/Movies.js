import React from 'react'
import './Movies.css'
import MovieCard from '../MovieCard/MovieCard'
import { Link } from 'react-router-dom'

const Movies = ({ movies }) => {
  const movieCard = movies.map(movie => {
    return (
    <div className="movies">
      <Link to={`/movies/${movie.id}`}>
      <MovieCard
        id={ movie.id }
        poster_path={ movie.poster_path }
        title={ movie.title }
        average_rating= { `${Math.round(movie.average_rating)} OUT OF 10 STARS` }
        key={ movie.id }
      />
      </Link>
    </div>
    )
  })
  return <div className="movies-container">{movieCard}</div>
}



export default Movies
