import React, { Component } from 'react'
import './App.css'
import Movies from '../Movies/Movies'
import NavBar from '../NavBar/NavBar'
import MovieDetails from '../MovieDetails/MovieDetails'
import About from '../About/About'
import Error from '../Error/Error'
import MovieSlider from '../Slider/Slider'
import { Route, Switch } from 'react-router-dom'
import { getAllMovies, getSingleMovie } from '../../apiCalls'

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
    getSingleMovie(579583)
    .then(movieOne => this.setState({ slideOne: movieOne.movie}))
    getSingleMovie(337401)
    .then(movieTwo => this.setState({ slideTwo: movieTwo.movie}))
    getSingleMovie(500840)
    .then(movieThree => this.setState({ slideThree: movieThree.movie}))
    .catch(error => this.setState({ error: error }))
  }

  displayMovies = () => {
    if (this.state.foundMovies.length > 0) {
      return (
        <div className="search-results">
        <Movies movies={this.state.foundMovies} />
        <button className="clear-button" onClick={() => this.clearSearch()}>Clear Search</button>
        </div>
      )
    } else if (this.state.foundMovies.length === 0 && this.state.hasSearched === true) {
      return (
        <div className="error-search">
        <h2>It doesn't look like we've reviewed that movie, yet! Try another title.</h2>
        <button className="clear-button" onClick={() => this.clearSearch()}>Clear Search</button>
        </div>
      )
    } else {
      return (
        <>
        <MovieSlider
        slideOne={this.state.slideOne}
        slideTwo={this.state.slideTwo}
        slideThree={this.state.slideThree}
        displayMovieDetails={this.displayMovieDetails}
        />
        <Movies movies={this.state.movies} />
        </>
      )
    }
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  findMovie = () => {
    const tryAgain = <p>Oh no!</p>
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
