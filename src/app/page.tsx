"use client"
import MovieCard from "@/component/movieCard";
import Navbar from "@/component/shared/navbar";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {


  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (pageNum = 1) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/cageflix?page=${pageNum}&limit=8`);
      console.log(res.data);

      setMovies(res.data.results);
      setPage(res.data.page);
      setTotalPages(res.data.total_pages);
    } catch (error) {
      console.error('Failed to fetch Cageflix data:', error);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto p-4">

        <h1 className="text-3xl font-bold mb-6 text-center">🎬 Cageflix Library</h1>
        <div className="flex items-center justify-center py-4 px-6">
  <div className="relative w-full max-w-md">
    <input
      type="text"
      placeholder="Search Cageflix..."
      className="w-full rounded-full border border-gray-600 bg-black px-5 py-2 pl-10 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    <div className="absolute left-3 top-2.5 text-gray-400">
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
        />
      </svg>
    </div>
  </div>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.tconst} movie={movie} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            ← Previous
          </button>
          <span className="text-lg font-medium">
            Page {page} of {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next →
          </button>
        </div>
      </div>
    </>
  );
}
