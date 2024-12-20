import BackdropImage from "@/components/BackdropImage/BackdropImage";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { movieActions, selectMovieState } from "@/store/slices/movieSlice";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MoviePoster from "./components/MoviePoster";
import MovieInfo from "./components/MovieInfo";
import {
  addToFavorites,
  isFavorite,
  removeFromFavorites,
} from "@/services/movieApi";
import { StarIcon } from "@/components/StarIcon/StarIcon";
import Loader from "@/components/Loader/Loader";
import Layout from "@/components/Layout/Layout";
import DetailsButtons from "./components/DetailsButtons";
import ErrorHint from "@/components/ErrorHint/ErrorHint";

const DetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { item, loading, error } = useAppSelector(selectMovieState);
  const [favoriteMovie, setFavoriteMovie] = useState(isFavorite(Number(id)));

  useEffect(() => {
    if (id) dispatch(movieActions.startFetching(Number(id)));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace" || event.key === "Escape") {
        navigate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dispatch, id, navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddToFavorites = () => {
    if (item) {
      if (favoriteMovie) removeFromFavorites(item.id);
      else addToFavorites(item);
    }

    setFavoriteMovie(!favoriteMovie);
  };

  const RenderContent = () => {
    if (loading) return <Loader />;
    if (!item || error)
      return (
        <div className="pt-6">
          <ErrorHint />
        </div>
      );
    return (
      <>
        <BackdropImage path={item.backdrop_path} />
        <div className="absolute bg-gradient bg-black w-full h-full opacity-75" />

        <div className="container mx-auto px-4 pt-20 flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative max-w-sm">
              <MoviePoster path={item.poster_path} />
              {favoriteMovie && (
                <div className="absolute top-4 right-4">
                  <StarIcon />
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-2/3 z-20">
            <MovieInfo item={item} />
            <DetailsButtons
              addFavorite={handleAddToFavorites}
              isFavorite={favoriteMovie}
              handleBack={handleBack}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <Layout>
      <RenderContent />
    </Layout>
  );
};

export default DetailsPage;
