import { Response } from "@/lib/types/api";
import axiosWithConfig from "../axiosWithConfig";

export const getData = async () => {
  const result = await axiosWithConfig(
    "https://api.themoviedb.org/3/movie/now_playing"
  );
  return result.data as Response;
};

export const getDataPopular = async () => {
  const result = await axiosWithConfig(
    "https://api.themoviedb.org/3/movie/popular"
  );
  return result.data as Response;
};

export const getFavoriteMovies = async (
    user_id: string,
    session_id: string
  ) => {
    try {
      const response = await axiosWithConfig.get(
        `/account/${user_id}/favorite/movies?sort_by=created_at.desc&session_id=${session_id}`
      );
  
      return response.data as Response;
    } catch (error: any) {
      throw Error("Failed to get favorite movies");
    }
  };