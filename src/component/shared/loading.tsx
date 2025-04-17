import React from 'react'

function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-400">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-red-600 mb-4"></div>
    <p className="text-lg font-medium">Loading movie details...</p>
  </div>
  
  )
}

export default Loading