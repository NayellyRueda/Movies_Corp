export const DNS = {
    local: '',
    host:`https://api.themoviedb.org`,
    key: '1c257f62957f65b10c958464a68d8e47'
}

const FETCH_TIMEOUT = 20000

interface Routes {
    FETCH_TIMEOUT: number;
    MOVIES: string;
    MOVIES_POPULAR: string;
    MOVIES_DETAIL: Function;
    CAST_MOVIES: Function;
}

/**
 * Route definition which consults endpoints   
 */

export const ROUTES:Routes = {
    FETCH_TIMEOUT,
    MOVIES: `${DNS.host}/3/movie/top_rated?api_key=${DNS.key}`,
    MOVIES_POPULAR: `${DNS.host}/3/movie/popular?api_key=${DNS.key}`,
    MOVIES_DETAIL: ( movieId: number ) => `${DNS.host}/3/movie/${movieId}?api_key=${DNS.key}`,
    CAST_MOVIES: ( movieId: number ) => `${DNS.host}/3/movie/${movieId}/credits?api_key=${DNS.key}`

};