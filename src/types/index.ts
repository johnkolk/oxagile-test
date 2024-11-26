export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  adult: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export enum FilterItemEnum {
  Popular = "popular",
  Now = "now_playing",
  Favorites = "favorites",
}

export type FilterItemType = "popular" | "now_playing" | "favorites";
export type FilterType = {
  id: FilterItemType;
  label: string;
};
