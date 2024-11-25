import React, { memo, useMemo } from "react";
import { links } from "@/utils/links";

interface Props {
  path?: string;
}

const BackdropImage: React.FC<Props> = ({ path }: Props) => {
  // TODO: Need to check path
  const imagePath = useMemo(() => links.movieBackdrop(path), [path]);

  return (
    <div
      style={{
        backgroundImage: imagePath,
      }}
      className="absolute w-full h-full"
    />
  );
};

export default memo(BackdropImage);
