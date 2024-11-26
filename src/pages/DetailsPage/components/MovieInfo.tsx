import { Genre, Movie } from "@/types";

interface Props {
  item: Movie;
}

const MovieInfo: React.FC<Props> = ({ item }: Props) => {
  const { title, release_date, vote_average, genres, overview } = item;

  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-5">{title}</h1>
      <div className="my-3">
        <p className="mb-1">
          <strong>Release Date:</strong> {release_date}
        </p>
        <p className="mb-1">
          <strong>Rating:</strong> {vote_average}/10
        </p>
        <p className="mb-1">
          <strong>Genres:</strong>{" "}
          {genres.map((genre: Genre) => genre.name).join(", ")}
        </p>
      </div>
      <p className="w-8/12 text-gray-300 my-6">{overview}</p>
    </div>
  );
};

export default MovieInfo;
