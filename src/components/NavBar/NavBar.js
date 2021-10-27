import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import whiteMovieReel from '../../images/white-movie-reel.png'
import './NavBar.css'

const NavBar = ({ submitSearch, handleChange, value }) => {

  return (
    <section className="nav-bar-container">
      <div>
        <NavLink to="/">
          <h1 className="title"> 🎥 RUDY & JOHNSON</h1>
        </NavLink>
          <p className='navBar-p'>Movie reviews you can trust</p>
      </div>
      <div className="about-us-container">
        <NavLink to="/about" className="about-link">ABOUT US</NavLink>
      </div>
      <div className="search-container">
        <form className="search-form">
          <label>
            <input className="form-input"
            type="text"
            value={value}
            placeholder="Search movies here."
            name="searchTerm"
            onChange={handleChange}
            />
          </label>
          <button className="searchBtn" onClick={(event) => submitSearch(event)}>SUBMIT</button>
        </form>
      </div>
    </section>
  )
}


export default NavBar
