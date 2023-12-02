'use client'

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import MovieCard from "@/components/movie-card";
import { Response } from "@/lib/types/api";
import axios from "axios";

const getData = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?page=1`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDVlZTVkOGI1OGY3MzNhZTc2MmZkOTdmZWNkNDNhZCIsInN1YiI6IjY0ZTI1YmIzNjVlMGEyMDEzOWZmMTcyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0jy8Y1DXQoQ-ucSlpKWEn7CzXUsbiTzip-E6ZrNdVmU",
      },
    }
  );
  return result.data as Response;
};

const Movie = async () => {

  const datas = await getData();

  return (
    <div className="w-full h-full">
      <header className="py-6 px-4 text-center">
        <h1 className="text-4xl font-bold">Movies</h1>
      </header>
      <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {datas.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movie;

