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

export async function getMoviesDetail(movieId: number) {
  let response = await axios.get(Routes.ROUTES.MOVIES_DETAIL(movieId), {
    timeout: Routes.ROUTES.FETCH_TIMEOUT
  }).catch(error => {
    return{
      status: false,
      data: error.response.data
    }
  })
  return response.data
};

export async function getCastMovies(movieId: number) {
  let response = await axios.get(Routes.ROUTES.CAST_MOVIES(movieId), {
    timeout: Routes.ROUTES.FETCH_TIMEOUT
  }).catch(error => {
    return{
      status: false,
      data: error.response.data
    }
  })
  return response.data.cast
};