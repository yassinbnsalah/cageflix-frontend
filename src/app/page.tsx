"use client"
import MovieCard from "@/component/movieCard";
import SearchComp from "@/component/search";
import Navbar from "@/component/shared/navbar";
import Pagination from "@/component/shared/pagination";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {


  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (pageNum = 1) => {
    try {
      console.log("***************"+process.env.BACKEND_CAGEFILE);
      const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_CAGEFILE+`/api/cageflix?page=${pageNum}&limit=8`);
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

        <h1 className="text-4xl font-netflix text-white  text-center">Cageflix</h1>
        <h1 className="text-1xl font-netflix text-white text-center">
          A Netflix-style movie library dedicated to the iconic performances of Nicolas Cage.
        </h1>

        <div className="flex items-center justify-center py-4 px-6">
          <SearchComp></SearchComp>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.tconst} movie={movie} />
          ))}
        </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} ></Pagination> 

      </div>
    </>
  );
}
