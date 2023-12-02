import { MovieDetail } from "@/lib/types/movie";
import React from "react";
import axios from "axios";

const getData = async (id: string) => {
  const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDVlZTVkOGI1OGY3MzNhZTc2MmZkOTdmZWNkNDNhZCIsInN1YiI6IjY0ZTI1YmIzNjVlMGEyMDEzOWZmMTcyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0jy8Y1DXQoQ-ucSlpKWEn7CzXUsbiTzip-E6ZrNdVmU",
    },
  });
  return result.data as MovieDetail;
};

const getVideos = async (id: string) => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDVlZTVkOGI1OGY3MzNhZTc2MmZkOTdmZWNkNDNhZCIsInN1YiI6IjY0ZTI1YmIzNjVlMGEyMDEzOWZmMTcyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0jy8Y1DXQoQ-ucSlpKWEn7CzXUsbiTzip-E6ZrNdVmU",
      },
    }
  );
  return result.data.results;
};

const DetailMovie = async ({ params }: { params: { id: string } }) => {
  const datas = await getData(params.id);
  const videos = await getVideos(params.id);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <div className="max-w-screen-lg w-full p-8 rounded-lg shadow-lg">
        {videos && videos.length > 0 && (
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ paddingBottom: "56.25%", width: "100%" }}
          >
            <iframe
              title="Movie Trailer"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videos[0].key}`}
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div className="flex flex-col md:flex-row items-center mt-8">
          <img
            src={`https://image.tmdb.org/t/p/w500/${datas.poster_path}`}
            alt={datas.title}
            className="w-64 md:w-96 rounded-lg shadow-lg mb-6 md:mr-8"
          />
          <div className="max-w-screen-md w-full">
            <h1 className="text-3xl font-bold mb-4">{datas.title}</h1>
            <p className="text-lg leading-relaxed mb-6">{datas.overview}</p>
            <div className="flex items-center mb-4">
              <span className="text-gray-400 mr-2">Release Date:</span>
              <span>{datas.release_date}</span>
            </div>
            {datas.genres && datas.genres.length > 0 && (
              <div className="flex items-center mb-4">
                <span className="text-gray-400 mr-2">Genres:</span>
                <span>
                  {datas.genres.map((genre) => genre.name).join(", ")}
                </span>
              </div>
            )}
            {datas.runtime && (
              <div className="flex items-center mb-4">
                <span className="text-gray-400 mr-2">Runtime:</span>
                <span>{datas.runtime} mins</span>
              </div>
            )}
            {datas.vote_average && (
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Rating:</span>
                <span>{datas.vote_average}/10</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
