import apiClient from "./apiClient";
import { FilterItemEnum, FilterItemType, Movie } from "@/types";

export const fetchMovies = async (filter: FilterItemType): Promise<Movie[]> => {
  // Get request to localStorage favorites movies
  if (filter === FilterItemEnum.Favorites) {
    return getFavoritesMovies();
  }

  const { data } = await apiClient.get(`/movie/${filter}`);
  return data.results;
};

const getFavoritesMovies = (): Movie[] => {
  console.log("Get Favorites Movies");
  return [];
};
