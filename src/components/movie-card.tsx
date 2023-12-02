import Link from "next/link";
import { Movie } from "@/lib/types/movie";
import React from "react";

interface Props {
  movie: Movie;
}

const MovieCard = (props: Props) => {
  const { movie } = props;
  return (
    <Link href={`/movies/${movie.id}`} className="relative group overflow-hidden rounded-lg shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center text-center">
        <h2 className="text-white text-lg font-semibold">{movie.title}</h2>
      </div>
    </Link>
  );
};

export default MovieCard;
