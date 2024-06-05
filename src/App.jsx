// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './assets/Components/Pages/MainPage.jsx';
import Gallery2D from './assets/Components/Pages/2DPage.jsx';
import Gallery3D from './assets/Components/Pages/3DPage.jsx';
import NavBar from './assets/Components/NavBar/Navbar.jsx';

// App is always running
const App = () => {
  // presetSelection = getter
  const [presetSelection, setPresetSelection] = useState('');

  // presetSelection === '';
  // setPresetSelection("gay");
  // presetSelection === "gay";
  
  return (
    // The Router, Routes, Route system is a custom version of createBrowserRouter() which is a preset
    // Using Router, Routes and Route allows custom placements like 'NavBar' below, it will always be in every page (MainPage, Gallery2D, Gallery3D)

    // <Router>
    <>
     <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/2DGallery" element={<Gallery2D />} />
        <Route path="/3DGallery" element={<Gallery3D />} />
      </Routes>
      </>
    // </Router>
  );
};

export default App;