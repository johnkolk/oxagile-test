import React from "react";
import Filter from "@/pages/MainPage/components/Filter/Filter";
import Layout from "@/components/Layout/Layout";
import MovieList from "./components/MovieList/MovieList";

const MainPage: React.FC = () => {
  return (
    <Layout className="py-20">
      <Filter />
      <MovieList />
    </Layout>
  );
};

export default MainPage;
