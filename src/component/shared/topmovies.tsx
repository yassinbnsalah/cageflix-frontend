import React from 'react'
import MovieCard from '../movieCard'

function TopMovies({ movies }: { movies: Movie[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
                <div key={movie.tconst} className="flex justify-center">
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    )
}
export default TopMovies
