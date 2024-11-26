import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { router } from "@/router";
import { store } from "@/store";
import "./index.css";
import { init } from "@noriginmedia/norigin-spatial-navigation";

init({
  // options
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
