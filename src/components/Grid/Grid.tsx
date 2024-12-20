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
  const { ref, focusKey } = useFocusable({
    saveLastFocusedChild: true,
  });

  const onMovieFocus = useCallback(({ y }: { y: number }) => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, []);

  if (!items) {
    return <div className="text-center text-white py-10">Movie not found</div>;
  }

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6"
      >
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
