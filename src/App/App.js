import React, { Component } from 'react'
import './App.css'
import Movies from '../Movies/Movies'
import { movieData } from '../movieData'
import NavBar from '../NavBar/NavBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies

    }
  }

  render() {
    console.log(this.state.movies)
    return (
      <main className='App'>
        <NavBar />
        <Movies className="cards" movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
