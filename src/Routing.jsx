// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainPage from "./assets/Components/Pages/MainPage.jsx";
// import Gallery2D from "./assets/Components/Pages/2DPage.jsx";
// import Gallery3D from "./assets/Components/Pages/3DPage.jsx";
// import NavBar from "./assets/Components/NavBar/Navbar.jsx";

// const Routing = () => {
//   const [presetState, setPresetState] = useState('Hi');
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <MainPage/>,
//     },
//     {
//       path: "/2DGallery",
//       element: <Gallery2D/>,
//     },
//     {
//       path: "/3DGallery",
//       // element: <Gallery3D/>,
//       element: <Gallery3D />,
//     },
//   ]);

//   return (
//     <>
//       <NavBar setPresetState={setPresetState}/>
//       <RouterProvider router={router} />
//     </>
//   );
// };



// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <RouterProvider router={router} />
//   <Routing />
// );

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./assets/Components/Pages/MainPage.jsx";
import Gallery2D from "./assets/Components/Pages/2DPage.jsx";
import Gallery3D from "./assets/Components/Pages/3DPage.jsx";
// import NavBar from "./assets/Components/NavBar/NavBar.jsx";

const Routing = () => {
  const [presetState, setPresetState] = useState('Hi');
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage presetState={presetState} setPresetState={setPresetState}/>,
    },
    {
      path: "/2DGallery",
      element: <Gallery2D presetState={presetState} setPresetState={setPresetState} />,
    },
    {
      path: "/3DGallery",
      element: <Gallery3D presetState={presetState} setPresetState={setPresetState} />,
    },
  ]);

  return (
    <>
      {/* <NavBar presetState={presetState} setPresetState={setPresetState} /> */}
      <RouterProvider router={router} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Routing />
);
