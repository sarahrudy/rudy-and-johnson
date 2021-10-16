import React, { Component } from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
    <h1>RUDY JOHNSON</h1>
    <form className="search-form">
        <label>
          <input
            type="text"
            placeholder="Start your search here."
            name="searchTerm"
          />
        </label>
        <button className="searchBtn">Submit</button>
        </form>
    </div>
  )
}

export default NavBar
