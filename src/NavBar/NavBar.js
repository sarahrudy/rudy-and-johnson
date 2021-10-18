import React, { Component } from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h1 className="title">RUDY & JOHNSON</h1>
      <div className="search-container">
        <p className="navBar-p">Your source for credible cinema reviews</p>
        <form className="search-form">
          <label className="form-label">
            <input
            type="text"
            placeholder="Start your search here."
            name="searchTerm"
            />
            </label>
            <button className="searchBtn">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default NavBar
