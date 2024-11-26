import React, { useCallback } from "react";
import { Movie } from "@/types";
import MovieCard from "../MovieCard/MovieCard";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";

interface Props {
  items: Movie[];
  onPress: (id: Movie["id"]) => void;
}

const Grid: React.FC<Props> = ({ items, onPress }: Props) => {
  const { ref, focusKey } = useFocusable({ saveLastFocusedChild: true });

  const onMovieFocus = useCallback(({ y }: { y: number }) => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, []);

  if (items.length === 0) {
    return <div className="text-center py-10">Movie not found</div>;
  }

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="flex flex-wrap gap-5 justify-center">
        {items.map((item) => (
          <MovieCard
            key={item.id}
            item={item}
            onPress={onPress}
            onFocus={onMovieFocus}
          />
        ))}
      </div>
    </FocusContext.Provider>
  );
};

export default Grid;
