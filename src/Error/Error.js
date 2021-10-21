import React from 'react'
import './Error.css'
import brokenMovie from '../Images/broken-movie.png'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-container'>
      <p className='error-message'>404: Page Not Found</p>
      <img src={ brokenMovie } alt="page not found" className='page-not-found'></img>
      <Link to='/'><button className="go-back-to-movies">GO BACK TO ALL MOVIES</button></Link>
    </div>
  )
}

export default Error