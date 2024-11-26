import { Movie } from "@/types";
import { links } from "@/utils/links";
import { useMemo } from "react";
import { StarIcon } from "../StarIcon/StarIcon";
import { isFavorite } from "@/services/movieApi";
import {
  FocusableComponentLayout,
  FocusDetails,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { cn } from "@/utils/utils";

type Props = {
  item: Movie;
  onPress: (id: Movie["id"]) => void;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
};

const MovieCard: React.FC<Props> = ({ item, onPress, onFocus }: Props) => {
  const { id, title, poster_path } = item;
  const { ref, focused } = useFocusable({
    onEnterPress: () => onPress(id),
    onFocus,
  });

  const imagePath = useMemo(
    () => links.moviePoster(poster_path),
    [poster_path]
  );

  const className = cn([
    "flex flex-col overflow-hidden border-white rounded-lg shadow-lg cursor-pointer transition-all transition-transform transform hover:scale-125 hover:z-10 hover:border-1 hover:border-gray-800",
    {
      "scale-125 z-10 border-gray-700 border-1 shadow-lg": focused,
    },
  ]);

  return (
    <div ref={ref} className={className} onClick={() => onPress(id)}>
      {isFavorite(id) && (
        <div className="absolute top-3 right-4">
          <StarIcon />
        </div>
      )}

      <img className="w-full" src={imagePath} alt={title} />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent text-white text-center px-2 py-4 font-bold">
        {title}
      </div>
    </div>
  );
};

export default MovieCard;
