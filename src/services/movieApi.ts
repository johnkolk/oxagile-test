import apiClient from "./apiClient";
import { FilterItemEnum, FilterItemType, Movie } from "@/types";

const FAVORITES_KEY = "favorites";

export const fetchMovies = async (filter: FilterItemType): Promise<Movie[]> => {
  if (filter === FilterItemEnum.Favorites) {
    return getFavorites();
  }

  try {
    const { data } = await apiClient.get(`/movie/${filter}`);
    return data.results;
  } catch (err) {
    throw new Error(String(err));
  }
};

export const fetchMovie = async (id: number): Promise<Movie | null> => {
  try {
    const { data } = await apiClient.get(`/movie/${id}`);
    return data;
  } catch (err) {
    console.log("fetchMovie ", err);
    throw new Error(String(err));
  }
};

export const getFavorites = (): Movie[] => {
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
