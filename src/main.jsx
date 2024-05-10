import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage.jsx'
import './index.css'
import TwoDCollection from './2DPage.jsx'
import ThreeDCollection from './3DPage.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },

  {
    path: "2DPage",
    element: <TwoDCollection/>,
  },

  {
    path: "3DPage",
    element: <ThreeDCollection/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
