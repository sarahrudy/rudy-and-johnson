import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({ submitSearch, handleChange, value }) => {

  return (
    <div className="nav-bar">
      <div className="title-container">
        <NavLink to="/">
        <h1 className="title">RUDY & JOHNSON</h1>
        </NavLink>
        <NavLink to="/about" className="about-link">ABOUT US</NavLink>
      </div>
      <div className="search-container">
        <p className="navBar-p">Your source for credible cinema reviews</p>
        <form className="search-form">
          <label className="form-label">
            <input
            type="text"
            value={value}
            placeholder="Start your search here."
            name="searchTerm"
            onChange={handleChange}
            />
            </label>
            <button className="searchBtn" onClick={(event) => submitSearch(event)} >submit</button>
          </form>
        </div>
    </div>
  )
}


export default NavBar
