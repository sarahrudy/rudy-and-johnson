import React, { Component } from 'react'
import './App.css'
import Movies from '../Movies/Movies'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData
     
    }
  }

  render() {
    return (
      <main className="App">
        <Movies />
      </main>
    )
  }
}

export default App;
