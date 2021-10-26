import React from 'react'
import './Trailer.css' 

const Trailer = ({ trailerKey, toggleTrailer }) => {
  return (
    <div className="trailer">
      <div className="trailer-container">
      <button onClick={toggleTrailer}>X</button>
      <iframe className="iframe"
        key={trailerKey}
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      </div>
    </div>
  )
}

export default Trailer