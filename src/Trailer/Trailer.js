import React from 'react'
import './Trailer.css' 

const Trailer = ({ trailerKey }) => {
  return (
    <div className="react-player-wrapper">
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
  )
}

export default Trailer