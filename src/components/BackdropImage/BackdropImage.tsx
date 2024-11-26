import React, { memo, useMemo } from "react";
import { links } from "@/utils/links";

interface Props {
  path: string;
}

const BackdropImage: React.FC<Props> = ({ path }: Props) => {
  const imagePath = useMemo(() => links.movieBackdrop(path), [path]);

  return (
    <div
      style={{
        backgroundImage: `url(${imagePath})`,
      }}
      className="absolute w-full h-full bg-no-repeat bg-cover bg-center"
    />
  );
};

export default memo(BackdropImage);
