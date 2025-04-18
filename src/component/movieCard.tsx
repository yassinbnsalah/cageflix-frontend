'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { faStar, faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieCard({ movie }: { movie: Movie }) {
    const [watchlisted, setWatchlisted] = useState(movie.watchlisted ?? false);

    const toggleWatchlist = async () => {
        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_CAGEFILE}/api/watchlist/${movie.tconst}`
            );
            setWatchlisted(!watchlisted);
        } catch (error) {
            console.error('Failed to toggle watchlist', error);
        }
    };

    return (
        <div
            key={movie.tconst}
            className="rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
            <Link href={`/movie/${movie.tconst}`}>
                <img
                    src={movie.poster !== 'N/A' && movie.poster ? movie.poster : '/default-image.png'}
                    alt={movie.title}
                    className="w-full h-72 object-cover"
                    onError={(e) => {
                        e.currentTarget.src = '/default-image.png';
                    }}
                />
            </Link>

            <div className="p-4 space-y-2">
                <div className="flex justify-between items-center">
                    <Link href={`/movie/${movie.tconst}`}>
                        <h2 className="text-lg font-bold text-red-500 cursor-pointer font-netflix-light uppercase">
                            {movie.title}
                        </h2>
                    </Link>

                    <button
                        onClick={toggleWatchlist}
                        className={`text-xl transition ${watchlisted ? 'text-green-500' : 'text-gray-400'
                            } hover:scale-110`}
                        title={watchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
                    >
                        <FontAwesomeIcon
                            icon={watchlisted ? solidHeart : regularHeart}
                            className="text-red-500 cursor-pointer"
                        />
                    </button>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{movie.year}</span>
                    <span>{movie.runtime} mins</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center gap-2 flex-wrap text-sm text-gray-300">
                        {movie.genres.split(',').map((genre: string, index: number) => (
                            <span
                                key={index}
                                className="inline-flex font-netflix-light uppercase items-center rounded-md bg-red-500 px-1 py-1 text-xs font-medium text-white ring-1 ring-gray-500/10 ring-inset"
                            >
                                {genre.trim()}
                            </span>
                        ))}
                    </div>
                    <p> <FontAwesomeIcon
                        icon={faStar}
                        className="text-yellow-500 cursor-pointer ml-3"
                    />{movie.rating}/10</p>
                </div>

                <p className="text-xs text-gray-500 line-clamp-2">{movie.description}</p>
            </div>
        </div>
    );
}

export default MovieCard;
