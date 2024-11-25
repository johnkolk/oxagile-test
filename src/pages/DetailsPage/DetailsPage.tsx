import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage: React.FC = () => {
  const { id } = useParams();

  return <div className="container mx-auto">Details Page {id}</div>;
};

export default DetailsPage;
