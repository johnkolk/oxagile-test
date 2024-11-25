import BackdropImage from "@/components/BackdropImage/BackdropImage";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { movieActions, selectMovieState } from "@/store/slices/movieSlice";
import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

const DetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { item, loading } = useAppSelector(selectMovieState);

  useEffect(() => {
    if (id) dispatch(movieActions.startFetching(Number(id)));
  }, [dispatch, id]);

  if (loading) return <>Loading...</>;

  return (
    <div className="container">
      <BackdropImage path={item?.backdrop_path} />
      {/* <div className="absolute" /> */}
    </div>
  );
};

export default DetailsPage;
