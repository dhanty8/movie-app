import { getData, getDataPopular } from "@/lib/apis/movie";

import MovieCard from "@/components/movie-card";
import React from "react";

const Movie = async () => {
  const nowPlaying = await getData();
  const popularMovies = await getDataPopular();

  return (
    <div className="w-full h-full">
      <section className="py-6 px-4 text-center">
        <h1 className="text-4xl font-bold">Now Playing</h1>
      </section>
      <div className="container mx-auto px-4 py-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {nowPlaying.results.slice(0, 12).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <section className="py-6 px-4 text-center">
        <h1 className="text-4xl font-bold">Popular Movies</h1>
      </section>
      <div className="container mx-auto px-4 py-8 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {popularMovies.results.slice(0, 12).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
