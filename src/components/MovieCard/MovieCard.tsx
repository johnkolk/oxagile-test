import { Movie } from "@/types";

type Props = {
  item: Movie;
};

const MovieCard: React.FC<Props> = ({ item }: Props) => {
  return (
    <div className="flex flex-col p-4 border rounded-lg shadow-lg w-60 h-80">
      <h3>{item.title}</h3>
      <h4>{item.adult.toString()}</h4>
    </div>
  );
};

export default MovieCard;
