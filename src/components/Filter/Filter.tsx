import React from "react";
import { FilterItemEnum, FilterItemType, FilterType } from "@/types";
import FilterItem from "./FilterItem";
import { moviesActions, selectMoviesFilter } from "@/store/slices/moviesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

const filters: FilterType[] = [
  {
    id: FilterItemEnum.Popular,
    label: "Popular",
  },
  {
    id: FilterItemEnum.Now,
    label: "Airing now",
  },
  {
    id: FilterItemEnum.Favorites,
    label: "Favorite",
  },
];

const Filter: React.FC = () => {
  const selectedFilter = useAppSelector(selectMoviesFilter);
  const dispatch = useAppDispatch();

  const onPress = (item: FilterItemType) => {
    dispatch(moviesActions.setFilter(item));
    dispatch(moviesActions.startFetching());
  };

  return (
    <nav className="flex justify-center space-x-4 py-4">
      {filters.map((item) => (
        <FilterItem
          key={item.id}
          item={item}
          isActive={selectedFilter === item.id}
          onPress={onPress}
        />
      ))}
    </nav>
  );
};

export default Filter;
