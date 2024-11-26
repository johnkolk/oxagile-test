import React, { useEffect } from "react";
import Grid from "@/components/Grid/Grid";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { moviesActions, selectMoviesState } from "@/store/slices/moviesSlice";
import Loader from "@/components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { Movie } from "@/types";
import { routes } from "@/router";
import ErrorHint from "@/components/ErrorHint/ErrorHint";

const MovieList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { movies, loading, error } = useAppSelector(selectMoviesState);

  useEffect(() => {
    dispatch(moviesActions.startFetching());
  }, [dispatch]);

  const onPress = (id: Movie["id"]) => {
    navigate(routes.detailsPage.link(id));
  };

  if (loading) <Loader />;

  if (error) return <ErrorHint error={error} />;

  return (
    <div className="container mx-auto">
      <Grid items={movies} onPress={onPress} />
    </div>
  );
};

export default MovieList;
