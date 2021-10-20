import React, { Component } from 'react'
import './App.css'
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieDetails from '../MovieDetails/MovieDetails'
import { Route } from 'react-router-dom'
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

  displayMovies = () => {
    if (this.state.foundMovies.length > 0) {
      return (
        <>
        <Movies movies={this.state.foundMovies} displayMovieDetails={this.displayMovieDetails}/>
        <button onClick={() => this.clearSearch()}>Clear Search</button>
        </>
      )
    } else {
      return (
        <Movies movies={this.state.movies} displayMovieDetails={this.displayMovieDetails}/>
      )
    }
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

  clearSearch = () => {
    this.setState({ foundMovies: [] })
    this.setState({ searchTerm: ''})
  }

  render() {
    return (
      <main className='App'>
        <NavBar submitSearch={this.submitSearch} handleChange={this.handleChange} />
        <Route exact path="/movies/:id" render={({ match }) => {
          const id = parseInt(match.params.id)
          return <MovieDetails movie={this.state.currentMovie} id={id} displayMovieDetails={this.displayMovieDetails}/>}
        } />
        <Route exact path="/" render={this.displayMovies} />

      </main>
    )
  }
}

export default App;
