export const DNS = {
    local: '',
    host:`https://api.themoviedb.org`,
    key: '1c257f62957f65b10c958464a68d8e47'
}

const FETCH_TIMEOUT = 20000

interface Routes {
    FETCH_TIMEOUT: number;
    MOVIES: string;
    MOVIES_DETAIL: Function;
    CAST_MOVIES: Function;
}

export const ROUTES:Routes = {
    FETCH_TIMEOUT,
    MOVIES: `${DNS.host}/3/movie/top_rated?api_key=${DNS.key}`,
    MOVIES_DETAIL: ( movieId: number ) => `${DNS.host}/3/movie/${movieId}?api_key=${DNS.key}`,//Esta es super lento el emulador
    CAST_MOVIES: ( movieId: number ) => `${DNS.host}/3/movie/${movieId}/credits?api_key=${DNS.key}`
};