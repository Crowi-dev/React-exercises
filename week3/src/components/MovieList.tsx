import React, { useState } from 'react';
import { useMovieStore } from '../store/useMovieStore';

export function MovieList() {
  const movies = useMovieStore((state) => state.movies);
  const toggleWatched = useMovieStore((state) => state.toggleWatched);

  const [filterType, setFilterType] = useState<'all' | 'watched' | 'unwatched'>('all');

  let filteredMovies;

  if (filterType === 'watched') {
    filteredMovies = movies.filter((m) => m.watched);
  } else if (filterType === 'unwatched') {
    filteredMovies = movies.filter((m) => !m.watched);
  } else {
    filteredMovies = movies;
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow mt-4">
      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilterType('all')}>All</button>
        <button onClick={() => setFilterType('watched')}>Watched</button>
        <button onClick={() => setFilterType('unwatched')}>Unwatched</button>
      </div>

      <ul className="space-y-2">
        {filteredMovies.map((movie) => (
          <li key={movie.id} className="flex justify-between items-center border p-2 rounded">
            <span>
              {movie.title} {movie.watched ? "✅" : "❌"}
            </span>
            <button
              onClick={() => toggleWatched(movie.id)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}