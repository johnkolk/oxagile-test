import React from "react";
import Filter from "@/components/Filter/Filter";
import MovieList from "./components/MovieList";

const MainPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Filter />
      <MovieList />
    </div>
  );
};

export default MainPage;
