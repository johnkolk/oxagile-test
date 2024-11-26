import { createBrowserRouter } from "react-router-dom";
import { MainPage, DetailsPage } from "@/pages";
import { Movie } from "@/types";
import NotFound from "@/components/NotFound/NotFound";

export const routes = {
  mainPage: {
    path: "/",
  },
  detailsPage: {
    path: "/details/:id",
    link: (id: Movie["id"]) => `/details/${id}`,
  },
  notFound: {
    path: "*",
  },
};

export const router = createBrowserRouter([
  {
    path: routes.mainPage.path,
    element: <MainPage />,
  },
  {
    path: routes.detailsPage.path,
    element: <DetailsPage />,
  },
  {
    path: routes.notFound.path,
    element: <NotFound />,
  },
]);
