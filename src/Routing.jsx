import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Routing.jsx only purpose is to display the 'root' (App.jsx)
// Never import anything random like pages.jsx, useState() because React no like and it gay c: (security risk)
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// The above line breakdowns to the following lines: 

// Search for the HTML element with the id of 'root' and assign it to rootContainer
// const rootContainer = document.getElementById('root');

// Initialize a React root on this container
// const root = createRoot(rootContainer);

// Render the RouterProvider with the defined router
// root.render(<RouterProvider router={router} />);

