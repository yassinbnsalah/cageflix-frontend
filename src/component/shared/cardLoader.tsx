import React from 'react'
import Loading from './loading'

function CardLoad() {
    return (
        <div className="animate-pulse bg-dark-900 rounded-lg  shadow-md">
      <div className="h-72 bg-dark-600 w-full" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-dark-300 rounded w-3/4" />
        <div className="h-4 bg-dark-300 rounded w-1/2" />
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-red-600 mb-4"></div>
      </div>
    </div>
    )
}

export default CardLoad