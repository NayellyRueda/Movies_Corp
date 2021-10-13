import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: []
    },
    reducers: {
        addMovie(state, action: PayloadAction<string>) {
            if(!state.movies.includes(action.payload)) {
                state.movies.push(action.payload);
            }
        },

        removeMovie(state, action: PayloadAction<string>) {
            const index = state.movies.findIndex(el => el == action.payload);
            state.movies.splice(index, 1);
        },
    }
})

export const { addMovie, removeMovie } = moviesSlice.actions

export default moviesSlice.reducer