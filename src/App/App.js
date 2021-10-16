import React, { Component } from 'react'
import './App.css'
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieDetails from '../MovieDetails/MovieDetails'
import { getAllMovies, getSingleMovie } from '../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      currentMovie: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getAllMovies()
    .then(data => this.setState({ movies: [...this.state.movies, ...data.movies] }))
  }

  displayMovieDetails = (id) => {
    getSingleMovie(id)
    .then(currentMovie => this.setState({ currentMovie: currentMovie.movie }))
  }

  render() {
    return (
      <main className='App'>
        <NavBar />
        {this.state.currentMovie && <MovieDetails movie={ this.state.currentMovie} />}
        {this.state.movies.length > 1 && <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails} />}
      </main>
    )
  }
}

export default App;
