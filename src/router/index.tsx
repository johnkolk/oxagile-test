import { createBrowserRouter } from "react-router-dom";
import { MainPage, DetailsPage } from "@/pages";

export const routes = {
  mainPage: {
    path: "/",
  },
  detailsPage: {
    path: "/details/:id",
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
]);
