"use client"

import Navbar from '@/component/shared/navbar'
import axios from 'axios';
import { log } from 'console';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function DetailMovie() {
    const { tconst } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);
    const fetchMovie = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/cageflix/${tconst}`);
            console.log(res.data);
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
                <div className="bg-black text-white min-h-screen py-10 px-4 md:px-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">

                        <div className="flex-shrink-0 relative">

                            <img
                                src={movie.Poster ? movie.Poster : "/default-image.png"}
                                alt={movie.title}
                                className="w-full max-w-xs lg:max-w-sm rounded-2xl shadow-2xl ring-2 ring-red-600"
                            />



                        </div>

                        <div className="flex-1">
                            <h1 className="text-4xl font-bold mb-2">{movie.Title}</h1>
                            <p className="text-red-400 text-xl mb-6">{movie.Year}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base mb-8">
                                <div>
                                    <p className="text-gray-400">Genre:</p>
                                    <p className="font-medium">{movie.Genre}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Director:</p>
                                    <p className="font-medium">{movie.Director}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Runtime:</p>
                                    <p className="font-medium">{movie.Runtime}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Language:</p>
                                    <p className="font-medium">{movie.Language}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">Plot</h2>
                                <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">Cast</h2>
                                <div className="text-gray-300 flex flex-wrap gap-2">
                                    {movie.Actors.split(",").map((actor, index) => {
                                        const trimmedActor = actor.trim();
                                        const isNicolas = trimmedActor.toLowerCase() === "nicolas cage";

                                        return (
                                            <span
                                                key={index}
                                                className={isNicolas ? "text-green-600 font-bold" : ""}
                                            >
                                                {trimmedActor}
                                                {index < movie.Actors.split(",").length - 1 && ","}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-1">IMDb Rating</h2>
                                <p className="text-yellow-400">{movie.Ratings[0]?.Source}: ⭐{movie.imdbRating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    )
}

export default DetailMovie