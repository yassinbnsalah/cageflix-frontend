import React from 'react'

// This component is used to show the trailer of the movie
function TrailerComp({ trailerKey, trailerTitle }:
    { trailerKey: string, trailerTitle: string }) {
    return (
        <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg my-6 mx-auto">
        <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title={trailerTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>
        
    )
}

export default TrailerComp