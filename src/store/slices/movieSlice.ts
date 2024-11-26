import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "@/types";

interface MovieState {
  loading: boolean;
  error: string | null;
  item: Movie | null;
}

const initialState: MovieState = {
  loading: false,
  error: null,
  item: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    startFetching: (state, action: PayloadAction<Movie["id"]>) => {
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
  },
  selectors: {
    selectMovieState: (state) => state,
  },
});

export const movieActions = movieSlice.actions;
export const { selectMovieState } = movieSlice.selectors;

export default movieSlice.reducer;
