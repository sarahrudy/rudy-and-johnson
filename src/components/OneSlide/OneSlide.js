import React from 'react';
import './OneSlide.css';
import { Link } from 'react-router-dom';

const OneSlide = ({ title, image, id }) => {
  return (
    <Link to={`/movies/${id}`} tabIndex="0">
      <div className="one-slide">
        <img className="one-slide__img" src={image} alt={title} />
        <p className="one-slide__title">{title}</p>
      </div>
    </Link>
  )
}

export default OneSlide