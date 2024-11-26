import apiClient from "./apiClient";
import { FilterItemEnum, FilterItemType, Movie } from "@/types";

const FAVORITES_KEY = "favorites";

export const fetchMovies = async (filter: FilterItemType): Promise<Movie[]> => {
  if (filter === FilterItemEnum.Favorites) {
    return getFavorites();
  }

  const { data } = await apiClient.get(`/movie/${filter}`);
  return data.results;
};

export const fetchMovie = async (id: number): Promise<Movie[]> => {
  const { data } = await apiClient.get(`/movie/${id}`);
  return data;
};

const getFavorites = (): Movie[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const isFavorite = (id?: Movie["id"]): boolean => {
  return id ? getFavorites().some((fav) => fav.id === id) : false;
};

export const addToFavorites = (movie: Movie) => {
  const favorites = getFavorites();
  if (!isFavorite(movie.id)) {
    favorites.push(movie);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

export const removeFromFavorites = (id: Movie["id"]) => {
  const favorites = getFavorites().filter((item) => item.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};
