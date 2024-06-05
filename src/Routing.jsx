// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Main from './Main.jsx';
// import Gallery2D from './assets/Components/Pages/2DPage.jsx';
// import Gallery3D from './assets/Components/Pages/3DPage.jsx';

// // Ensure that Routing is a valid React component
// const Routing = () => {
//   // const [presetSelection, setPresetSelection] = useState('');
//   return <Main />;
// };

// // Define routes
// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Main />,
//   },
//   {
//     path: '/2DGallery',
//     element: <Gallery2D />,
//   },
//   {
//     path: '/3DGallery',
//     element: <Gallery3D />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider Router={Router} />
// );

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// // Search for the HTML element with the id of 'root' and assign it to rootContainer
// const rootContainer = document.getElementById('root');

// // Initialize a React root on this container
// const root = createRoot(rootContainer);

// // Render the RouterProvider with the defined router
// root.render(<RouterProvider router={router} />);

