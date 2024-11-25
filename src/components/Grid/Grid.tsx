import React from "react";
import { Movie } from "@/types";
import MovieCard from "../MovieCard/MovieCard";

interface Props {
  items: Movie[];
}

const Grid: React.FC<Props> = ({ items }: Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item) => (
        <MovieCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Grid;
