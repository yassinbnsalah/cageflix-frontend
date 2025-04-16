"use client"

import Navbar from '@/component/shared/navbar'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function DetailMovie() {
    const { tconst } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);
    const fetchMovie = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/cageflix/${tconst}`);
            setMovie(res.data);
        } catch (error) {
            console.error('Failed to fetch movie data:', error);
        }
    };
    useEffect(() => {
        fetchMovie();
    }, [tconst]);
    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        (
            <>
                <Navbar />
                <div className="container mx-auto p-6">
                    <div className="flex flex-col lg:flex-row">
                        {/* Movie Poster */}
                        <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="w-60 h-auto rounded-lg shadow-xl"
                            />
                        </div>

                        {/* Movie Details */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-semibold mb-2">{movie.Title}</h1>
                            <p className="text-lg text-gray-500 mb-4">{movie.Year}</p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                                <div>
                                    <p className="font-medium text-gray-700">Genre:</p>
                                    <p>{movie.Genre}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">Director:</p>
                                    <p>{movie.Director}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">Runtime:</p>
                                    <p>{movie.Runtime}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">Language:</p>
                                    <p>{movie.Language}</p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">Plot</h2>
                                <p className="text-gray-700 mb-4">{movie.Plot}</p>

                                <h3 className="text-lg font-medium mb-2">Cast:</h3>
                                <p>{movie.Actors}</p>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-lg font-semibold">IMDb Rating</h3>
                                <p className="text-gray-500">{movie.Ratings[0]?.Source}: {movie.imdbRating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    )
}

export default DetailMovie