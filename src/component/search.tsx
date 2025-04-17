
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function SearchComp() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {

        if (!query.trim()) {
            setResults([])
            return
        }
        const fetchResults = async () => {

            const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_CAGEFILE+`/api/search?q=${query}`)
            const data = await res.json()
            console.log(data)
            setResults(data)
        }

        fetchResults()
    }, [query])
    return (<>
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Search in Cageflix..."
                className="w-full rounded-full border border-gray-600  px-5 py-2 pl-10  placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
            <ul className="mt-4 max-h-60 overflow-auto bg-black-800 rounded-lg shadow-lg border border-gray-600">
                {results.map((movie: Movie, idx) => (
                    <li key={idx} className=" mb-2 px-4 py-2 hover:bg-red-600 rounded-md transition-all">
                        <Link href={`/movie/${movie.tconst}`} className="flex items-center">
                            <img
                                src={movie.poster || 'default-image.png'}
                                alt={movie.title}
                                className="w-12 h-16 rounded-md object-cover mr-3"
                            />
                            <span className="ml-2 ">
                                {movie.title} — <em>{movie.genres}</em></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div></>
    )
}

export default SearchComp