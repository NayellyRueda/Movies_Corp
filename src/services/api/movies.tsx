import * as Routes from "./apiRoutes";
import axios from 'axios';

export async function getMovies() {
  let response = await axios.get(Routes.ROUTES.MOVIES, {
    timeout: Routes.ROUTES.FETCH_TIMEOUT
  }).catch(error => {
    return{
      status: false,
      data: error.response.data
    }
  })
  return response
};

export async function getMoviesDetail(movieId: string) {
  let response = await axios.get(Routes.ROUTES.MOVIES_DETAIL(movieId), {
    timeout: Routes.ROUTES.FETCH_TIMEOUT //No, yo lo volvi a agregar
  }).catch(error => {
    return{
      status: false,
      data: error.response.data
    }
  })
  return response
};

export async function getCastMovies(movieId: string) {
  let response = await axios.get(Routes.ROUTES.CAST_MOVIES(movieId), {
    timeout: Routes.ROUTES.FETCH_TIMEOUT
  }).catch(error => {
    return{
      status: false,
      data: error.response.data
    }
  })
  return response
};