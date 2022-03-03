import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ submitSearch, handleChange, value }) => {

  return (
    <section className="nav-bar-container">
      <div>
        <NavLink to="/">
          <h1 className="title">🎥 RUDY & JOHNSON</h1>
        </NavLink>
      </div>
      <div>
        <NavLink to="/about" className="about-link">ABOUT US</NavLink>
      </div>
      <div className="search-container">
        <form className="search-form">
          <label>
            <input className="form-input"
            type="text"
            value={value}
            placeholder="Search movies here..."
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
