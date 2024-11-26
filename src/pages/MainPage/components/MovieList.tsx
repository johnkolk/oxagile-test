import React, { useEffect } from "react";
import Grid from "@/components/Grid/Grid";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { moviesActions, selectMoviesState } from "@/store/slices/moviesSlice";
import Loader from "@/components/Loader/Loader";

const MovieList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error } = useAppSelector(selectMoviesState);

  useEffect(() => {
    dispatch(moviesActions.startFetching());
  }, [dispatch]);

  const onPress = () => {
    console.log("Card Press");
  };

  if (loading) <Loader />;
  if (error) <div>Error {error}</div>;

  return <Grid items={movies} onPress={onPress} />;
};

export default MovieList;
