import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages";

export const routes = {
  mainPage: {
    path: "/",
  },
};

export const router = createBrowserRouter([
  {
    path: routes.mainPage.path,
    element: <MainPage />,
  },
]);
