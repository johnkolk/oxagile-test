import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "@/types";

interface MovieState {
  loading: boolean;
  error: string | null;
  item: Movie | null;
  favorite: boolean;
}

const initialState: MovieState = {
  loading: false,
  error: null,
  item: null,
  favorite: false,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    startFetching: (state, { payload }: PayloadAction<Movie["id"]>) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, { payload }: PayloadAction<Movie>) => {
      state.loading = false;
      state.item = payload;
    },
    fetchError: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    toggleFavorite: (state) => {
      state.favorite = !state.favorite;
    },
  },
  selectors: {
    selectMovieState: (state) => state,
    selectMovie: (state) => state.item,
  },
});

export const movieActions = movieSlice.actions;
export const { selectMovieState, selectMovie } = movieSlice.selectors;

export default movieSlice.reducer;
