import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { moviesActions, selectMoviesFilter } from "../slices/moviesSlice";
import { Movie } from "@/types";
import { fetchMovies } from "@/services/movieApi";

export function* fetchMoviesSaga() {
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

export function* moviesWatcherSaga() {
  yield takeLatest(moviesActions.startFetching.type, fetchMoviesSaga);
}

export default function* rootSaga() {
  console.log("Root Saga");
  yield all([moviesWatcherSaga()]);
}
