import React, { Component } from 'react'
import './App.css'
import Movies from '../Movies/Movies'
import { movieData } from '../movieData'
import NavBar from '../NavBar/NavBar'
import MovieDetails from '../MovieDetails/MovieDetails'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      movieDetails: {}

    }
  }

  getMovie(id) {
    const foundMovie = this.state.movies.find(movie =>
      movie.id === id)
    this.setState({movies: foundMovie})
    // this.setState({movies:[...this.state.movies, this.state.movieDetails]})
  }

  render() {
    console.log(this.state.movies)
    return (
      <main className='App'>
        <NavBar />
        {this.state.movies.length === 1 && <MovieDetails movie={this.state.movies} />}
        {this.state.movies.length > 1 && <Movies movies={this.state.movies} getMovie={this.getMovie} />}
      </main>
    )
  }
}

export default App;
