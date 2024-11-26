import React from "react";
import { Movie } from "@/types";
import MovieCard from "../MovieCard/MovieCard";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";

interface Props {
  items: Movie[];
  onPress: () => void;
}

const Grid: React.FC<Props> = ({ items, onPress }: Props) => {
  const { ref, focusKey } = useFocusable();

  if (items.length === 0)
    return <div className="text-center py-10">Movie not found</div>;

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="flex flex-wrap gap-5">
        {items.map((item) => (
          <MovieCard key={item.id} item={item} onPress={onPress} />
        ))}
      </div>
    </FocusContext.Provider>
  );
};

export default Grid;
