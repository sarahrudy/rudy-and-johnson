import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './Trailer.css' 

const Trailer = ({ url, trailerKey }) => {
  return (
    <div className="react-player-wrapper">
      {/* <ReactPlayer  
        className='react-player'
        url={`https://www.youtube.com/watch?v=${trailerKey}`}
        width='100%'
        height='100%'
      /> */}
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