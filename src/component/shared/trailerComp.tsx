import React from 'react'

function TrailerComp({ trailerKey, trailerTitle }:
    { trailerKey: string, trailerTitle: string }) {
    return (
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg my-6">
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