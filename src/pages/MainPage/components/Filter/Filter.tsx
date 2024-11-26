import React, { useEffect, useMemo } from "react";
import { FilterItemEnum, FilterItemType, FilterType } from "@/types";
import FilterItem from "./FilterItem";
import { moviesActions, selectMoviesFilter } from "@/store/slices/moviesSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { getFavorites } from "@/services/movieApi";

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
  const { ref, focusKey, focusSelf } = useFocusable();

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  const onPress = (item: FilterItemType) => {
    dispatch(moviesActions.setFilter(item));
    dispatch(moviesActions.startFetching());
  };

  const favoritesCount = useMemo(() => getFavorites().length, []);

  return (
    <FocusContext.Provider value={focusKey}>
      <nav ref={ref} className="flex justify-center space-x-2 py-4 mb-10">
        {filters.map((item) => (
          <FilterItem
            key={item.id}
            item={item}
            isActive={selectedFilter === item.id}
            onPress={onPress}
            count={
              item.id === FilterItemEnum.Favorites ? favoritesCount : undefined
            }
          />
        ))}
      </nav>
    </FocusContext.Provider>
  );
};

export default Filter;
