import React, { Component } from 'react'
import './App.css'
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieDetails from '../MovieDetails/MovieDetails'
import { getAllMovies } from '../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(data => this.setState({ movies: [...this.state.movies, ...data.movies] }))
  }

  getMovie = (id) => {
    const foundMovie = this.state.movies.filter(movie => movie.id === id)
    this.setState({movies: foundMovie})
  }

  render() {
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
