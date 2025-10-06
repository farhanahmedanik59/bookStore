import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../pages/Root/Root";
import EoorPage from "../pages/ErrorPage/EoorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import Readlist from "../pages/Readlist/Readlist";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <EoorPage></EoorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        Component: Home,
        path: "/",
      },
      {
        path: "/about",
        Component: About,
      },
      {
        loader: () => fetch("/booksData.json"),
        path: "/bookDetails/:id",
        Component: BookDetails,
      },
      {
        path: "/readlist",
        loader: () => fetch("/booksData.json"),
        Component: Readlist,
      },
    ],
  },
]);
