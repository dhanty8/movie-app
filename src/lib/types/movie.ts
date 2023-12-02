export interface Movie {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export interface NowPlaying extends Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
}

export interface MovieDetail extends Movie {
    budget: number;
    genres: Genre[];
    runtime: number;
}

export interface Genre {
    id: number
    name: string
  }