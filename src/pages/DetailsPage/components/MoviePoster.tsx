import { memo, useMemo } from "react";
import { links } from "@/utils/links";

interface Props {
  path: string;
}

const MoviePoster: React.FC<Props> = ({ path }: Props) => {
  const imagePath = useMemo(() => links.movieBackdrop(path), [path]);
  return <img src={imagePath} />;
};

export default memo(MoviePoster);
