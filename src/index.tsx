import React from "react";
import ReactDOM from "react-dom/client";
import { Router, RouterProvider } from "react-router-dom";
import App from "./App";
import router from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
