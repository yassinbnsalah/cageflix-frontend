import React from 'react'

function Pagination({ page, setPage, totalPages }:
  { page: number, setPage: React.Dispatch<React.SetStateAction<number>>, totalPages: number }) {

  return (
    <div className="flex justify-center items-center space-x-6 mt-10">
      <button
        className="px-5 py-2 rounded-full bg-red-600 text-white font-netflix hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"

        onClick={() => {
          setPage((p) => Math.max(1, p - 1));
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        disabled={page === 1}
      >
        ← Previous
      </button>

      <span className="text-lg font-semibold font-netflix">
        Page {page} of {totalPages}
      </span>

      <button
        className="px-5 py-2 rounded-full bg-red-600 font-netflix text-white hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setPage((p) => Math.min(totalPages, p + 1));
         
        }}
        disabled={page === totalPages}
      >
        Next →
      </button>
    </div>
  )
}

export default Pagination