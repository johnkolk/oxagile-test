import { call, put, select, takeLatest } from "redux-saga/effects";
import { moviesActions, selectMoviesFilter } from "../slices/moviesSlice";
import { Movie } from "@/types";
import { fetchMovies, fetchMovie } from "@/services/movieApi";
import { movieActions } from "../slices/movieSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchMoviesSaga() {
  const filter: ReturnType<typeof selectMoviesFilter> = yield select(
    selectMoviesFilter
  );

  try {
    const response: Movie[] = yield call(fetchMovies, filter);
    yield put(moviesActions.fetchSuccess(response));
  } catch (err) {
    yield put(moviesActions.fetchError(err));
  }
}

function* fetchMovieSaga({ payload }: PayloadAction<Movie["id"]>) {
  try {
    const response: Movie = yield call(fetchMovie, payload);
    yield put(movieActions.fetchSuccess(response));
  } catch (err) {
    yield put(moviesActions.fetchError(err));
  }
}

export default function* rootSaga() {
  console.log("Root Saga");
  yield takeLatest(moviesActions.startFetching.type, fetchMoviesSaga);
  yield takeLatest(movieActions.startFetching.type, fetchMovieSaga);
}
