import React, { Component } from 'react'
import './App.css'
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieDetails from '../MovieDetails/MovieDetails'
import { getAllMovies, getSingleMovie } from '../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.submitSearch = this.submitSearch.bind(this)
  
    this.state = {
      movies: [],
      currentMovie: [],
      searchTerm: '',
      foundMovies: [],
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

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  findMovie = () => {
    const searchRegex = new RegExp(this.state.searchTerm, 'i')
    this.setState({ foundMovies: this.state.movies.filter(movie => movie.title.match(searchRegex))})
  }

  submitSearch = (event) => {
    event.preventDefault() 
    this.findMovie()
  }

  render() {
    return (
      <main className='App'>
        <NavBar submitSearch={this.submitSearch} handleChange={this.handleChange}/>
        {this.state.currentMovie && <MovieDetails movie={ this.state.currentMovie} />}
        {this.state.movies.length > 1 && <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails} />}
      </main>
    )
  }
}

export default App;
