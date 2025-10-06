import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../pages/Root/Root";
import EoorPage from "../pages/ErrorPage/EoorPage";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <EoorPage></EoorPage>,
    children: [
      {
        index: true,
        Component: Home,
        path: "/",
      },
    ],
  },
]);
