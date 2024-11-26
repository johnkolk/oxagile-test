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

const DetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { item, loading } = useAppSelector(selectMovieState);
  const [favoriteMovie, setFavoriteMovie] = useState(isFavorite(Number(id)));

  useEffect(() => {
    if (id) dispatch(movieActions.startFetching(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        navigate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  const handleBack = () => {
    console.log("handleBack");
  };

  if (loading) return <Loader />;
  if (!item) return <div className="text-center py-10">Movie not found!</div>;

  const handleAddToFavorites = () => {
    if (favoriteMovie) removeFromFavorites(item.id);
    else addToFavorites(item);

    setFavoriteMovie(!favoriteMovie);
  };

  return (
    <Layout>
      <BackdropImage path={item.backdrop_path} />
      <div className="absolute bg-gradient bg-black w-full h-full opacity-75" />

      <div className="container mx-auto px-4 pt-20 relative flex gap-10">
        <div className="relative">
          <MoviePoster path={item.poster_path} />
          {favoriteMovie && (
            <div className="absolute top-4 right-4">
              <StarIcon />
            </div>
          )}
        </div>

        <div className="pt-3">
          <MovieInfo item={item} />

          <div className="flex gap-4">
            <button
              className="bg-gray-500 hover:bg-gray-400 transition-opacity text-white py-3 px-7 rounded-lg"
              onClick={handleAddToFavorites}
            >
              {favoriteMovie ? "Remove from Favorites" : "Add to Favorites"}
            </button>
            <button
              className="border text-white py-3 px-7 rounded-lg"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailsPage;
