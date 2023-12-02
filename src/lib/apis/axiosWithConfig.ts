import axios from "axios";
import { getCookie } from "cookies-next";

interface Queries {
  session_id?: string;
}

let session_id = getCookie("sessionID") ?? "";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token: string) => {
  session_id = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  let queries: Queries = {};

  if (session_id !== "") {
    queries["session_id"] = session_id;
  }

  axiosConfig.baseURL = "https://api.themoviedb.org/3/";
  axiosConfig.params = {
    ...axiosConfig.params,
    ...queries,
  };
  axiosConfig.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDVlZTVkOGI1OGY3MzNhZTc2MmZkOTdmZWNkNDNhZCIsInN1YiI6IjY0ZTI1YmIzNjVlMGEyMDEzOWZmMTcyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0jy8Y1DXQoQ-ucSlpKWEn7CzXUsbiTzip-E6ZrNdVmU`;

  return axiosConfig;
});

export default axiosWithConfig;