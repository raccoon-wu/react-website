import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main.jsx";
import Gallery2D from "./assets/Components/Pages/2DPage.jsx";
import Gallery3D from "./assets/Components/Pages/3DPage.jsx";

const Routing = () => {
  return (
    <Main />
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/2DGallery",
    element: <Gallery2D/>,
  },
  {
    path: "/3DGallery",
    element: <Gallery3D/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

