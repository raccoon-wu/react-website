import './index.css'
import Navbar from './assets/Components/NavBar/Navbar.jsx';
import { FrontPageButton } from './Buttons.jsx';

function App() {
  return (
      <>
      <div className='backgroundImage'></div>
          <Navbar />
          <div className='fillerDiv'>
              <div className='buttonContainer'>
                  <div className='topRow'>
                      <FrontPageButton
                          buttonText="2D ARTIST"
                          clickMessage=" "
                          hoverText="Illustrations, Concept Design (Character, Creature + Assets), Animation"
                      />
                      <span className="andDisplay"> & </span>
                  </div>
                  <div className='bottomRow'>
                      <FrontPageButton
                          buttonText="3D GENERALIST"
                          clickMessage=" "
                          hoverText="Low Poly Modelling, High Poly Sculpting, Texture Painting, Animation"
                      />
                  </div>
              </div>
          </div>
      </>
  );
}

export default App
