"use client";

import Navbar from "@/component/shared/navbar";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function DetailMovie() {
    const { tconst } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);

    const fetchMovie = async () => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_CAGEFILE}/api/cageflix/${tconst}`
            );
            console.log("Movie data:", res.data);

            setMovie(res.data);
        } catch (error) {
            console.error("Failed to fetch movie data:", error);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [tconst]);

    if (!movie) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-400">
                Loading movie details...
            </div>
        );
    }

    const trailerKey = movie.trailers?.[0]?.key;
    const trailerTitle = movie.trailers?.[0]?.name || "Trailer";

    return (
        <>
            <Navbar />
            <div className="min-h-screen py-10 px-4 md:px-10">
                <h1 className="text-4xl font-netflix mb-2">{movie.title} - {movie.year}</h1>
                <Link
                    href={`https://www.imdb.com/fr/title/${tconst}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 text-sm mb-4 flex items-center gap-2"
                >
                    IMDb page
                </Link>


                {trailerKey && (
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
                )}


                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">

                    <div className="flex-shrink-0">
                        <img
                            src={movie.poster || "/default-image.png"}
                            alt={movie.title}
                            className="w-full max-w-xs lg:max-w-sm rounded-2xl shadow-2xl ring-2 ring-red-600"
                        />
                    </div>


                    <div className="flex-1">

                        <p className="text-red-400 text-xl mb-4">{movie.released}</p>

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
                                <p className="font-semibold font-netflix-light uppercase">{movie.director}</p>
                            </div>
                            <div> 
                                <p className="text-gray-400">Runtime</p>
                                <p className="font-semibold font-netflix-light uppercase">{movie.runtime}</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Language</p>
                                <p className="font-semibold font-netflix-light uppercase">{movie.language}</p>
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
                                                }`}
                                        >
                                            {trimmed}
                                            {index < movie.actors.split(",").length - 1 && ","}
                                        </span>
                                    );
                                })}
                            </div>

                            <h2 className="text-xl font-semibold mb-1">IMDb Rating</h2>
                            <p className="text-yellow-400">
                                {movie.ratings?.[0]?.Source || "IMDb"}: ⭐{" "}
                                {movie.ratings?.[0]?.Value || "N/A"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailMovie;
