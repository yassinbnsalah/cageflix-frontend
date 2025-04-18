import React, { useState } from 'react'

function GenreFilter() {
    const genres = ['War', 'Comedy', 'Drama', 'Crime', 'Romance','Biography', 'Fantasy','sport', 'music','adventure','thriller','Documentary','Action','Mystery'];
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false); 

  const handleGenreChange = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div className="mb-6 flex justify-center">
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-2"  onClick={() => setIsFilterOpen(!isFilterOpen)} >Filter by Genre</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {genres.map((genre) => (
          <label key={genre} className={`${isFilterOpen ? 'block' : 'hidden'} flex justify-center flex-wrap gap-4`}>
            <input
              type="checkbox"
              className="form-checkbox"
              checked={selectedGenres.includes(genre)}
              onChange={() => handleGenreChange(genre)}
            />
            <span>{genre}</span>
          </label>
        ))}
      </div>
    </div>
  </div>
  )
}

export default GenreFilter