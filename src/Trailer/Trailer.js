import React from 'react'
import './Trailer.css' 

const Trailer = ({ embedId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}

Trailer.propTypes = {
  embedId: PropTypes.string.isRequired 
}

export default Trailer