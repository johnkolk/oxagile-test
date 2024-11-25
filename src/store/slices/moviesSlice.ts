import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterItemEnum, FilterItemType, Movie } from "@/types";

interface MoviesState {
  loading: boolean;
  error: string | null;
  movies: Movie[];
  filter: FilterItemType;
}

const initialState: MoviesState = {
  loading: false,
  error: null,
  movies: [],
  filter: FilterItemEnum.Popular,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    startFetching: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action: PayloadAction<Movie[]>) => {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchError: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    setFilter: (state, action: PayloadAction<FilterItemType>) => {
      state.filter = action.payload;
    },
  },
  selectors: {
    selectMoviesState: (state) => state,
    selectMoviesFilter: (state) => state.filter,
    selectMovies: (state) => state.movies,
  },
});

export const moviesActions = moviesSlice.actions;
export const { selectMoviesState, selectMoviesFilter, selectMovies } =
  moviesSlice.selectors;

export default moviesSlice.reducer;
