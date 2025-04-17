import Link from 'next/link'
import React from 'react'

function MovieCard({ movie }: any) {
    return (
        <div
            key={movie.tconst}
            className="bg-zinc-900 text-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
            <Link href={`/movie/${movie.tconst}`}>
                <img
                    src={movie.poster != "N/A"&&  movie.poster ? movie.poster : "/default-image.png"}
                    alt={movie.title}
                    className="w-full h-72 object-cover"
                />
            </Link>


            <div className="p-4 space-y-2">
                <Link href={`/movie/${movie.tconst}`}>
                    <h2 className="text-lg font-bold text-red-500 hover:underline cursor-pointer">
                        {movie.title}
                    </h2>
                </Link>
                <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{movie.year}</span>
                    <span>{movie.runtime} mins</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-300  ">
                    <div className="flex items-center gap-2 flex-wrap text-sm text-gray-300">
                        {movie.genres.split(',').map((genre: any, index: any) => (
                            <span
                                key={index}
                                className="inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-gray-500/10 ring-inset"
                            >
                                {genre.trim()}
                            </span>
                        ))}
                    </div>
                    <p >⭐{movie.rating}</p>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2">{movie.description}</p>
            </div>
        </div>
    )
}

export default MovieCard