// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './assets/Components/Pages/MainPage.jsx';
import Gallery2D from './assets/Components/Pages/2DPage.jsx';
import Gallery3D from './assets/Components/Pages/3DPage.jsx';
import NavBar from './assets/Components/NavBar/Navbar.jsx';

import { presetsOf3DCharacters} from './assets/3DGalleryRenders/3DPresets.js';
import { presetsOf2DCharacters } from './assets/2DGalleryRenders/2DPresets.js';

// App is always running
const App = () => {
  // presetSelection = getter
  const [get2DPreset, set2DPreset] = useState(presetsOf2DCharacters);
  const [get3DPreset, set3DPreset] = useState(presetsOf3DCharacters);
  
  return (
    // The Router, Routes, Route system is a custom version of createBrowserRouter() which is a preset
    // Using Router, Routes and Route allows custom placements like 'NavBar' below, it will always be in every page (MainPage, Gallery2D, Gallery3D)


    // If website loads slowly, consider using 'Switch' instead of 'Routes': 'Switch' is exclusive rendering where only only route is rendered whereas Routes render all that matches
    

    // Router, Routes and Route: Menu, Sections (Entree, Mains, Desserts etc) and Dishnames (Takoyaki, Curry Katsu, Daifuku)

    // Router is the top level component that wraps the application and maintains routing context for the entire application
    // Routes is a way to organise Route into structured chunks in case conditional rendering etc is needed
    // Route specifies what paths are rendered when the URL matches the specified path

    <Router>
    <NavBar set2DPreset={set2DPreset} get2DPreset={get2DPreset} 
             set3DPreset={set3DPreset} get3DPreset={get3DPreset} > </NavBar>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/2DGallery" element={<Gallery2D></Gallery2D>} />
        <Route path="/3DGallery" element={<Gallery3D></Gallery3D>} />
      </Routes>
    </Router>
  );
};


export default App;