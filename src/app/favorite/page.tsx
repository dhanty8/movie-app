import MovieCard from "@/components/movie-card";
import React from "react";
import { cookies } from "next/headers";
import { getFavoriteMovies } from "@/lib/apis/movie";

const Favorite = async () => {
  const cookieStore = cookies();
  const userID = cookieStore.get("userID");
  const sessionID = cookieStore.get("sessionID");
  const datas = await getFavoriteMovies(
    userID?.value ?? "",
    sessionID?.value ?? ""
  );

  return (
    <div className="w-full h-full">
      <header className="py-6 px-4 text-center">
        <h1 className="text-4xl font-bold">Favorite Movies</h1>
      </header>
      <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {datas.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
