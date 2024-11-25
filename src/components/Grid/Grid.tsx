import React from "react";
import { Movie } from "@/types";
import MovieCard from "../MovieCard/MovieCard";

interface Props {
  items: Movie[];
  onPress: () => void;
}

const Grid: React.FC<Props> = ({ items, onPress }: Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item) => (
        <MovieCard key={item.id} item={item} onPress={onPress} />
      ))}
    </div>
  );
};

export default Grid;
