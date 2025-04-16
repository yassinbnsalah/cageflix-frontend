import Link from 'next/link'
import React from 'react'

function MovieCard({ movie }: any) {
    return (
        <div key={movie.tconst} className="bg-white rounded-xl shadow p-4">
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-md"
            />  
            <Link href={`/movie/${movie.tconst}`}>
                <h2 className="cursor-pointer text-red-500 hover:underline">{movie.title}</h2>
            </Link>

            <p className="text-gray-600 text-sm">{movie.year}</p>
            <p className="text-gray-500 text-sm">{movie.genres}</p>
            <p className="text-gray-400 text-xs">Runtime: {movie.runtime} mins</p>
        </div>
    )
}

export default MovieCard