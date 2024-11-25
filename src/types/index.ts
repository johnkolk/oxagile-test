export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  adult: string;
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
