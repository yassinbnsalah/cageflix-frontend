"use client"
import MovieCard from "@/component/movieCard";
import SearchComp from "@/component/search";
import CardLoad from "@/component/shared/cardLoader";
import GenreFilter from "@/component/shared/genreFilter";
import Navbar from "@/component/shared/navbar";
import Pagination from "@/component/shared/pagination";
import TopMovies from "@/component/shared/topmovies";
import { faFilm, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [topratedMovies, setTopratedMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch movies data from the backend
  const fetchMovies = async (pageNum = 1) => {
    setLoading(true);
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_CAGEFILE + `/api/cageflix?page=${pageNum}&limit=8`
      );

      setMovies(res.data.results);
      setPage(res.data.page);
      setTotalPages(res.data.total_pages);
      setTopratedMovies(res.data.top_rated_movies);
    } catch (error) {
      console.error("Failed to fetch Cageflix data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-8xl font-netflix text-center">Cageflix</h1>
        <h1 className="text-1xl font-netflix-light text-center uppercase">
          Netflix-like library of  <span className="text-green-700"> Nicolas Cage </span> movies and shows.
        </h1>

        <div className="flex items-center justify-center py-4 px-6">
          <SearchComp />
        </div>

        <div className="items-center  py-4 px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> Top Rated Movies</h2>
          <TopMovies movies={topratedMovies} />
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <CardLoad key={i} />
            ))}
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-semibold text-center mb-8">
              <FontAwesomeIcon icon={faFilm} className="text-yellow-400" /> All Movies & Shows </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.map((movie) => (
                <MovieCard key={movie.tconst} movie={movie} />
              ))}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )}
      </div>
    </>
  );
}
