import React from 'react'
import './Trailer.css' 

const Trailer = ({ movieKey }) => {
  return (
    <div className="video-responsive">
      <iframe
        key={movieKey}
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${movieKey}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}

export default Trailer