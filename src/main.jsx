import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TwoDCollection from './2DPage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "2DPage",
    element: <TwoDCollection/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
