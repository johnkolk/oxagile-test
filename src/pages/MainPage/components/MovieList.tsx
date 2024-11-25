import React, { useEffect } from "react";
import Grid from "@/components/Grid/Grid";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { moviesActions, selectMoviesState } from "@/store/slices/moviesSlice";

const MovieList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movies, loading } = useAppSelector(selectMoviesState);

  useEffect(() => {
    dispatch(moviesActions.startFetching());
  }, []);

  if (loading) return <>Loading...</>;

  return <Grid items={movies} />;
};

export default MovieList;
