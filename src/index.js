import React from "react";
import ReactDOM from "react-dom/client";
import API from "./MovieAPI/api";
import Home from "./MovieAPI/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <API />,
    error: <b>error not found</b>,
  },
  {
    path: "/rodish",
    element: <b>hello</b>,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
root.render(<RouterProvider router={router} />);
