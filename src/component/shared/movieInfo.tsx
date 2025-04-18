import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function MovieInfo({ movie }: { movie: Movie }) {
    return (
        <>
            <div className="flex-shrink-0">
                <img
                    src={movie.poster && movie.poster !== "N/A" && movie.poster !== "\\N" ? movie.poster : "/default-image.png"}
                    onError={(e) => {
                        e.currentTarget.src = '/default-image.png';
                    }}
                    alt={movie.title}
                    className="w-full max-w-xs lg:max-w-sm rounded-2xl shadow-2xl ring-2 ring-red-600"
                />
            </div>
            <div className="flex-1">
                <p className="text-red-400 text-xl mb-4">
                    {movie.released === "N/A" || movie.released == "\\N" ? movie.year : movie.released}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base mb-8">
                    <div>
                        <p className="text-gray-400 mb-1">Genre</p>
                        <div className="flex flex-wrap gap-2">
                            {movie.genre?.split(",").map((genre, index) => (
                                <span
                                    key={index}
                                    className="bg-red-700 text-white text-xs px-3 py-1 rounded-full shadow-sm font-netflix-light uppercase "
                                >
                                    {genre.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400">Director</p>
                        <p className="font-semibold font-netflix-light uppercase">
                            {movie.director != "N/A" ? movie.director : "Not Available"}</p>
                    </div>
                    <div>
                        <p className="text-gray-400">Runtime</p>
                        <p className="font-semibold font-netflix-light uppercase">
                            {movie.runtime != "N/A" ? movie.runtime : "Not Available"}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-400">Language</p>
                        <p className="font-semibold font-netflix-light uppercase">
                            {movie.language != "N/A" ? movie.language : "Not Available"}
                        </p>
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Plot</h2>
                    <p className="text-gray-500 leading-relaxed">{movie.plot}</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Cast</h2>
                    <div className="flex flex-wrap gap-2 text-sm">
                        {movie.actors.split(",").map((actor, index) => {
                            const trimmed = actor.trim();
                            const isNicolas = trimmed.toLowerCase() === "nicolas cage";
                            return (
                                <span
                                    key={index}
                                    className={`${isNicolas
                                        ? "text-green-400 font-netflix-light uppercase"
                                        : "text-gray-500 font-netflix-light uppercase"
                                        }`}  >
                                    {trimmed}
                                    {index < movie.actors.split(",").length - 1 && ","}
                                </span>
                            );
                        })}
                    </div>
                    <h2 className="text-xl font-semibold mb-1">IMDb Rating</h2>
                    <p className="text-yellow-400">
                        {movie.ratings.length > 0 ? <> {movie.ratings?.[0]?.Source || "IMDb"}:   <FontAwesomeIcon icon={faStar} className="text-yellow-400 mx-1" />
                            {movie.ratings?.[0]?.Value || "N/A"}</> : "Rating not available"}

                    </p>
                </div>
            </div>
        </>
    )
}

export default MovieInfo