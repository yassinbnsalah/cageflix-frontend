"use client";

import Loading from "@/component/shared/loading";
import MovieInfo from "@/component/shared/movieInfo";
import Navbar from "@/component/shared/navbar";
import TrailerComp from "@/component/shared/trailerComp";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function DetailMovie() {
    const { tconst } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);
    // Fetch movie data from the backend using the tconst parameter
    const fetchMovie = async () => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_CAGEFILE}/api/cageflix/${tconst}`
            );
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
            <Loading />
        );
    }

    const trailerKey = movie.trailers?.[0]?.key;
    const trailerTitle = movie.trailers?.[0]?.name || "Trailer";

    return (
        <>
            <Navbar />
            <div className="min-h-screen py-10 px-4 md:px-10">
                <div className="justify-center items-center flex flex-col mb-10">
                    <h1 className="text-4xl font-netflix mb-2">
                        {movie?.title ?? "Untitled Movie"}{movie?.year ? ` - ${movie.year}` : ""}
                    </h1>
                    <Link
                        href={`https://www.imdb.com/fr/title/${tconst}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 text-sm mb-4 flex items-center gap-2"
                    >
                        IMDb page
                    </Link>
                </div>


                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
                    <MovieInfo movie={movie} />
                </div>
                <div className="justify-center items-center flex flex-col mt-10">

                    {trailerKey && (
                        <>   <h2 className="text-3xl font-netflix mb-4">Official Trailer</h2>
                            <TrailerComp
                                trailerTitle={trailerTitle}
                                trailerKey={trailerKey}
                            /></>
                    )}</div> 
            </div>
        </>
    );
}

export default DetailMovie;
