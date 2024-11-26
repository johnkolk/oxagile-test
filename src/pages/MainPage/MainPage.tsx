import React from "react";
import Filter from "@/components/Filter/Filter";
import MovieList from "./components/MovieList";
import Layout from "@/components/Layout/Layout";

const MainPage: React.FC = () => {
  return (
    <Layout className="py-10">
      <Filter focusKey="MENU" />
      <MovieList />
    </Layout>
  );
};

export default MainPage;
