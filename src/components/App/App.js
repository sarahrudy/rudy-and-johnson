import React, { Component } from 'react'
import './App.css'
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieDetails from '../MovieDetails/MovieDetails'
import About from '../About/About'
import Error from '../Error/Error'
import MovieSlider from '../MovieSlider/MovieSlider'
import { Route, Switch } from 'react-router-dom'
import { getAllMovies } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      foundMovies: [],
      hasSearched: false,
      slideOne: {},
      slideTwo: {},
      slideThree: {},
      error: ''
    }
  }

  componentDidMount = () => {
    getAllMovies()
    .then(data => this.setState({ movies: data.movies }))
    .catch(error => this.setState({ error: error }))
  }

  displayMovies = () => {
    if (this.state.foundMovies.length > 0) {
      return (
        <div className="search-results">
        <Movies movies={this.state.foundMovies} />
        <button className="clear-button" onClick={() => this.clearSearch()}>CLEAR SEARCH</button>
        </div>
      )
    } else if (this.state.foundMovies.length === 0 && this.state.hasSearched === true) {
      return (
        <div className="error-search">
        <h2>It doesn't look like we've reviewed that movie, yet! Try another title.</h2>
        <button className="clear-button" onClick={() => this.clearSearch()}>CLEAR SEARCH</button>
        </div>
      )
    } else {
      return (
        <>
        <MovieSlider movies={ this.state.movies }/>
        <Movies movies={this.state.movies} />
        </>
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
    this.setState({ hasSearched: true})
    this.findMovie()
  }

  clearSearch = () => {
    this.setState({ foundMovies: [] })
    this.setState({ searchTerm: ''})
    this.setState({ hasSearched: false})
  }

  render() {
    return (
      <main className='App'>
        <NavBar value={this.state.searchTerm} submitSearch={this.submitSearch} handleChange={this.handleChange}/>
        <Switch>
          <Route exact path="/movies/:id" render={({ match }) => {
            const id = parseInt(match.params.id)
            return <MovieDetails id={id} />}
          } />
          <Route exact path="/" render={this.displayMovies} />
          <Route exact path="/about" render={ About } />
          <Route path='/anna' component={() => {
            window.location.href = 'https://www.linkedin.com/in/aesprague/';
            return null;
          }}/>
          <Route path='/sarah' component={() => {
            window.location.href = 'https://www.linkedin.com/in/rudysarah/';
            return null;
          }}/>
          <Route component={ Error } />
        </Switch>
      </main>
    )
  }
}

export default App;
