"use client";
import Navbar from '@/component/shared/navbar';
import CardLoad from '@/component/shared/cardLoader';
import MovieCard from '@/component/movieCard';
import Pagination from '@/component/shared/pagination';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

function Watchlist() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchWatchlist = async (pageNum = 1) => {
        try {
            setLoading(true);
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_CAGEFILE}/api/watchlist?page=${pageNum}&limit=8`);
            setMovies(res.data.results);
            setPage(res.data.page);
            setTotalPages(res.data.total_pages);
        } catch (error) {
            console.error("Failed to fetch watchlist", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWatchlist(page);
    }, [page]);

    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto p-4">
                <h1 className="text-8xl font-netflix text-center">Cageflix</h1>
                <h1 className="text-1xl font-netflix-light text-center uppercase">
                    Your <span className="text-green-700">Nicolas Cage</span> Watchlist
                </h1>
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <CardLoad key={i} />
                        ))}
                    </div>
                ) : (
                    <>
                        {movies.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {movies.map((movie) => (
                                        <MovieCard key={movie.tconst} movie={movie} />
                                    ))}
                                </div>
                                <Pagination page={page} setPage={setPage} totalPages={totalPages} />
                            </>
                        ) : (
                            <p className="text-center text-gray-500 mt-10 text-xl flex flex-col items-center gap-4">
                                <FontAwesomeIcon icon={faHeartBroken} className="text-4xl text-red-500" />
                                Your watchlist is empty
                            </p>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default Watchlist;
