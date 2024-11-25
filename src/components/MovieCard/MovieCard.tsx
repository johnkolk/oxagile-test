import { Movie } from "@/types";
import { links } from "@/utils/links";
import { useMemo } from "react";
import { Link } from "react-router-dom";

type Props = {
  item: Movie;
  onPress: () => void;
};

const MovieCard: React.FC<Props> = ({ item, onPress }: Props) => {
  const { id, title, poster_path } = item;

  const imagePath = useMemo(
    () => links.moviePoster(poster_path),
    [poster_path]
  );

  return (
    <Link to={`/details/${id}`}>
      <div
        className="flex flex-col border overflow-hidden rounded-lg shadow-lg w-60 h-80 cursor-pointer transition-transform transform hover:scale-105"
        onClick={onPress}
      >
        <img className="w-full" src={imagePath} alt={title} />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white text-center px-2 py-4 font-bold">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
